import { Logo } from '../elements/Logo'; 
import { UserMenu } from '../auth/UserMenu'; 
import { useAuth } from '@/context/AuthContext';

export const DashboardHeader = () => {
  const { user, logout } = useAuth();

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <Logo />
        {user && <UserMenu user={user} onLogout={logout} />}
      </div>
    </div>
  );
};