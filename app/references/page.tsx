import { Metadata } from "next"
import { ExternalLink, BookOpen, Globe, FileText, Database, Building } from "lucide-react"
import { PageWrapper } from "@/components/page-wrapper"
import { SectionHeader } from "@/components/section-header"
import { GlassCard } from "@/components/glass-card"

export const metadata: Metadata = {
  title: "References & Sources | EcoVision India",
  description: "Academic references, data sources, and further reading on climate change and sustainability in India.",
}

const governmentSources = [
  {
    title: "Ministry of Environment, Forest and Climate Change",
    description: "Official government portal for environmental policies, reports, and data on India's environmental initiatives.",
    url: "https://moef.gov.in/",
    type: "Government",
  },
  {
    title: "Central Pollution Control Board",
    description: "Real-time air and water quality monitoring data, environmental standards, and pollution control measures.",
    url: "https://cpcb.nic.in/",
    type: "Government",
  },
  {
    title: "India Meteorological Department",
    description: "Weather data, climate statistics, and historical temperature records for India.",
    url: "https://mausam.imd.gov.in/",
    type: "Government",
  },
  {
    title: "Ministry of New and Renewable Energy",
    description: "Policies, statistics, and progress reports on India's renewable energy sector.",
    url: "https://mnre.gov.in/",
    type: "Government",
  },
  {
    title: "Forest Survey of India",
    description: "Biennial assessments of India's forest cover, biodiversity, and carbon stock.",
    url: "https://fsi.nic.in/",
    type: "Government",
  },
  {
    title: "Bureau of Energy Efficiency",
    description: "Energy efficiency standards, programs, and data for India.",
    url: "https://beeindia.gov.in/",
    type: "Government",
  },
]

const internationalSources = [
  {
    title: "IPCC - Intergovernmental Panel on Climate Change",
    description: "Comprehensive assessment reports on climate science, impacts, and mitigation strategies.",
    url: "https://www.ipcc.ch/",
    type: "International",
  },
  {
    title: "International Energy Agency",
    description: "Global energy statistics, analysis, and India-specific energy data and projections.",
    url: "https://www.iea.org/",
    type: "International",
  },
  {
    title: "World Bank Climate Change Portal",
    description: "Climate data, vulnerability assessments, and development indicators for India.",
    url: "https://climateknowledgeportal.worldbank.org/",
    type: "International",
  },
  {
    title: "UNFCCC - United Nations Framework Convention",
    description: "India's NDC commitments, climate negotiations, and international agreements.",
    url: "https://unfccc.int/",
    type: "International",
  },
  {
    title: "Global Carbon Project",
    description: "Global and national CO2 emissions data, carbon budget analysis.",
    url: "https://www.globalcarbonproject.org/",
    type: "International",
  },
  {
    title: "Climate Action Tracker",
    description: "Independent scientific analysis of India's climate policies and commitments.",
    url: "https://climateactiontracker.org/",
    type: "International",
  },
]

const researchInstitutions = [
  {
    title: "The Energy and Resources Institute (TERI)",
    description: "Leading Indian research institution on energy, environment, and sustainable development.",
    url: "https://www.teriin.org/",
    type: "Research",
  },
  {
    title: "Centre for Science and Environment",
    description: "Research and advocacy on environmental issues, pollution monitoring, and policy analysis.",
    url: "https://www.cseindia.org/",
    type: "Research",
  },
  {
    title: "Indian Institute of Science",
    description: "Academic research on climate science, environmental engineering, and sustainability.",
    url: "https://www.iisc.ac.in/",
    type: "Research",
  },
  {
    title: "Council on Energy, Environment and Water",
    description: "Policy research on clean energy, climate resilience, and sustainable development.",
    url: "https://www.ceew.in/",
    type: "Research",
  },
  {
    title: "World Resources Institute India",
    description: "Research and tools for sustainable cities, climate, energy, and forests.",
    url: "https://www.wri.org/india",
    type: "Research",
  },
  {
    title: "Indian Institute of Tropical Meteorology",
    description: "Research on monsoons, climate variability, and climate change impacts in India.",
    url: "https://www.tropmet.res.in/",
    type: "Research",
  },
]

