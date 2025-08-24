import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import FullScreenLoader from "@/ui/FullScreenLoader";

const roleRedirects = {
  admin: "/protected/admin",
  client: "/protected/customer",
};

export default function ProtectedRoute() {
  const { data: user, isLoading, isError } = useAuth();
  const location = useLocation();

  if (isLoading) return <FullScreenLoader />;
  if (isError || !user) return <Navigate to="/auth/login" replace state={{ from: location }} />;

  // Redirect to user dashboard
  const userDashboard = roleRedirects[user.role as keyof typeof roleRedirects] || "/";

  // Check if the user is trying to access their dashboard
  if (!location.pathname.startsWith(userDashboard)) {
    return <Navigate to={userDashboard} replace />;
  }

  return <Outlet />;
}
