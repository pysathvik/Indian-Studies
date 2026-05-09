import { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"
import { EmissionsChart } from "@/components/charts/emissions-chart"
import { TemperatureChart } from "@/components/charts/temperature-chart"
import { RenewableGrowthChart } from "@/components/charts/renewable-growth-chart"
import { SectorEmissionsChart } from "@/components/charts/sector-emissions-chart"

export const metadata: Metadata = {
  title: "Statistics & Data | EcoVision India",
  description: "Visualize India's environmental data through interactive charts and comprehensive statistics.",
}

const keyStats = [
  { label: "Total CO2 Emissions", value: "2.88", unit: "Billion Tonnes/Year", change: "+4.3%", trend: "up" },
  { label: "Per Capita Emissions", value: "2.0", unit: "Tonnes CO2/Person", change: "+2.1%", trend: "up" },
  { label: "Renewable Capacity", value: "178", unit: "GW Installed", change: "+15%", trend: "up" },
  { label: "Forest Cover", value: "24.6", unit: "% of Land Area", change: "+0.2%", trend: "up" },
  { label: "Air Quality (PM2.5)", value: "58.1", unit: "μg/m³ Average", change: "-3.2%", trend: "down" },
  { label: "Groundwater Depletion", value: "61", unit: "% of Districts Affected", change: "+2%", trend: "up" },
]

export default function StatisticsPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Data & Analytics"
            title="Environmental Statistics"
            description="Comprehensive data visualization of India's environmental indicators, emissions trends, and sustainability progress."
          />
        </div>
      </section>

      {/* Key Statistics Cards */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyStats.map((stat, index) => (
              <GlassCard key={index} className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">
                      {stat.value}
                      <span className="text-lg font-normal text-muted-foreground ml-1">
                        {stat.unit}
                      </span>
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    stat.trend === "up" && stat.label.includes("Renewable") || stat.label.includes("Forest")
                      ? "bg-primary/10 text-primary"
                      : stat.trend === "down" && stat.label.includes("Air")
                      ? "bg-primary/10 text-primary"
                      : stat.trend === "up"
                      ? "bg-destructive/10 text-destructive"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {stat.change}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Emissions Trend Chart */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8">
            <EmissionsChart />
          </GlassCard>
        </div>
      </section>

      {/* Two Column Charts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-8">
              <TemperatureChart />
            </GlassCard>
            <GlassCard className="p-8">
              <SectorEmissionsChart />
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Renewable Growth Chart */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8">
            <RenewableGrowthChart />
          </GlassCard>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlassCard className="p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Data Sources</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">Ministry of Environment</p>
                <p className="text-sm text-muted-foreground">Government of India environmental data</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">Central Pollution Control Board</p>
                <p className="text-sm text-muted-foreground">Air and water quality monitoring</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">International Energy Agency</p>
                <p className="text-sm text-muted-foreground">Global energy statistics</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">World Bank Climate Portal</p>
                <p className="text-sm text-muted-foreground">Climate indicators and projections</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">India Meteorological Department</p>
                <p className="text-sm text-muted-foreground">Temperature and rainfall data</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <p className="font-medium text-foreground">Forest Survey of India</p>
                <p className="text-sm text-muted-foreground">Forest cover assessment</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </PageWrapper>
  )
}
