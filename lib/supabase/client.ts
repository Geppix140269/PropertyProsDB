// lib/supabase/client.ts
import { createBrowserClient } from '@supabase/ssr'
import { SupabaseClient } from '@supabase/supabase-js'

// Create a singleton instance
let supabase: SupabaseClient | null = null

export function createClient() {
  if (supabase) return supabase
  
  supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  
  return supabase
}

// Helper function to generate anonymous username for surveyors
function generateAnonymousUsername(city: string): string {
  const cityCode = city.substring(0, 2).toUpperCase()
  const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `Surveyor_${cityCode}_${randomNum}`
}

// Submit buyer inquiry (works for both general inquiries and survey requests)
export async function submitBuyerInquiry(data: {
  // Contact Information
  first_name: string
  last_name: string
  email: string
  phone: string
  
  // Property/Survey Information
  property_type?: string
  budget?: string
  location?: string
  timeline?: string
  has_property?: string
  additional_details?: string
  
  // Survey-specific fields
  is_survey_request?: boolean
  property_address?: string
  property_city?: string
  property_province?: string
  cadastral_details?: string
  survey_types?: string[]
  urgency?: string
  max_budget?: string
}) {
  const supabase = createClient()
  
  const { data: inquiry, error } = await supabase
    .from('inquiries')
    .insert([{
      ...data,
      is_survey_request: data.is_survey_request || false,
      created_at: new Date().toISOString()
    }])
    .select()
    .single()

  if (error) {
    console.error('Error submitting inquiry:', error)
    throw error
  }

  return inquiry
}

// Submit professional registration (works for both general professionals and surveyors)
export async function submitProfessionalRegistration(data: {
  // Basic Information
  first_name: string
  last_name: string
  email: string
  phone: string
  
  // Professional Information
  profession_type: string
  years_experience: string
  company_name?: string
  services_offered: string[]
  service_areas: string[]
  
  // Additional Information
  certifications?: string
  languages?: string[]
  portfolio_url?: string
  linkedin_url?: string
  bio?: string
  
  // Surveyor-specific fields
  is_surveyor?: boolean
  survey_types?: string[]
  anonymous_username?: string
}) {
  const supabase = createClient()
  
  // If registering as a surveyor, generate anonymous username
  if (data.is_surveyor && data.service_areas && data.service_areas.length > 0) {
    data.anonymous_username = generateAnonymousUsername(data.service_areas[0])
  }
  
  const { data: professional, error } = await supabase
    .from('professionals')
    .insert([{
      ...data,
      is_surveyor: data.is_surveyor || false,
      created_at: new Date().toISOString()
    }])
    .select()
    .single()

  if (error) {
    console.error('Error registering professional:', error)
    throw error
  }

  return professional
}

// Get inquiries for a professional (including survey requests)
export async function getProfessionalInquiries(professionalId: string, isSurveyor: boolean = false) {
  const supabase = createClient()
  
  let query = supabase
    .from('inquiries')
    .select('*')
    .eq('is_survey_request', isSurveyor)
    .order('created_at', { ascending: false })
  
  const { data, error } = await query

  if (error) {
    console.error('Error fetching inquiries:', error)
    throw error
  }

  return data
}

// Submit a quote for a survey request
export async function submitQuote(data: {
  inquiry_id: string
  professional_id: string
  price: number
  estimated_delivery_days: number
  message?: string
  includes_site_visit: boolean
  includes_cad_drawings: boolean
}) {
  const supabase = createClient()
  
  const { data: quote, error } = await supabase
    .from('quotes')
    .insert([{
      ...data,
      created_at: new Date().toISOString()
    }])
    .select()
    .single()

  if (error) {
    console.error('Error submitting quote:', error)
    throw error
  }

  return quote
}

// Get quotes for a specific inquiry
export async function getInquiryQuotes(inquiryId: string) {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('quotes')
    .select(`
      *,
      professionals (
        anonymous_username,
        years_experience,
        certifications,
        service_areas
      )
    `)
    .eq('inquiry_id', inquiryId)
    .order('price', { ascending: true })

  if (error) {
    console.error('Error fetching quotes:', error)
    throw error
  }

  return data
}

// Check if message contains contact information
export function checkForContactInfo(message: string): boolean {
  // Check for email patterns
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/
  
  // Check for phone patterns (various formats)
  const phonePatterns = [
    /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/, // 123-456-7890 or 123.456.7890
    /\b\d{10}\b/, // 1234567890
    /\b\+\d{1,3}\s?\d{3,14}\b/, // +39 123 4567890
    /\b\(\d{3}\)\s?\d{3}[-.]?\d{4}\b/ // (123) 456-7890
  ]
  
  // Check for common contact keywords
  const contactKeywords = [
    'whatsapp', 'telegram', 'skype', 'email me', 'call me', 
    'contact me', 'reach me', '@gmail', '@yahoo', '@hotmail'
  ]
  
  const lowerMessage = message.toLowerCase()
  
  // Check for email
  if (emailPattern.test(message)) return true
  
  // Check for phone numbers
  for (const pattern of phonePatterns) {
    if (pattern.test(message)) return true
  }
  
  // Check for keywords
  for (const keyword of contactKeywords) {
    if (lowerMessage.includes(keyword)) return true
  }
  
  return false
}

// Flag a message if it contains contact information
export async function flagMessageIfNeeded(messageId: string, content: string) {
  if (checkForContactInfo(content)) {
    const supabase = createClient()
    
    const { error } = await supabase
      .from('messages')
      .update({ flagged: true, flag_reason: 'Contains contact information' })
      .eq('id', messageId)
    
    if (error) {
      console.error('Error flagging message:', error)
    }
    
    return true
  }
  
  return false
}

// Survey-specific functions (for compatibility with existing code)
export async function submitSurveyRequest(data: any) {
  return submitBuyerInquiry({
    ...data,
    is_survey_request: true,
    first_name: data.firstName,
    last_name: data.lastName,
    property_city: data.city,
    property_province: data.province,
    survey_types: data.surveyType,
    max_budget: data.maxBudget
  })
}

export async function registerSurveyor(data: any) {
  return submitProfessionalRegistration({
    ...data,
    is_surveyor: true,
    first_name: data.firstName,
    last_name: data.lastName,
    profession_type: 'geometra',
    years_experience: data.yearsExperience || '5+',
    company_name: data.companyName,
    services_offered: data.surveyTypes || [],
    service_areas: data.provinces || [],
    survey_types: data.surveyTypes
  })
}

// Get survey requests
export async function getSurveyRequests() {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .eq('is_survey_request', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Get surveyors
export async function getSurveyors() {
  const supabase = createClient()
  
  const { data, error } = await supabase
    .from('professionals')
    .select('*')
    .eq('is_surveyor', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}
