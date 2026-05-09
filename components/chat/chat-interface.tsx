"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Send, Bot, User, Loader2, Sparkles, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { cn } from "@/lib/utils"

const suggestedQuestions = [
  "What are India's main climate targets for 2030?",
  "How does air pollution affect health in Delhi?",
  "What is India doing to expand renewable energy?",
  "Explain the impact of climate change on Indian monsoons",
  "What are the Panchamrit commitments?",
  "How much has India's temperature increased?",
]

export function ChatInterface() {
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "streaming" || status === "submitted"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput("")
  }

  const handleSuggestedQuestion = (question: string) => {
    sendMessage({ text: question })
  }

  return (
    <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-280px)]">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-primary flex items-center justify-center">
              <Sparkles className="h-2.5 w-2.5 text-primary-foreground" />
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-foreground">EcoBot</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Your AI assistant for climate and sustainability questions
        </p>
      </div>

      {/* Chat Messages */}
      <GlassCard className="flex-1 overflow-hidden p-0" hover={false}>
        <div className="h-full overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <Leaf className="h-12 w-12 text-primary/50 mb-4" />
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Start a conversation
              </h2>
              <p className="text-muted-foreground text-sm mb-6 max-w-md">
                Ask me anything about climate change, environmental challenges, 
                or sustainability initiatives in India.
              </p>
              
              {/* Suggested Questions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-left p-3 rounded-lg bg-primary/5 hover:bg-primary/10 text-sm text-foreground transition-colors border border-primary/10"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    {message.role === "user" ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div
                    className={cn(
                      "flex-1 max-w-[80%] p-4 rounded-2xl",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-secondary/50 text-foreground rounded-tl-none"
                    )}
                  >
                    {message.parts.map((part, index) => {
                      if (part.type === "text") {
                        return (
                          <div
                            key={index}
                            className="text-sm leading-relaxed whitespace-pre-wrap"
                          >
                            {part.text}
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                </div>
              ))}

              {/* Loading indicator */}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-secondary/50 rounded-tl-none">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </GlassCard>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mt-4">
        <GlassCard className="p-2" hover={false}>
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about climate change in India..."
              disabled={isLoading}
              className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-3 py-2 text-sm"
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="rounded-xl"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </GlassCard>
        <p className="text-xs text-muted-foreground text-center mt-2">
          EcoBot may make mistakes. Verify important information from official sources.
        </p>
      </form>
    </div>
  )
}
