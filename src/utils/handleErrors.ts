import type { AxiosError } from "axios";
import type { ServerErrorResponse } from "../types";

export const handleAxiosError = (error: AxiosError<ServerErrorResponse>): Error => {
  if (error.request && !error.response) {
    return new Error("No se pudo conectar con el servidor 🌐");
  }

  if (error.response) {
    const data = error.response.data;

    if (Array.isArray(data.errors) && data.errors.length > 0) {
      const messages = data.errors.map((e) => e.message).join(" | ");
      return new Error(messages);
    }

    if (data.message) {
      return new Error(data.message);
    }
  }

  return new Error("Ocurrió un error inesperado ❌");
};
