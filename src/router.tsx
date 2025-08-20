import { BrowserRouter, Route, Routes } from "react-router";
import AuthLayout from "@/Layouts/AuthLayout";
import IndexView from "./Views/IndexView";
import LoginView from "./Views/Auth/LoginView";

export default function router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path="/" element={<IndexView />} />
                <Route path="/auth/login" element={<LoginView />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
