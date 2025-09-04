import { isAxiosError } from "axios";
import { userSchema, type ForgotPasswordForm, type LoginForm, type NewPasswordForm, type ServerErrorResponse } from "../types";
import { handleAxiosError } from "@/utils/handleErrors";
import api from "@/lib/axios";

export async function getUser() {
  try {
      const {data} = await api.get('/auth/user');
      const response = userSchema.safeParse(data);
      
      if(response.success){
        return response.data;
      }
      
      return data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    }
  }
}

export async function login( formData: LoginForm) {
    try {
      const url = "/auth/login";
      const { data } = await api.post<string>(url, formData);
      localStorage.setItem('AUTH_TOKEN', data)
      return data;
    } catch (error) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    }
  }
}

export async function forgotPassword( formData: ForgotPasswordForm) {
    try {
      const url = "/auth/forgot-password";
      const { data } = await api.post(url, formData);
      return data;
    } catch (error) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    }
  }
}

export async function newPassword( {formData, token}: { formData: NewPasswordForm, token: string }) {
    try {
      const url = `/auth/create-user-password/${token}`;
      const { data } = await api.post<ServerErrorResponse>(url, formData);
      return data;
    } catch (error) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    }
  }
}

export async function tokenConfirm(  token: string ) {
    try {
      const url = `/auth/valid-token-user/${token}`;
      const { data } = await api.get(url);
      return data;
    } catch (error) {
    if (isAxiosError(error)) {
      throw handleAxiosError(error);
    }
  }
}