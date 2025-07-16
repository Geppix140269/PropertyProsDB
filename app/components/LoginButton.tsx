// PATH: app/components/LoginButton.tsx
'use client'
import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter()

  const handleLogin = () => {
    // Route to the professional dashboard login
    router.push('/professional/dashboard')
  }

  return (
    <button 
      onClick={handleLogin}
      className="bg-terracotta text-white px-6 py-2 rounded-lg font-medium hover:bg-terracotta-dark transition-all duration-200"
    >
      Login
    </button>
  )
}