const academicReferences = [
  {
    title: "India's Long-Term Low Carbon Development Strategy",
    authors: "Government of India",
    year: "2022",
    description: "Official document outlining India's pathway to net-zero emissions by 2070.",
  },
  {
    title: "State of India's Environment Report",
    authors: "Centre for Science and Environment",
    year: "2024",
    description: "Annual comprehensive assessment of India's environmental challenges and progress.",
  },
  {
    title: "IPCC Sixth Assessment Report: Regional Impacts",
    authors: "IPCC Working Group II",
    year: "2022",
    description: "Scientific assessment of climate change impacts, vulnerabilities in South Asia.",
  },
  {
    title: "India Energy Outlook 2021",
    authors: "International Energy Agency",
    year: "2021",
    description: "Comprehensive analysis of India's energy sector and future scenarios.",
  },
  {
    title: "Climate Change and India: A 4x4 Assessment",
    authors: "MoEFCC",
    year: "2020",
    description: "Assessment of climate impacts on agriculture, water, health, and coastal areas.",
  },
  {
    title: "National Action Plan on Climate Change",
    authors: "Government of India",
    year: "2008 (Updated 2023)",
    description: "Framework for India's climate action across eight national missions.",
  },
]

function getTypeIcon(type: string) {
  switch (type) {
    case "Government":
      return Building
    case "International":
      return Globe
    case "Research":
      return BookOpen
    default:
      return FileText
  }
}

function getTypeColor(type: string) {
  switch (type) {
    case "Government":
      return "bg-blue-500/10 text-blue-500"
    case "International":
      return "bg-purple-500/10 text-purple-500"
    case "Research":
      return "bg-green-500/10 text-green-500"
    default:
      return "bg-primary/10 text-primary"
  }
}

export default function ReferencesPage() {
  return (
    <PageWrapper>
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Sources & Citations"
            title="References & Further Reading"
            description="Explore the authoritative sources, research institutions, and academic references that inform our understanding of climate change and sustainability in India."
          />
        </div>
      </section>

      {/* Government Sources */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Building className="h-6 w-6 text-blue-500" />
            Government Sources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {governmentSources.map((source, index) => {
              const Icon = getTypeIcon(source.type)
              return (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(source.type)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {source.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {source.description}
                    </p>
                  </GlassCard>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* International Sources */}
      <section className="py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Globe className="h-6 w-6 text-purple-500" />
            International Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {internationalSources.map((source, index) => {
              const Icon = getTypeIcon(source.type)
              return (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(source.type)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {source.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {source.description}
                    </p>
                  </GlassCard>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Institutions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-green-500" />
            Research Institutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchInstitutions.map((source, index) => {
              const Icon = getTypeIcon(source.type)
              return (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <GlassCard className="h-full group cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(source.type)}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {source.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {source.description}
                    </p>
                  </GlassCard>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Academic References */}
      <section className="py-12 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Database className="h-6 w-6 text-primary" />
            Key Reports & Publications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicReferences.map((ref, index) => (
              <GlassCard key={index} hover={false}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{ref.title}</h3>
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {ref.year}
                  </span>
                </div>
                <p className="text-sm text-primary mb-2">{ref.authors}</p>
                <p className="text-sm text-muted-foreground">
                  {ref.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlassCard className="text-center py-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">About This Project</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
              EcoVision India is an educational platform designed to raise awareness about 
              climate change and sustainability challenges facing India. All data and 
              information presented are sourced from authoritative government agencies, 
              international organizations, and peer-reviewed research.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed and Developed{" "}
              <span className="text-primary font-medium">~by Sathvik</span>
            </p>
          </GlassCard>
        </div>
      </section>
    </PageWrapper>
  )
}
