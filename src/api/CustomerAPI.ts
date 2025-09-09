import { isAxiosError } from "axios";
import { orderWithItemsSchema, paginatedOrdersSchema } from "../types";
import { handleAxiosError } from "@/utils/handleErrors";
import api from "@/lib/axios";

export async function getCustomerOrders(params: Record<string, string | number | undefined>) {
    try {
        const { data } = await api.get("/customer/orders", { params });
        const response = paginatedOrdersSchema.safeParse(data);

        if (response.success) {
            return response.data;
        }
    } catch (error) {
        if (isAxiosError(error)) {
            throw handleAxiosError(error);
        }
    }
}


export async function getCustomerOrder({ id }: { id: string }) {
    try {
        const { data } = await api.get(`/customer/orders/${id}`);
        const response = orderWithItemsSchema.safeParse(data);

        if (response.success) {
            return response.data;
        }

    } catch (error) {
        if (isAxiosError(error)) {
            throw handleAxiosError(error);
        }
    }
}

