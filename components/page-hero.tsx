import Image from "next/image"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  badge?: string
  title: string
  description?: string
  imageSrc: string
  imageAlt: string
  className?: string
}

export function PageHero({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[60vh] flex items-center justify-center overflow-hidden", className)}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {badge && (
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {badge}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
