import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/glass-card"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Vertical line */}
      <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col md:flex-row gap-4 md:gap-8",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

            {/* Year badge */}
            <div className={cn(
              "md:w-1/2 flex",
              index % 2 === 0 ? "md:justify-end" : "md:justify-start"
            )}>
              <div className="ml-12 md:ml-0">
                <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary border border-primary/20">
                  {item.year}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-1/2 ml-12 md:ml-0">
              <GlassCard className="max-w-md" hover={false}>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </GlassCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
