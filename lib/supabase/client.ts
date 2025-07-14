// PATH: lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
})

// Database Types (based on your schema)
export interface Professional {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  profession: string
  company_name: string
  vat_number: string
  professional_license?: string
  years_experience?: string
  website?: string
  services: string[]
  languages: string[]
  service_areas: string[]
  max_distance: string
  clients_served?: string
  specializations: string[]
  bio: string
  verified?: boolean
  created_at?: string
}

export interface BuyerInquiry {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  nationality?: string
  preferred_language: string
  property_types: string[]
  budget_range: string
  preferred_locations: string[]
  timeline: string
  purchase_purpose: string
  has_visited_puglia: boolean
  needs_financing: boolean
  additional_notes?: string
  created_at?: string
}

// Helper functions for form submissions
export async function submitProfessionalRegistration(data: Professional) {
  try {
    const { data: result, error } = await supabase
      .from('professionals')
      .insert([{
        ...data,
        verified: false,
        created_at: new Date().toISOString()
      }])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting professional registration:', error)
    return { success: false, error }
  }
}

export async function submitBuyerInquiry(data: BuyerInquiry) {
  try {
    const { data: result, error } = await supabase
      .from('inquiries')
      .insert([{
        ...data,
        created_at: new Date().toISOString()
      }])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting buyer inquiry:', error)
    return { success: false, error }
  }
}

// Auth helpers
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}
