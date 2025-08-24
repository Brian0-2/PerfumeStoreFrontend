import { useAuth } from '@/hooks/useAuth';
import FullScreenLoader from '@/ui/FullScreenLoader';
import Forbidden from '@/views/Forbidden';
import { Navigate, Outlet } from 'react-router-dom'

export default function AppAdminLayout() {
    const { data: user, isLoading, isError } = useAuth();

    if (isLoading) return <FullScreenLoader />;
    if (isError) return <Navigate to="/auth/login" replace />;

    if (user?.role !== 'admin') return <Forbidden />;

    if (user) return (
        <div>
            <h1>AppAdminLayout</h1>
            <Outlet />
        </div>
    )
}
