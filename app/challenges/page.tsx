import { Metadata } from "next"
import { Wind, Droplets, Trash2, Trees, Building2, Thermometer, AlertCircle, Factory } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"

export const metadata: Metadata = {
  title: "Environmental Challenges | EcoVision India",
  description: "Explore the pressing environmental challenges facing India, from air pollution to water crisis.",
}

const majorChallenges = [
  {
    icon: Wind,
    title: "Air Pollution Crisis",
    description: "India is home to 14 of the world's 20 most polluted cities. Delhi regularly experiences hazardous AQI levels, affecting millions of lives and reducing life expectancy.",
  },
  {
    icon: Droplets,
    title: "Water Scarcity",
    description: "Over 600 million Indians face high to extreme water stress. Groundwater depletion, polluted rivers, and changing rainfall patterns threaten water security.",
  },
  {
    icon: Trash2,
    title: "Waste Management",
    description: "India generates 62 million tonnes of waste annually, with only 20% processed. Landfills are overflowing and plastic pollution chokes waterways.",
  },
  {
    icon: Trees,
    title: "Deforestation",
    description: "Despite reforestation efforts, India loses forest cover to development, agriculture, and illegal logging. This affects biodiversity and carbon absorption.",
  },
  {
    icon: Building2,
    title: "Urban Sprawl",
    description: "Rapid urbanization strains infrastructure and increases pollution. Cities expand without adequate planning for sustainable development.",
  },
  {
    icon: Thermometer,
    title: "Heat Stress",
    description: "Rising temperatures and urban heat islands make cities unbearable during summer. Heat-related deaths are increasing, especially among vulnerable populations.",
  },
]

const caseStudies = [
  {
    title: "Delhi Air Pollution",
    location: "Delhi NCR",
    problem: "AQI regularly exceeds 500 during winter",
    causes: ["Vehicular emissions", "Stubble burning", "Industrial pollution", "Dust storms"],
    impact: "Reduces life expectancy by 9+ years for Delhi residents",
    status: "Critical",
  },
  {
    title: "Chennai Water Crisis",
    location: "Tamil Nadu",
    problem: "City nearly ran out of water in 2019",
    causes: ["Monsoon failure", "Over-extraction", "Lake encroachment", "Poor management"],
    impact: "8.5 million people affected, economy disrupted",
    status: "Recurring",
  },
  {
    title: "Yamuna River Pollution",
    location: "Delhi to Agra",
    problem: "River is essentially dead for 22 km stretch",
    causes: ["Sewage dumping", "Industrial waste", "Agricultural runoff", "Lack of flow"],
    impact: "Millions depend on polluted water, ecosystem destroyed",
    status: "Severe",
  },
]

const healthImpacts = [
  {
    icon: AlertCircle,
    title: "Respiratory Diseases",
    description: "Air pollution causes 1.67 million deaths annually in India. COPD, asthma, and lung cancer rates are rising, especially in urban areas.",
  },
  {
    icon: Droplets,
    title: "Waterborne Diseases",
    description: "Contaminated water causes millions of cases of diarrhea, typhoid, and cholera each year, primarily affecting children and the poor.",
  },
  {
    icon: Thermometer,
    title: "Heat-Related Illness",
    description: "Heat waves claimed thousands of lives in recent years. Outdoor workers and urban poor are particularly vulnerable to heat stress.",
  },
  {
    icon: Factory,
    title: "Industrial Hazards",
    description: "Communities near industrial zones face higher rates of cancer, birth defects, and respiratory problems from toxic exposure.",
  },
]

export default function ChallengesPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Facing Reality"
        title="Environmental Challenges"
        description="From Delhi's toxic air to Chennai's water crisis, India faces interconnected environmental challenges that demand urgent attention and innovative solutions."
        imageSrc="/images/challenges.jpg"
        imageAlt="Air pollution in Indian city"
      />

      {/* Major Challenges */}
      <ContentSection
        badge="Critical Issues"
        title="Major Environmental Challenges"
        description="The most pressing environmental issues threatening India's sustainable development."
        items={majorChallenges}
        columns={3}
      />

      {/* Case Studies */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Case Studies"
            title="Real-World Examples"
            description="Examining specific environmental crises that illustrate the scale of India's challenges."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <GlassCard key={index} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{study.location}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    study.status === "Critical" 
                      ? "bg-destructive/10 text-destructive" 
                      : "bg-amber-500/10 text-amber-500"
                  }`}>
                    {study.status}
                  </span>
                </div>
                
                <p className="text-foreground font-medium">{study.problem}</p>
                
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Key Causes:</p>
                  <div className="flex flex-wrap gap-2">
                    {study.causes.map((cause, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        {cause}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Impact:</strong> {study.impact}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Health Impacts */}
      <ContentSection
        badge="Human Cost"
        title="Health Impacts"
        description="Environmental degradation takes a severe toll on public health across India."
        items={healthImpacts}
        columns={2}
      />

      {/* Alarming Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">14</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Polluted Cities</p>
              <p className="mt-1 text-sm text-muted-foreground">In world&apos;s top 20</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">600M</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Water Stressed</p>
              <p className="mt-1 text-sm text-muted-foreground">People facing scarcity</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">1.67M</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Annual Deaths</p>
              <p className="mt-1 text-sm text-muted-foreground">From air pollution</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">62M</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Tonnes Waste</p>
              <p className="mt-1 text-sm text-muted-foreground">Generated annually</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
