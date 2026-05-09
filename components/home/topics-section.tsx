import Link from "next/link"
import { ArrowRight, Factory, CloudRain, Waves, Sprout, Cpu, BarChart3 } from "lucide-react"
import { GlassCard } from "@/components/glass-card"
import { SectionHeader } from "@/components/section-header"

const topics = [
  {
    icon: Factory,
    title: "India's Industrial Revolution",
    description: "From textile mills to tech hubs, trace India's industrial transformation and its environmental footprint.",
    href: "/industrialization",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: CloudRain,
    title: "Climate Science & Impacts",
    description: "Understand the science behind climate change and how it uniquely affects the Indian subcontinent.",
    href: "/climate-change",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Waves,
    title: "Environmental Challenges",
    description: "Explore the pressing environmental issues from air pollution to water crisis facing India today.",
    href: "/challenges",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Sprout,
    title: "Sustainable Solutions",
    description: "Discover innovative solutions and policy initiatives driving India's green transition.",
    href: "/solutions",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Cpu,
    title: "Future Outlook",
    description: "Explore scenarios and projections for India's environmental future and the path to sustainability.",
    href: "/future",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: BarChart3,
    title: "Data & Statistics",
    description: "Visualize India's environmental data through interactive charts and comprehensive statistics.",
    href: "/statistics",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
]

export function TopicsSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Explore Topics"
          title="Your Journey Through Environmental Understanding"
          description="Navigate through interconnected topics to build a comprehensive understanding of India's environmental landscape."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, index) => (
            <Link key={index} href={topic.href}>
              <GlassCard className="h-full group cursor-pointer">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl ${topic.bgColor} flex items-center justify-center`}>
                    <topic.icon className={`h-6 w-6 ${topic.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
