// app/professional/dashboard/page.tsx
import AuthWrapper from '@/app/components/AuthWrapper';
import ProfessionalDashboard from './ProfessionalDashboard';

export default function ProtectedDashboardPage() {
  return (
    <AuthWrapper>
      <ProfessionalDashboard />
    </AuthWrapper>
  );
}
