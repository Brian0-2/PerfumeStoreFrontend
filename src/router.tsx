import { BrowserRouter, Route, Routes } from "react-router";
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

export default function router() {
  return (
    <BrowserRouter>
      <Sonner />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" index element={<IndexView />} />
        </Route>

        <Route element={<AppCustomerLayout />}>
          <Route path="/customer" element={<IndexCustomerView />} />
        </Route>

        <Route element={<AppAdminLayout />}>
          <Route path="/admin" element={<IndexAdminView />} />
        </Route>

        <Route path="/auth/login" element={<LoginView />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordView />} />
        <Route path="/auth/new-password/:token" element={<NewPasswordView />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
