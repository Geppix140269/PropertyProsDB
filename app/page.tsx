// PATH: app/page.tsx
import Hero from '@/components/home/Hero'
import UserTypeCards from '@/components/home/UserTypeCards'
import HowItWorks from '@/components/home/HowItWorks'
import SurveyPackages from '@/components/home/SurveyPackages'
import WhyUseApulink from '@/components/home/WhyUseApulink'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <SurveyPackages />
      <WhyUseApulink />
      <UserTypeCards />
      <CTASection />
    </>
  )
}
