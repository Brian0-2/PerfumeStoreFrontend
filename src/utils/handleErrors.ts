import type { AxiosError } from "axios";

type ServerError = {
    success?: boolean;
    message?: string;
    errors?: { 
        field?: string; 
        message: string 
    }[];
};

export const handleAxiosError = (error: AxiosError<ServerError>) => {
    if (error.request && !error.response) {
        return new Error("No se pudo conectar con el servidor 🌐");
    }

    if (error.response) {
        const data = error.response.data;

        if (Array.isArray(data.errors) && data.errors.length > 0) {
            return new Error(data.errors.map((e) => e.message).join(" | "));
        }

        if (data.message) {
            return new Error(data.message);
        }
    }

    return new Error("Ocurrió un error inesperado ❌");
};
