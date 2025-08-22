import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "@/layouts/AuthLayout";
import IndexView from "@/views/IndexView";
import LoginView from "@/views/auth/LoginView";
import Sonner from "@/ui/Sonner";
import NotFound from "@/views/NotFound";

export default function router() {
  return (
    <BrowserRouter>
      <Sonner />
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" index element={<IndexView />} />
        </Route>
        <Route path="/auth/login" element={<LoginView />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
