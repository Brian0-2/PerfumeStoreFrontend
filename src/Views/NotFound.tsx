import { route } from "@/utils/routeHandler";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_80%)]">
      <div className="text-center">
        {/* Cod error */}
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-500">
          404
        </h1>
        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-white">
          Página no encontrada
        </h2>
        <p className="mt-2 text-gray-200">
          La página que buscas no existe o fue movida.
        </p>
        {/* Action button */}
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            to={route("HOME")}
            className="px-6 py-2 bg-purple-700 text-white rounded-lg shadow-md hover:bg-purple-800 transition"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
