import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import AuthLayout from "@/layouts/AuthLayout";
import IndexView from "@/views/IndexView";
import LoginView from "@/views/auth/LoginView";
import Sonner from "@/ui/Sonner";
import NotFound from "@/views/NotFound";
import ForgotPasswordView from "@/views/auth/ForgotPasswordView";
import NewPasswordView from "@/views/auth/NewPasswordView";
import AppCustomerLayout from "@/layouts/AppCustomerLayout";
import IndexCustomerView from "@/views/customer/IndexCustomerView";
import IndexAdminView from "./views/admin/IndexAdminView";
import AppAdminLayout from "./layouts/AppAdminLayout";
import ProtectedRoute from "./layouts/ProtectedRoute";
import OrderCustomerView from "./views/customer/OrderCustomerView";
import PaymentCustomerView from "./views/customer/PaymentCustomerView";
import ProfileCustomerView from "./views/customer/ProfileCustomerView";

export default function router() {
  return (
    <BrowserRouter>
      <Sonner />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" index element={<IndexView />} />
        </Route>

        <Route path="/protected/*" element={<ProtectedRoute />}>
          <Route element={<AppAdminLayout />}>
            <Route path="admin" element={<IndexAdminView />} />
          </Route>
          <Route element={<AppCustomerLayout />}>
            <Route path="customer/dashboard" element={<IndexCustomerView />} />
            <Route path="customer/orders" element={<OrderCustomerView />} />
            <Route path="customer/payments" element={<PaymentCustomerView />} />
            <Route path="customer/profile" element={<ProfileCustomerView />} />
          </Route>
        </Route>


        <Route path="/auth/login" element={<LoginView />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
        <Route path="/auth/new-password/:token" element={<NewPasswordView />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
