import { HeroSection } from "@/components/home/hero-section"
import { OverviewSection } from "@/components/home/overview-section"
import { StatsSection } from "@/components/home/stats-section"
import { TopicsSection } from "@/components/home/topics-section"
import { CTASection } from "@/components/home/cta-section"
import { PageWrapper } from "@/components/page-wrapper"

export default function HomePage() {
  return (
    <PageWrapper className="pt-0">
      <HeroSection />
      <OverviewSection />
      <StatsSection />
      <TopicsSection />
      <CTASection />
    </PageWrapper>
  )
}
