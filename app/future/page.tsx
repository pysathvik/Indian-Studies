import { Metadata } from "next"
import { Target, Rocket, Zap, Shield, Globe, TrendingUp } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"
import { ProjectionsChart } from "@/components/charts/projections-chart"
import { EnergyMixChart } from "@/components/charts/energy-mix-chart"

export const metadata: Metadata = {
  title: "Future Outlook | EcoVision India",
  description: "Explore scenarios and projections for India's environmental future and the path to sustainability.",
}

const targets = [
  {
    icon: Zap,
    title: "500 GW Renewable Energy",
    description: "India aims to achieve 500 GW of non-fossil fuel based energy capacity by 2030, a massive expansion from current levels.",
  },
  {
    icon: Target,
    title: "50% Renewable Power",
    description: "Half of India's electricity requirements to be met from renewable energy sources by 2030.",
  },
  {
    icon: Shield,
    title: "45% Emission Intensity Cut",
    description: "Reduce the emissions intensity of GDP by 45% from 2005 levels by 2030.",
  },
  {
    icon: Globe,
    title: "Net Zero by 2070",
    description: "India's commitment to achieve net-zero carbon emissions by 2070, balancing development with sustainability.",
  },
]

const opportunities = [
  {
    icon: Rocket,
    title: "Green Hydrogen Hub",
    description: "India aims to become a global hub for green hydrogen production and export, leveraging abundant solar and wind resources.",
  },
  {
    icon: TrendingUp,
    title: "Clean Tech Leadership",
    description: "Emerging opportunities in EV manufacturing, battery production, and renewable technology exports.",
  },
  {
    icon: Zap,
    title: "Energy Storage",
    description: "Grid-scale battery storage and pumped hydro projects will enable higher renewable penetration.",
  },
  {
    icon: Globe,
    title: "Carbon Markets",
    description: "India's carbon market framework will create new opportunities for emissions trading and climate finance.",
  },
]

const scenarios = [
  {
    title: "Business As Usual",
    description: "If current trends continue without significant policy changes",
    outcomes: [
      "Temperature rise of 2-3°C by 2100",
      "Severe water stress for 40% of population",
      "Continued high air pollution levels",
      "Economic losses from climate impacts",
    ],
    probability: "Without intervention",
    color: "destructive" as const,
  },
  {
    title: "Stated Policies Scenario",
    description: "If India meets its current commitments and targets",
    outcomes: [
      "Significant emissions peak by 2035",
      "40% reduction in air pollution",
      "Improved water management",
      "Strong green job creation",
    ],
    probability: "Current trajectory",
    color: "amber" as const,
  },
  {
    title: "Net Zero Pathway",
    description: "If India accelerates its green transition",
    outcomes: [
      "Net zero emissions by 2070",
      "Clean air in major cities",
      "Sustainable water resources",
      "Global clean tech leader",
    ],
    probability: "Ambitious pathway",
    color: "primary" as const,
  },
]

export default function FuturePage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Looking Ahead"
        title="Future Outlook"
        description="Explore the scenarios, targets, and opportunities shaping India's environmental future as the nation charts its path toward sustainability."
        imageSrc="/images/future.jpg"
        imageAlt="Sustainable future city vision"
      />

      {/* 2030 Targets */}
      <ContentSection
        badge="2030 Goals"
        title="India's Climate Targets"
        description="Key commitments made under the Paris Agreement and COP26."
        items={targets}
        columns={2}
      />

      {/* Projections Chart */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Projections"
            title="Emissions Trajectory"
            description="Projected CO2 emissions under different scenarios through 2050."
          />
          <div className="mt-12">
            <GlassCard className="p-8">
              <ProjectionsChart />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Energy Mix Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Energy Transition"
            title="Future Energy Mix"
            description="How India's power generation mix is expected to evolve by 2030."
          />
          <div className="mt-12">
            <GlassCard className="p-8">
              <EnergyMixChart />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Scenarios"
            title="Possible Futures"
            description="Different pathways based on policy decisions and climate action."
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <GlassCard key={index} className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {scenario.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    scenario.color === "destructive"
                      ? "bg-destructive/10 text-destructive"
                      : scenario.color === "amber"
                      ? "bg-amber-500/10 text-amber-500"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {scenario.probability}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {scenario.description}
                </p>
                <ul className="space-y-2">
                  {scenario.outcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 ${
                        scenario.color === "destructive"
                          ? "bg-destructive"
                          : scenario.color === "amber"
                          ? "bg-amber-500"
                          : "bg-primary"
                      }`} />
                      <span className="text-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <ContentSection
        badge="Opportunities"
        title="Green Growth Potential"
        description="Emerging opportunities in India's transition to a sustainable economy."
        items={opportunities}
        columns={2}
      />
    </PageWrapper>
  )
}
