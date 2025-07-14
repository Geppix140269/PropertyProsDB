// app/page.tsx
import Hero from './components/home/Hero'
import UserTypeCards from './components/home/UserTypeCards'
import HowItWorks from './components/home/HowItWorks'
import SecurityFeatures from './components/home/SecurityFeatures'
import CTASection from './components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <UserTypeCards />
      <HowItWorks />
      <SecurityFeatures />
      <CTASection />
    </>
  )
}
