import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "@/api/AuthAPI";

export const useAuth = () => {
    const queryClient = useQueryClient();

    const { data, isError, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false,
    });
    
    const logout = () => {
        localStorage.removeItem("AUTH_TOKEN");
        queryClient.invalidateQueries({ queryKey: ["user"] });
    };

    return { data, isError, isLoading, logout }
}