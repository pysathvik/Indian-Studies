import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"
import { cn } from "@/lib/utils"

interface PageWrapperProps {
  children: React.ReactNode
  className?: string
  showParticles?: boolean
}

export function PageWrapper({ 
  children, 
  className,
  showParticles = true 
}: PageWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {showParticles && <ParticleBackground />}
      <Navigation />
      <main className={cn("flex-1 pt-20", className)}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
