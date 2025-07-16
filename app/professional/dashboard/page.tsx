// PATH: app/professional/dashboard/page.tsx
import AuthWrapper from '@/app/components/AuthWrapper';
import ProfessionalDashboard from '@/app/components/ProfessionalDashboard';

export default function ProtectedDashboardPage() {
  return (
    <AuthWrapper>
      <ProfessionalDashboard />
    </AuthWrapper>
  );
}
