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
export async function submitBuyerInquiry(data: any) {
  const supabase = createClient()
  
  // Map the form data to database structure
  const inquiryData = {
    first_name: data.first_name || data.firstName,
    last_name: data.last_name || data.lastName,
    email: data.email,
    phone: data.phone,
    nationality: data.nationality,
    preferred_language: data.preferred_language || data.preferredLanguage,
    property_types: data.property_types || data.propertyType || [],
    budget_range: data.budget_range || data.budget,
    preferred_locations: data.preferred_locations || data.locations || [],
    timeline: data.timeline,
    purchase_purpose: data.purchase_purpose || data.purpose,
    has_visited_puglia: data.has_visited_puglia || data.hasVisitedPuglia || false,
    needs_financing: data.needs_financing || data.needsFinancing || false,
    additional_notes: data.additional_notes || data.additionalNotes || '',
    is_survey_request: data.is_survey_request || false,
    property_address: data.property_address,
    property_city: data.property_city,
    property_province: data.property_province,
    cadastral_details: data.cadastral_details,
    survey_types: data.survey_types,
    urgency: data.urgency,
    max_budget: data.max_budget,
    created_at: new Date().toISOString()
  }
  
  const { data: inquiry, error } = await supabase
    .from('inquiries')
    .insert([inquiryData])
    .select()
    .single()

  if (error) {
    console.error('Error submitting inquiry:', error)
    return { success: false, error }
  }

  return { success: true, data: inquiry }
}

// Submit professional registration (works for both general professionals and surveyors)
export async function submitProfessionalRegistration(data: any) {
  const supabase = createClient()
  
  // Map the form data to database structure
  const professionalData = {
    first_name: data.first_name || data.firstName,
    last_name: data.last_name || data.lastName,
    email: data.email,
    phone: data.phone,
    profession: data.profession || data.profession_type,
    company_name: data.company_name || data.companyName,
    vat_number: data.vat_number || data.vatNumber,
    professional_license: data.professional_license || data.professionalLicense,
    years_experience: data.years_experience || data.yearsExperience,
    website: data.website,
    services: data.services || data.services_offered || [],
    languages: data.languages || [],
    service_areas: data.service_areas || data.serviceAreas || [],
    max_distance: data.max_distance || data.maxDistance || '50',
    clients_served: data.clients_served || data.clientsServed,
    specializations: data.specializations || [],
    bio: data.bio,
    is_surveyor: data.is_surveyor || false,
    survey_types: data.survey_types || [],
    anonymous_username: data.anonymous_username,
    created_at: new Date().toISOString()
  }
  
  // If registering as a surveyor, generate anonymous username
  if (professionalData.is_surveyor && professionalData.service_areas && professionalData.service_areas.length > 0) {
    professionalData.anonymous_username = generateAnonymousUsername(professionalData.service_areas[0])
  }
  
  const { data: professional, error } = await supabase
    .from('professionals')
    .insert([professionalData])
    .select()
    .single()

  if (error) {
    console.error('Error registering professional:', error)
    return { success: false, error }
  }

  return { success: true, data: professional }
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
