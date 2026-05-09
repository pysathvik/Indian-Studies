import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"

export function CTASection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <GlassCard className="max-w-4xl mx-auto text-center py-12 px-8" glow>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Have Questions About{" "}
              <span className="text-gradient">Climate Change?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered assistant is here to help you understand complex 
              environmental topics and find answers to your questions about 
              India&apos;s climate challenges and solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="group rounded-full px-8">
                <Link href="/chat">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with EcoBot
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 glass border-primary/20"
              >
                <Link href="/references">
                  View References
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
