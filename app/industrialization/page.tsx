import { Metadata } from "next"
import { Factory, Zap, Building2, Train, Cpu, TrendingUp, CloudCog, Leaf } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { Timeline } from "@/components/timeline"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"

export const metadata: Metadata = {
  title: "Industrialization in India | EcoVision India",
  description: "Explore India's industrial revolution from independence to the present day, and understand its environmental implications.",
}

const industrialPhases = [
  {
    year: "1947-1960s",
    title: "Foundation Years",
    description: "Post-independence focus on heavy industries. Establishment of steel plants in Bhilai, Durgapur, and Rourkela. Launch of five-year plans prioritizing industrial self-sufficiency.",
  },
  {
    year: "1970s-1980s",
    title: "Green Revolution Era",
    description: "Agricultural modernization increased energy demand. Expansion of fertilizer and chemical industries. Growth of textile mills and automotive sector.",
  },
  {
    year: "1991",
    title: "Economic Liberalization",
    description: "LPG reforms opened India to global markets. Foreign investment surge accelerated industrial growth. Rapid expansion of manufacturing and services sectors.",
  },
  {
    year: "2000s",
    title: "IT Boom & Services",
    description: "Rise of IT parks and software exports. Bangalore, Hyderabad, and Pune became tech hubs. Data centers and electronics manufacturing expansion.",
  },
  {
    year: "2010s-Present",
    title: "Make in India Era",
    description: "Manufacturing push under Make in India. Growth in renewable energy sector. Focus on sustainable industrial development.",
  },
]

const sectors = [
  {
    icon: Factory,
    title: "Heavy Industries",
    description: "Steel, cement, and chemicals form the backbone of India's industrial output, contributing significantly to both GDP and emissions.",
  },
  {
    icon: Zap,
    title: "Power Generation",
    description: "India's power sector, historically coal-dependent, is transitioning to renewable sources while meeting growing demand.",
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Rapid urbanization drives massive construction, consuming resources and energy while transforming India's landscape.",
  },
  {
    icon: Train,
    title: "Transportation",
    description: "Railways, aviation, and road transport connect India while contributing to the nation's carbon footprint.",
  },
  {
    icon: Cpu,
    title: "Information Technology",
    description: "The IT sector has made India a global leader in software services, with growing concerns about data center energy use.",
  },
  {
    icon: TrendingUp,
    title: "Manufacturing",
    description: "From textiles to automobiles, manufacturing employs millions and is crucial for India's economic growth.",
  },
]

const impacts = [
  {
    icon: CloudCog,
    title: "Air Quality Degradation",
    description: "Industrial emissions contribute significantly to India's air pollution crisis, affecting public health and visibility in major cities.",
  },
  {
    icon: Factory,
    title: "Carbon Emissions",
    description: "India is the world's third-largest CO2 emitter, with industry accounting for a significant portion of total emissions.",
  },
  {
    icon: Building2,
    title: "Resource Depletion",
    description: "Mining, water extraction, and land use for industries put pressure on India's natural resources.",
  },
  {
    icon: Leaf,
    title: "Deforestation",
    description: "Industrial expansion and mining have led to significant forest loss, impacting biodiversity and carbon sinks.",
  },
]

export default function IndustrializationPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="India's Progress"
        title="The Industrial Revolution"
        description="From the first steel mills to modern tech parks, trace India's journey of industrial transformation and its environmental implications."
        imageSrc="/images/industrialization.jpg"
        imageAlt="Indian industrial landscape"
      />

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Historical Journey"
            title="Industrial Development Timeline"
            description="Key milestones in India's industrialization journey from independence to present day."
          />
          <div className="mt-16">
            <Timeline items={industrialPhases} />
          </div>
        </div>
      </section>

      {/* Key Sectors */}
      <ContentSection
        badge="Key Sectors"
        title="Pillars of Indian Industry"
        description="The major industrial sectors driving India's economic growth and their environmental footprint."
        items={sectors}
        columns={3}
        className="bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />

      {/* Environmental Impact */}
      <ContentSection
        badge="Environmental Impact"
        title="The Cost of Progress"
        description="Understanding the environmental consequences of rapid industrialization."
        items={impacts}
        columns={2}
      />

      {/* Statistics Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">17%</p>
              <p className="mt-2 text-lg font-semibold text-foreground">GDP from Manufacturing</p>
              <p className="mt-1 text-sm text-muted-foreground">Contribution to national economy</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">130M+</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Industrial Workers</p>
              <p className="mt-1 text-sm text-muted-foreground">Employment in manufacturing sector</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">2.8B</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Tonnes CO2/Year</p>
              <p className="mt-1 text-sm text-muted-foreground">Annual industrial emissions</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
