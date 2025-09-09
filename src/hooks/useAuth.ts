import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "@/api/AuthAPI";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        retry: 1,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        enabled: !!localStorage.getItem("AUTH_TOKEN"),
    });

    const logout = () => {
        localStorage.removeItem("AUTH_TOKEN");
        queryClient.invalidateQueries({ queryKey: ["user"] });
        queryClient.clear();
        return navigate("/");
    };

    return { data, isError, isLoading, logout };
};
