import { HeaderBottomComponent } from "@/components/customer/HeaderBottomComponent";
import HeaderTopComponent from "@/components/customer/HeaderTopComponent";
import { Outlet } from "react-router-dom";

export default function AppCustomerLayout() {
  return (
    <>
      <HeaderTopComponent />
        <Outlet />
      <HeaderBottomComponent />
    </>
  )
}
