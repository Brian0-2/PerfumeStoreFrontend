import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { userSchema } from "../types";


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