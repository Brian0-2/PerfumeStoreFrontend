import { FaRegUser } from "react-icons/fa";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/ui/Button";
import { useNavigate } from "react-router-dom";
import { route } from "@/utils/routeHandler";

export default function HeaderTopComponent() {
    const { data: user } = useAuth();

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(route("CUSTOMER_PROFILE"));
    }

    return (
        <div className="bg-[linear-gradient(135deg,hsl(260,15%,8%)_0%,hsl(280,50%,25%)_50%,hsl(290,60%,35%)_100%)] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            ¡Hola, {user?.name}! 👋
                        </h1>
                        <p className="">
                            Bienvenid@ a tu panel de control de pedidos.
                        </p>
                    </div>
                    <Button
                        className="bg-transparent border border-yellow-400  text-yellow-400 hover:text-yellow-500 transition duration-200 hover:scale-125 p-2 rounded-full"
                        size="sm"
                        onClick={() => handleClick()}
                        aria-label="User Profile"
                    >
                        <FaRegUser className="w-6 h-6 " />
                    </Button>
                </div>
            </div>
        </div>
    )
}
