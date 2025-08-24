import { HeaderComponent } from "@/components/customer/HeaderComponent";
import { useAuth } from "@/hooks/useAuth";
import FullScreenLoader from "@/ui/FullScreenLoader";
import { Navigate, Outlet } from "react-router-dom";

export default function AppCustomerLayout() {
  const {data: user, isLoading,isError} = useAuth();

  if(isLoading) return <FullScreenLoader />;
  if(isError) return <Navigate to="/auth/login" replace />;

  if(user) return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}
