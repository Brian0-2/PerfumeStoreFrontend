import { HeaderComponent } from "@/components/customer/HeaderComponent";
import { Outlet } from "react-router-dom";

export default function AppCustomerLayout() {
 return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}
