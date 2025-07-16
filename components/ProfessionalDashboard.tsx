import React, { useState } from 'react';

interface Inquiry {
  id: string;
  property_types: string[];
  budget_range: string;
  preferred_locations: string[];
  timeline: string;
  purpose: string;
  has_visited_puglia: boolean;
  needs_financing: boolean;
  additional_notes: string;
  status: string;
  created_at: string;
}

interface Quote {
  id: string;
  inquiry_id: string;
  price: number;
  estimated_delivery_days: number;
  message: string;
  includes_site_visit: boolean;
  includes_cad_drawings: boolean;
  status: string;
}

export default function ProfessionalDashboard() {
  const [language, setLanguage] = useState<'it' | 'en'>('it');
  const [activeTab, setActiveTab] = useState('inquiries');
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    price: '',
    estimated_delivery_days: '',
    message: '',
    includes_site_visit: false,
    includes_cad_drawings: false
  });

  // Mock data - replace with real API calls
  const mockInquiries: Inquiry[] = [
    {
      id: '1',
      property_types: ['trullo'],
      budget_range: '250k-500k',
      preferred_locations: ['Ostuni'],
      timeline: '3months',
      purpose: 'vacation',
      has_visited_puglia: false,
      needs_financing: true,
      additional_notes: 'Looking for authentic trullo with modern amenities. Prefer countryside location but close to town.',
      status: 'new',
      created_at: '2024-07-16T10:30:00Z'
    },
    {
      id: '2',
      property_types: ['masseria', 'villa'],
      budget_range: '500k-1m',
      preferred_locations: ['Alberobello', 'Locorotondo'],
      timeline: '6months',
      purpose: 'residence',
      has_visited_puglia: true,
      needs_financing: false,
      additional_notes: 'Family of 4 relocating to Italy. Need minimum 4 bedrooms and pool.',
      status: 'new',
      created_at: '2024-07-15T14:20:00Z'
    }
  ];

  const mockQuotes: Quote[] = [
    {
      id: '1',
      inquiry_id: '2',
      price: 1500,
      estimated_delivery_days: 7,
      message: 'Comprehensive property search and due diligence service',
      includes_site_visit: true,
      includes_cad_drawings: false,
      status: 'pending'
    }
  ];

  const submitQuote = () => {
    if (!selectedInquiry || !quoteForm.price || !quoteForm.estimated_delivery_days) {
      alert(language === 'it' 
        ? 'Compila tutti i campi obbligatori' 
        : 'Please fill all required fields'
      );
      return;
    }

    // Mock submission
    console.log('Submitting quote:', {
      inquiry_id: selectedInquiry.id,
      ...quoteForm,
      price: parseFloat(quoteForm.price),
      estimated_delivery_days: parseInt(quoteForm.estimated_delivery_days)
    });

    alert(language === 'it' 
      ? 'Preventivo inviato con successo!' 
      : 'Quote submitted successfully!'
    );

    // Reset form
    setQuoteForm({
      price: '',
      estimated_delivery_days: '',
      message: '',
      includes_site_visit: false,
      includes_cad_drawings: false
    });
    setShowQuoteForm(false);
    setSelectedInquiry(null);
  };

  const formatBudget = (budget: string) => {
    const budgetMap: { [key: string]: { it: string; en: string } } = {
      '250k-500k': { it: '€250.000 - €500.000', en: '€250,000 - €500,000' },
      '500k-1m': { it: '€500.000 - €1.000.000', en: '€500,000 - €1,000,000' },
    };
    return budgetMap[budget]?.[language] || budget;
  };

  const formatPropertyType = (type: string) => {
    const typeMap: { [key: string]: { it: string; en: string } } = {
      'trullo': { it: 'Trullo', en: 'Trullo' },
      'masseria': { it: 'Masseria', en: 'Masseria' },
      'villa': { it: 'Villa', en: 'Villa' },
      'apartment': { it: 'Appartamento', en: 'Apartment' },
    };
    return typeMap[type]?.[language] || type;
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="font-playfair text-2xl font-bold text-stone-800">
                {language === 'it' ? 'Dashboard Professionista' : 'Professional Dashboard'}
              </h1>
              
              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`pb-2 font-medium transition-colors ${
                    activeTab === 'inquiries' 
                      ? 'text-sea border-b-2 border-sea' 
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  {language === 'it' ? 'Richieste' : 'Inquiries'}
                  <span className="ml-2 bg-sea text-white text-xs px-2 py-0.5 rounded-full">
                    {mockInquiries.length}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('quotes')}
                  className={`pb-2 font-medium transition-colors ${
                    activeTab === 'quotes' 
                      ? 'text-sea border-b-2 border-sea' 
                      : 'text-stone-600 hover:text-stone-800'
                  }`}
                >
                  {language === 'it' ? 'I Miei Preventivi' : 'My Quotes'}
                  <span className="ml-2 bg-terracotta text-white text-xs px-2 py-0.5 rounded-full">
                    {mockQuotes.length}
                  </span>
                </button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setLanguage(language === 'it' ? 'en' : 'it')}
                className="flex items-center space-x-2 text-stone-600 hover:text-sea font-medium"
              >
                <span className="text-2xl">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
                <span>{language === 'it' ? 'EN' : 'IT'}</span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-stone-800">Marco Rossi</div>
                  <div className="text-xs text-stone-600">
                    {language === 'it' ? 'Geometra Verificato' : 'Verified Surveyor'}
                  </div>
                </div>
                <div className="w-10 h-10 bg-sea rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-sea mb-1">{mockInquiries.length}</div>
            <div className="text-sm text-stone-600">
              {language === 'it' ? 'Nuove Richieste' : 'New Inquiries'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-terracotta mb-1">{mockQuotes.length}</div>
            <div className="text-sm text-stone-600">
              {language === 'it' ? 'Preventivi Inviati' : 'Quotes Sent'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-olive mb-1">0</div>
            <div className="text-sm text-stone-600">
              {language === 'it' ? 'Clienti Attivi' : 'Active Clients'}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl font-bold text-stone-800 mb-1">€0</div>
            <div className="text-sm text-stone-600">
              {language === 'it' ? 'Guadagni Mese' : 'Monthly Earnings'}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activeTab === 'inquiries' && (
          <div>
            <div className="bg-white rounded-xl shadow-sm mb-6">
              <div className="px-6 py-4 border-b border-stone-200">
                <h2 className="font-playfair text-2xl font-semibold text-stone-800">
                  {language === 'it' ? 'Richieste di Clienti' : 'Client Inquiries'}
                </h2>
                <p className="text-stone-600 mt-1">
                  {language === 'it' 
                    ? 'Richieste di clienti nella tua zona di servizio' 
                    : 'Client requests in your service area'
                  }
                </p>
              </div>

              <div className="divide-y divide-stone-200">
                {mockInquiries.map((inquiry) => (
                  <div key={inquiry.id} className="p-6 hover:bg-stone-50 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sea/10 text-sea">
                            {inquiry.property_types.map(type => formatPropertyType(type)).join(', ')}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-terracotta/10 text-terracotta">
                            {formatBudget(inquiry.budget_range)}
                          </span>
                          <span className="text-sm text-stone-500">
                            📍 {inquiry.preferred_locations.join(', ')}
                          </span>
                        </div>
                        
                        <p className="text-stone-700 mb-3">
                          <strong>
                            {language === 'it' ? 'Note:' : 'Notes:'}{' '}
                          </strong>
                          {inquiry.additional_notes || (language === 'it' ? 'Nessuna nota aggiuntiva' : 'No additional notes')}
                        </p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-stone-500">
                              {language === 'it' ? 'Tempistiche:' : 'Timeline:'}
                            </span>
                            <div className="font-medium">
                              {inquiry.timeline === '3months' ? (language === 'it' ? '3 mesi' : '3 months') : inquiry.timeline}
                            </div>
                          </div>
                          <div>
                            <span className="text-stone-500">
                              {language === 'it' ? 'Scopo:' : 'Purpose:'}
                            </span>
                            <div className="font-medium">
                              {inquiry.purpose === 'vacation' ? (language === 'it' ? 'Casa vacanze' : 'Vacation home') : inquiry.purpose}
                            </div>
                          </div>
                          <div>
                            <span className="text-stone-500">
                              {language === 'it' ? 'Ha visitato:' : 'Visited Puglia:'}
                            </span>
                            <div className="font-medium">
                              {inquiry.has_visited_puglia 
                                ? (language === 'it' ? 'Sì' : 'Yes') 
                                : (language === 'it' ? 'No' : 'No')
                              }
                            </div>
                          </div>
                          <div>
                            <span className="text-stone-500">
                              {language === 'it' ? 'Finanziamento:' : 'Financing:'}
                            </span>
                            <div className="font-medium">
                              {inquiry.needs_financing 
                                ? (language === 'it' ? 'Necessario' : 'Needed') 
                                : (language === 'it' ? 'Non necessario' : 'Not needed')
                              }
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="ml-6">
                        <button
                          onClick={() => {
                            setSelectedInquiry(inquiry);
                            setShowQuoteForm(true);
                          }}
                          className="bg-sea text-white px-6 py-2 rounded-lg font-medium hover:bg-sea-dark transition-colors"
                        >
                          {language === 'it' ? 'Invia Preventivo' : 'Send Quote'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quotes' && (
          <div className="bg-white rounded-xl shadow-sm">
            <div className="px-6 py-4 border-b border-stone-200">
              <h2 className="font-playfair text-2xl font-semibold text-stone-800">
                {language === 'it' ? 'I Miei Preventivi' : 'My Quotes'}
              </h2>
            </div>
            
            {mockQuotes.length === 0 ? (
              <div className="p-8 text-center text-stone-500">
                {language === 'it' ? 'Nessun preventivo inviato ancora.' : 'No quotes sent yet.'}
              </div>
            ) : (
              <div className="divide-y divide-stone-200">
                {mockQuotes.map((quote) => (
                  <div key={quote.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg text-stone-800">€{quote.price}</div>
                        <div className="text-sm text-stone-600">
                          {language === 'it' ? 'Consegna in' : 'Delivery in'} {quote.estimated_delivery_days} {language === 'it' ? 'giorni' : 'days'}
                        </div>
                        <div className="text-sm text-stone-700 mt-2">{quote.message}</div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        quote.status === 'pending' 
                          ? 'bg-orange-100 text-orange-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {quote.status === 'pending' 
                          ? (language === 'it' ? 'In Attesa' : 'Pending')
                          : (language === 'it' ? 'Accettato' : 'Accepted')
                        }
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quote Form Modal */}
      {showQuoteForm && selectedInquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-stone-200">
              <h3 className="font-playfair text-2xl font-semibold text-stone-800">
                {language === 'it' ? 'Invia Preventivo' : 'Send Quote'}
              </h3>
              <p className="text-stone-600 mt-1">
                {language === 'it' 
                  ? `Per richiesta: ${selectedInquiry.property_types.map(type => formatPropertyType(type)).join(', ')} in ${selectedInquiry.preferred_locations.join(', ')}`
                  : `For inquiry: ${selectedInquiry.property_types.map(type => formatPropertyType(type)).join(', ')} in ${selectedInquiry.preferred_locations.join(', ')}`
                }
              </p>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {language === 'it' ? 'Prezzo (EUR)' : 'Price (EUR)'} *
                  </label>
                  <input
                    type="number"
                    value={quoteForm.price}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, price: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-sea focus:ring-2 focus:ring-sea/20"
                    placeholder="1500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    {language === 'it' ? 'Giorni per Consegna' : 'Delivery Days'} *
                  </label>
                  <input
                    type="number"
                    value={quoteForm.estimated_delivery_days}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, estimated_delivery_days: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-sea focus:ring-2 focus:ring-sea/20"
                    placeholder="7"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  {language === 'it' ? 'Messaggio per il Cliente' : 'Message to Client'}
                </label>
                <textarea
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm(prev => ({ ...prev, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-sea focus:ring-2 focus:ring-sea/20"
                  placeholder={language === 'it' 
                    ? 'Descrivi i servizi inclusi, la tua esperienza, perché sei la scelta migliore...'
                    : 'Describe included services, your experience, why you\'re the best choice...'
                  }
                />
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={quoteForm.includes_site_visit}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, includes_site_visit: e.target.checked }))}
                    className="w-5 h-5 text-sea border-stone-300 rounded focus:ring-sea"
                  />
                  <span className="text-stone-700">
                    {language === 'it' ? 'Include sopralluogo in loco' : 'Includes site visit'}
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={quoteForm.includes_cad_drawings}
                    onChange={(e) => setQuoteForm(prev => ({ ...prev, includes_cad_drawings: e.target.checked }))}
                    className="w-5 h-5 text-sea border-stone-300 rounded focus:ring-sea"
                  />
                  <span className="text-stone-700">
                    {language === 'it' ? 'Include disegni CAD/planimetrie' : 'Includes CAD drawings/floor plans'}
                  </span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-between p-6 border-t border-stone-200">
              <button
                onClick={() => {
                  setShowQuoteForm(false);
                  setSelectedInquiry(null);
                }}
                className="px-6 py-3 text-stone-600 hover:text-stone-800 font-medium"
              >
                {language === 'it' ? 'Annulla' : 'Cancel'}
              </button>
              
              <button
                onClick={submitQuote}
                className="bg-sea text-white px-8 py-3 rounded-lg font-semibold hover:bg-sea-dark transition-colors"
              >
                {language === 'it' ? 'Invia Preventivo' : 'Send Quote'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
