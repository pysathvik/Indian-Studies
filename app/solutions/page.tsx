import { Metadata } from "next"
import { Sun, Wind, Battery, Recycle, TreePine, Train, Building, Lightbulb, Globe, Scale, Users, Leaf } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"

export const metadata: Metadata = {
  title: "Sustainable Solutions | EcoVision India",
  description: "Discover innovative solutions and policy initiatives driving India's green transition.",
}

const renewableEnergy = [
  {
    icon: Sun,
    title: "Solar Power Revolution",
    description: "India has become a global leader in solar energy, with installed capacity exceeding 70 GW. The International Solar Alliance, headquartered in India, promotes solar adoption globally.",
  },
  {
    icon: Wind,
    title: "Wind Energy Expansion",
    description: "India ranks fourth globally in wind energy capacity with over 45 GW installed. Gujarat and Tamil Nadu lead wind power generation.",
  },
  {
    icon: Battery,
    title: "Energy Storage",
    description: "Battery storage and pumped hydro projects are being developed to address the intermittency of renewable energy and ensure grid stability.",
  },
  {
    icon: Lightbulb,
    title: "Energy Efficiency",
    description: "The UJALA scheme has distributed over 360 million LED bulbs, saving billions in energy costs and reducing carbon emissions significantly.",
  },
]

const policyInitiatives = [
  {
    title: "Panchamrit Commitments",
    year: "2021",
    description: "India's five-fold commitment at COP26: 500 GW non-fossil capacity by 2030, 50% renewable energy, reduce emissions intensity by 45%, and achieve net-zero by 2070.",
    status: "In Progress",
  },
  {
    title: "National Solar Mission",
    year: "2010",
    description: "Ambitious program targeting 100 GW of solar capacity. India has exceeded expectations, becoming a global solar leader.",
    status: "Achieved",
  },
  {
    title: "Electric Vehicle Policy",
    year: "2019",
    description: "FAME II scheme promotes electric mobility with subsidies for EVs and charging infrastructure development.",
    status: "Active",
  },
  {
    title: "Green Hydrogen Mission",
    year: "2023",
    description: "Rs 19,744 crore mission to make India a global hub for green hydrogen production and export.",
    status: "Launched",
  },
]

const sustainablePractices = [
  {
    icon: Recycle,
    title: "Circular Economy",
    description: "India is promoting waste-to-energy plants, plastic recycling, and extended producer responsibility to minimize waste and resource use.",
  },
  {
    icon: TreePine,
    title: "Afforestation",
    description: "Green India Mission aims to create additional carbon sink of 2.5-3 billion tonnes through expanded forest cover.",
  },
  {
    icon: Train,
    title: "Sustainable Transport",
    description: "Metro rail expansion, EV adoption, and promotion of public transport are reducing urban transport emissions.",
  },
  {
    icon: Building,
    title: "Green Buildings",
    description: "GRIHA and IGBC certifications promote energy-efficient construction. India ranks third globally in green building footprint.",
  },
]

const grassrootsInitiatives = [
  {
    icon: Users,
    title: "Community Action",
    description: "Local communities are driving change through rainwater harvesting, waste segregation, and tree planting initiatives across India.",
  },
  {
    icon: Globe,
    title: "Youth Climate Movement",
    description: "Indian youth are leading climate activism, demanding stronger action and raising awareness about environmental issues.",
  },
  {
    icon: Scale,
    title: "Environmental Litigation",
    description: "Public interest litigation and NGT cases have led to significant environmental protections and corporate accountability.",
  },
  {
    icon: Leaf,
    title: "Sustainable Agriculture",
    description: "Natural farming, organic certification, and sustainable practices are being adopted by millions of farmers.",
  },
]

export default function SolutionsPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Path Forward"
        title="Sustainable Solutions"
        description="From solar power revolution to policy innovations, discover how India is leading the transition to a sustainable, low-carbon future."
        imageSrc="/images/solutions.jpg"
        imageAlt="Solar and wind energy in India"
      />

      {/* Renewable Energy */}
      <ContentSection
        badge="Clean Energy"
        title="Renewable Energy Revolution"
        description="India is rapidly expanding its renewable energy capacity, emerging as a global leader in clean energy adoption."
        items={renewableEnergy}
        columns={2}
      />

      {/* Policy Initiatives */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Policy Framework"
            title="Key Initiatives & Commitments"
            description="Government policies and international commitments driving India's green transition."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {policyInitiatives.map((policy, index) => (
              <GlassCard key={index} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {policy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">Launched {policy.year}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    policy.status === "Achieved" 
                      ? "bg-primary/10 text-primary" 
                      : policy.status === "Active" || policy.status === "In Progress"
                      ? "bg-blue-500/10 text-blue-500"
                      : "bg-amber-500/10 text-amber-500"
                  }`}>
                    {policy.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {policy.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <ContentSection
        badge="Green Practices"
        title="Sustainable Development"
        description="Innovative practices and technologies transforming India's approach to development."
        items={sustainablePractices}
        columns={2}
      />

      {/* Grassroots Initiatives */}
      <ContentSection
        badge="People Power"
        title="Grassroots Action"
        description="Citizens and communities driving change from the ground up."
        items={grassrootsInitiatives}
        columns={2}
        className="bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />

      {/* Progress Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Progress Tracker"
            title="Achievements So Far"
          />
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">170+</p>
              <p className="mt-2 text-lg font-semibold text-foreground">GW Renewable</p>
              <p className="mt-1 text-sm text-muted-foreground">Installed capacity</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">40%</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Clean Energy</p>
              <p className="mt-1 text-sm text-muted-foreground">Of power generation</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">360M</p>
              <p className="mt-2 text-lg font-semibold text-foreground">LED Bulbs</p>
              <p className="mt-1 text-sm text-muted-foreground">Distributed under UJALA</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">33%</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Forest Cover</p>
              <p className="mt-1 text-sm text-muted-foreground">Target by 2030</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
