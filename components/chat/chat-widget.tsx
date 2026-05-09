"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  Sparkles, 
  Leaf, 
  X, 
  MessageCircle,
  Minimize2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const suggestedQuestions = [
  "What are India's climate targets for 2030?",
  "How does air pollution affect Delhi?",
  "What is India doing for renewable energy?",
  "What are the Panchamrit commitments?",
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
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

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

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
    <>
      {/* Floating Button */}
      <button
        onClick={() => {
          setIsOpen(true)
          setIsMinimized(false)
        }}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full",
          "bg-primary text-primary-foreground shadow-lg",
          "flex items-center justify-center",
          "transition-all duration-300 hover:scale-110 hover:shadow-xl",
          "border border-primary/20",
          isOpen && !isMinimized && "scale-0 opacity-0"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
        {messages.length > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-medium">
            {messages.length}
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50",
          "w-[380px] max-w-[calc(100vw-48px)]",
          "transition-all duration-300 ease-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
          isMinimized ? "h-14" : "h-[600px] max-h-[calc(100vh-100px)]"
        )}
      >
        <div 
          className={cn(
            "h-full flex flex-col rounded-2xl overflow-hidden",
            "bg-background/80 backdrop-blur-xl",
            "border border-border/50 shadow-2xl"
          )}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between p-4 border-b border-border/50 bg-primary/5 cursor-pointer"
            onClick={() => isMinimized && setIsMinimized(false)}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm flex items-center gap-1.5">
                  EcoBot
                  <Sparkles className="h-3 w-3 text-primary" />
                </h3>
                <p className="text-xs text-muted-foreground">Climate AI Assistant</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMinimized(!isMinimized)
                }}
              >
                <Minimize2 className="h-4 w-4" />
                <span className="sr-only">Minimize</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(false)
                }}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </div>

          {/* Chat Body */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center px-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-base font-semibold text-foreground mb-2">
                      Hello! I&apos;m EcoBot
                    </h2>
                    <p className="text-muted-foreground text-sm mb-6">
                      Ask me anything about climate change and sustainability in India.
                    </p>
                    
                    {/* Suggested Questions */}
                    <div className="space-y-2 w-full">
                      {suggestedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="w-full text-left p-3 rounded-xl bg-primary/5 hover:bg-primary/10 text-xs text-foreground transition-colors border border-primary/10"
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
                          "flex gap-2",
                          message.role === "user" ? "flex-row-reverse" : "flex-row"
                        )}
                      >
                        {/* Avatar */}
                        <div
                          className={cn(
                            "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-secondary-foreground"
                          )}
                        >
                          {message.role === "user" ? (
                            <User className="h-3.5 w-3.5" />
                          ) : (
                            <Bot className="h-3.5 w-3.5" />
                          )}
                        </div>

                        {/* Message Content */}
                        <div
                          className={cn(
                            "max-w-[75%] p-3 rounded-2xl",
                            message.role === "user"
                              ? "bg-primary text-primary-foreground rounded-tr-sm"
                              : "bg-secondary/50 text-foreground rounded-tl-sm"
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
                      <div className="flex gap-2">
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                          <Bot className="h-3.5 w-3.5" />
                        </div>
                        <div className="p-3 rounded-2xl bg-secondary/50 rounded-tl-sm">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                            <span>Thinking...</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="p-3 border-t border-border/50 bg-background/50">
                <div className="flex gap-2 items-center bg-secondary/30 rounded-xl p-1.5">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about climate in India..."
                    disabled={isLoading}
                    className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground px-2 py-1.5 text-sm"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!input.trim() || isLoading}
                    className="rounded-lg h-8 w-8"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span className="sr-only">Send message</span>
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}
