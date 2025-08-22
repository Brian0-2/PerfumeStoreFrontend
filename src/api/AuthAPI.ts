import { isAxiosError } from "axios";
import { userSchema, type UserLoginForm } from "../types";
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
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function login( formData: UserLoginForm) {
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