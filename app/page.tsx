// app/page.tsx
import Hero from './components/home/Hero'
import UserTypeCards from './components/home/UserTypeCards'
import HowItWorks from './components/home/HowItWorks'
import SurveyPackages from '@/components/home/SurveyPackages';
import SecurityFeatures from './components/home/SecurityFeatures'
import CTASection from './components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserTypeCards />
      <HowItWorks />
      <SurveyPackages />
      <SecurityFeatures />
      <CTASection />
    </>
  )
}
