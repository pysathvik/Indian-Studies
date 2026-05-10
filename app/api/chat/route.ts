import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai'
import { SYSTEM_PROMPT, findInstantAnswer } from '@/lib/chatbot-config'

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  // Get the last user message
  const lastMessage = messages[messages.length - 1]
  const userInput = lastMessage.content

  // Check for instant answer first
  const instantAnswer = findInstantAnswer(userInput)

  if (instantAnswer) {
    // Return instant answer as a stream response
    return new Response(
      JSON.stringify({
        messages: [
          ...messages,
          {
            role: 'assistant',
            content: instantAnswer,
            id: `instant-${Date.now()}`,
            createdAt: new Date(),
          },
        ],
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  // Stream AI response for out-of-box questions
  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    abortSignal: req.signal,
  })

  return result.toUIMessageStreamResponse({
    originalMessages: messages,
    consumeSseStream: consumeStream,
  })
}
