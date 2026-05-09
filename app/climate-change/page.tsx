import { Metadata } from "next"
import { Thermometer, CloudRain, Wind, Mountain, Waves, Sun, Droplets, AlertTriangle } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { PageHero } from "@/components/page-hero"
import { ContentSection } from "@/components/content-section"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"

export const metadata: Metadata = {
  title: "Climate Change in India | EcoVision India",
  description: "Understand the science of climate change and how it uniquely affects the Indian subcontinent.",
}

const climateScience = [
  {
    icon: Sun,
    title: "Greenhouse Effect",
    description: "Gases like CO2 and methane trap heat in the atmosphere. India's emissions have grown rapidly with industrial development, contributing to global warming.",
  },
  {
    icon: Thermometer,
    title: "Rising Temperatures",
    description: "India has warmed by approximately 0.7°C since 1901. Heat waves are becoming more frequent and intense, especially in northern and central regions.",
  },
  {
    icon: CloudRain,
    title: "Monsoon Disruption",
    description: "Climate change is making monsoons more unpredictable. Extreme rainfall events are increasing while overall precipitation patterns shift.",
  },
  {
    icon: Mountain,
    title: "Himalayan Glaciers",
    description: "Glaciers in the Himalayas are retreating at alarming rates. This threatens water security for millions who depend on glacier-fed rivers.",
  },
]

const impacts = [
  {
    icon: Waves,
    title: "Sea Level Rise",
    description: "India's 7,500 km coastline is vulnerable to rising seas. Cities like Mumbai and Chennai face increased flooding and coastal erosion risks.",
  },
  {
    icon: Droplets,
    title: "Water Scarcity",
    description: "Changing rainfall patterns and glacier melt affect water availability. Over 600 million Indians face extreme water stress.",
  },
  {
    icon: Wind,
    title: "Extreme Weather",
    description: "Cyclones, floods, and droughts are becoming more severe. The economic losses from climate disasters are rising each year.",
  },
  {
    icon: AlertTriangle,
    title: "Agricultural Impact",
    description: "Climate variability threatens food security. Crop yields are affected by heat stress, changing seasons, and erratic rainfall.",
  },
]

const vulnerableRegions = [
  {
    name: "Coastal Areas",
    risk: "Sea level rise, cyclones",
    population: "170 million at risk",
    description: "Low-lying coastal areas face erosion, flooding, and saltwater intrusion affecting agriculture and drinking water.",
  },
  {
    name: "Himalayan Region",
    risk: "Glacier melt, landslides",
    population: "50 million affected",
    description: "Rapid glacier retreat threatens water supplies for the Indo-Gangetic plains and increases risk of glacial lake outburst floods.",
  },
  {
    name: "Indo-Gangetic Plains",
    risk: "Heat waves, floods",
    population: "500 million residents",
    description: "The agricultural heartland faces extreme heat, changing monsoon patterns, and alternating floods and droughts.",
  },
  {
    name: "Western India",
    risk: "Drought, water scarcity",
    population: "120 million affected",
    description: "Regions like Gujarat and Rajasthan face increasing desertification and groundwater depletion.",
  },
]

export default function ClimateChangePage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Understanding Climate Science"
        title="Climate Change in India"
        description="From rising temperatures to shifting monsoons, explore how climate change is reshaping the Indian subcontinent and affecting its 1.4 billion people."
        imageSrc="/images/climate-change.jpg"
        imageAlt="Climate change impacts in India"
      />

      {/* Climate Science Section */}
      <ContentSection
        badge="The Science"
        title="How Climate Change Works"
        description="Understanding the fundamental mechanisms driving global warming and their manifestation in India."
        items={climateScience}
        columns={2}
      />

      {/* Key Impacts */}
      <ContentSection
        badge="Key Impacts"
        title="Effects on India"
        description="The multifaceted ways climate change is affecting India's environment, economy, and society."
        items={impacts}
        columns={2}
        className="bg-gradient-to-b from-transparent via-primary/5 to-transparent"
      />

      {/* Vulnerable Regions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Regional Analysis"
            title="Most Vulnerable Regions"
            description="Climate change impacts vary significantly across India's diverse geography."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {vulnerableRegions.map((region, index) => (
              <GlassCard key={index} className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground">
                    {region.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                    {region.risk}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary">{region.population}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {region.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">0.7°C</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Temperature Rise</p>
              <p className="mt-1 text-sm text-muted-foreground">Since 1901</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">15%</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Glacier Loss</p>
              <p className="mt-1 text-sm text-muted-foreground">In past 50 years</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">12M</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Climate Migrants</p>
              <p className="mt-1 text-sm text-muted-foreground">Projected by 2050</p>
            </GlassCard>
            <GlassCard className="text-center py-8" glow>
              <p className="text-4xl font-bold text-gradient">$87B</p>
              <p className="mt-2 text-lg font-semibold text-foreground">Annual Losses</p>
              <p className="mt-1 text-sm text-muted-foreground">From climate disasters</p>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
