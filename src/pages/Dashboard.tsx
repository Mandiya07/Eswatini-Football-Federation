import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { ClubDashboard } from './ClubDashboard';
import { AdminDashboard } from './AdminDashboard';
import { UserDashboard } from './UserDashboard';
import { Navbar } from '@/components/Navbar';

export default function Dashboard() {
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (role === 'super_admin' || role === 'admin') {
    return <AdminDashboard />;
  }

  if (role === 'club_admin' || role === 'club') {
    return <ClubDashboard />;
  }

  return <UserDashboard />;
}
