import { Factory, Thermometer, AlertTriangle, Lightbulb } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { SectionHeader } from "@/components/section-header"

const overviewItems = [
  {
    icon: Factory,
    title: "Industrialization",
    description:
      "India's rapid industrial growth since independence has transformed its economy, but at a significant environmental cost. Understanding this history is crucial for sustainable development.",
  },
  {
    icon: Thermometer,
    title: "Climate Change",
    description:
      "Rising temperatures, erratic monsoons, and extreme weather events are becoming the new normal. India faces unique vulnerabilities due to its geography and population density.",
  },
  {
    icon: AlertTriangle,
    title: "Environmental Challenges",
    description:
      "From air pollution in Delhi to water scarcity in Chennai, India grapples with interconnected environmental crises that demand immediate attention and action.",
  },
  {
    icon: Lightbulb,
    title: "Sustainable Solutions",
    description:
      "India is emerging as a leader in renewable energy, with ambitious targets for solar and wind power. Innovation and policy are driving the transition to a greener economy.",
  },
]

export function OverviewSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Overview"
          title="India at the Crossroads of Development and Environment"
          description="A comprehensive look at the interconnected challenges and opportunities facing India in the era of climate change."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {overviewItems.map((item, index) => (
            <GlassCard key={index} className="group">
              <div className="flex gap-5">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
