// PATH: lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Submit Survey Request (using existing inquiries table)
export async function submitSurveyRequest(data: any) {
  // First create or get buyer
  const { data: buyer, error: buyerError } = await supabase
    .from('buyers')
    .upsert({
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      phone: data.phone,
      nationality: 'IT',
      preferred_language: 'en'
    }, {
      onConflict: 'email'
    })
    .select()
    .single()

  if (buyerError) throw buyerError

  // Create survey inquiry
  const { error } = await supabase
    .from('inquiries')
    .insert([{
      buyer_id: buyer.id,
      is_survey_request: true, // This marks it as a survey
      property_types: [data.property_type],
      property_address: data.property_address,
      property_city: data.city,
      property_province: data.province,
      cadastral_details: data.cadastral_details,
      survey_types: data.survey_types,
      urgency: data.urgency,
      max_budget: data.max_budget,
      budget: data.max_budget, // For existing column
      locations: [data.city],
      timeline: data.urgency,
      additional_notes: data.additional_notes,
      status: 'new'
    }])

  if (error) throw error

  // Send notification
  await fetch('/api/notifications/survey-request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  return { success: true }
}

// Register Surveyor (using existing professionals table)
export async function registerSurveyor(data: any) {
  try {
    // Generate anonymous username
    const username = await generateUsername(data.province)
    
    // Insert into professionals table
    const { error } = await supabase
      .from('professionals')
      .insert([{
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        profession: 'geometra', // Default to geometra for surveyors
        is_surveyor: true, // Mark as surveyor
        anonymous_username: username,
        company_name: data.companyName || 'Independent Surveyor',
        vat_number: data.vatNumber || 'PENDING',
        professional_license: data.license,
        survey_types: data.surveyTypes,
        services: data.surveyTypes, // Map to existing column
        service_areas: data.provinces,
        languages: ['it', 'en'],
        bio: data.bio,
        agree_terms: true,
        agree_commission: true
      }])

    if (error) throw error

    // Send notification
    await fetch('/api/notifications/surveyor-registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    return { success: true }
  } catch (error) {
    console.error('Registration error:', error)
    throw error
  }
}

// Helper to generate username
async function generateUsername(province: string): Promise<string> {
  const { data } = await supabase
    .from('professionals')
    .select('anonymous_username')
    .like('anonymous_username', `Surveyor_${province}_%`)
    .order('anonymous_username', { ascending: false })
    .limit(1)

  let counter = 1
  if (data && data.length > 0) {
    const lastNumber = parseInt(data[0].anonymous_username.split('_').pop() || '0')
    counter = lastNumber + 1
  }

  return `Surveyor_${province}_${counter.toString().padStart(3, '0')}`
}

// Get survey requests
export async function getSurveyRequests() {
  const { data, error } = await supabase
    .from('inquiries')
    .select(`
      *,
      buyers (
        first_name,
        last_name,
        email,
        phone
      )
    `)
    .eq('is_survey_request', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Get surveyors
export async function getSurveyors() {
  const { data, error } = await supabase
    .from('professionals')
    .select('*')
    .eq('is_surveyor', true)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

// Submit quote
export async function submitQuote(inquiryId: string, professionalId: string, quoteData: any) {
  const { error } = await supabase
    .from('quotes')
    .insert([{
      inquiry_id: inquiryId,
      professional_id: professionalId,
      amount: quoteData.amount,
      delivery_days: quoteData.deliveryDays,
      description: quoteData.description,
      included_services: quoteData.includedServices
    }])

  if (error) throw error
  return { success: true }
}
