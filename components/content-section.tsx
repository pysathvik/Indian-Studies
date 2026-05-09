import { cn } from "@/lib/utils"
import { GlassCard } from "@/components/glass-card"
import { SectionHeader } from "@/components/section-header"
import type { LucideIcon } from "lucide-react"

interface ContentItem {
  icon: LucideIcon
  title: string
  description: string
}

interface ContentSectionProps {
  badge?: string
  title: string
  description?: string
  items: ContentItem[]
  className?: string
  columns?: 2 | 3
}

export function ContentSection({
  badge,
  title,
  description,
  items,
  className,
  columns = 2,
}: ContentSectionProps) {
  return (
    <section className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <SectionHeader badge={badge} title={title} description={description} />

        <div
          className={cn(
            "mt-12 grid grid-cols-1 gap-6",
            columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          {items.map((item, index) => (
            <GlassCard key={index} className="group">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
