import ErrorMessage from "@/ui/ErrorMessage";
import { route } from "@/utils/routeHandler";
import { Link } from "react-router-dom";

type FooterProps = {
  errorMessage?: string;
};

const Forbidden = ({ errorMessage }: FooterProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 bg-[linear-gradient(135deg,hsl(260,15%,8%)_0%,hsl(280,50%,25%)_50%,hsl(290,60%,35%)_100%)]">
      <div className="text-center">
        {/* Cod error */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
          403
        </h1>
        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-white">
          Acceso Prohibido
        </h2>
        <p className="mt-2 text-gray-200">
          No tienes permisos para acceder a esta página.
        </p>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        {/* Action button */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to={route("HOME")}
            className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition"
          >
            Ir al inicio
          </Link>
          <Link
            to={route("LOGIN")}
            className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
