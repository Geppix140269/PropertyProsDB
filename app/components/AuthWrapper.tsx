import React, { useState, useEffect } from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
}

interface Professional {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  profession: string;
  is_verified: boolean;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [professional, setProfessional] = useState<Professional | null>(null);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const savedAuth = localStorage.getItem('professional_auth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        setProfessional(authData);
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('professional_auth');
      }
    }
    setLoading(false);
  }, []);

  const handleLogin = async () => {
    setError('');
    setLoading(true);

    try {
      // Mock authentication - replace with real Supabase auth
      const mockProfessionals = [
        {
          id: '1',
          first_name: 'Marco',
          last_name: 'Rossi',
          email: 'marco.rossi@geometra.it',
          profession: 'geometra',
          is_verified: true,
          password: 'demo123' // In real app, this would be hashed
        }
      ];

      const foundProfessional = mockProfessionals.find(
        p => p.email === loginForm.email && p.password === loginForm.password
      );

      if (!foundProfessional) {
        throw new Error('Invalid credentials');
      }

      if (!foundProfessional.is_verified) {
        throw new Error('Account not verified yet. Please wait for admin approval.');
      }

      // Remove password from stored data
      const { password, ...professionalData } = foundProfessional;
      
      // Store in localStorage (in production, use secure tokens)
      localStorage.setItem('professional_auth', JSON.stringify(professionalData));
      
      setProfessional(professionalData);
      setIsAuthenticated(true);

    } catch (error) {
      setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('professional_auth');
    setProfessional(null);
    setIsAuthenticated(false);
    setLoginForm({ email: '', password: '' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-sea mx-auto mb-4"></div>
          <p className="text-stone-600">Caricamento...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center">
        <div className="max-w-md w-full">
          {/* Login Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="font-playfair text-3xl font-bold text-stone-800 mb-2">
                Accesso Professionisti
              </h1>
              <p className="text-stone-600">
                Accedi al tuo dashboard per gestire le richieste
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-sea focus:ring-2 focus:ring-sea/20"
                  placeholder="marco.rossi@geometra.it"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-sea focus:ring-2 focus:ring-sea/20"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700 text-sm">{error}</p>
                </div>
              )}

              <button
                type="button"
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-sea text-white py-3 rounded-lg font-semibold hover:bg-sea-dark transition-colors disabled:opacity-50"
              >
                {loading ? 'Accesso in corso...' : 'Accedi'}
              </button>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-stone-50 rounded-lg">
              <h3 className="font-semibold text-stone-800 mb-2">Demo Credentials:</h3>
              <p className="text-sm text-stone-600">
                <strong>Email:</strong> marco.rossi@geometra.it<br/>
                <strong>Password:</strong> demo123
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-stone-600">
                Non hai un account?{' '}
                <a href="/professional/register" className="text-sea hover:text-sea-dark font-medium">
                  Registrati qui
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, render the dashboard with logout option
  return (
    <div>
      {/* Add logout button to header */}
      <div className="bg-white border-b border-stone-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-stone-600">
              Benvenuto, <strong>{professional?.first_name} {professional?.last_name}</strong>
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
              Verificato
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-stone-600 hover:text-stone-800 font-medium"
          >
            Esci
          </button>
        </div>
      </div>
      
      {children}
    </div>
  );
}
