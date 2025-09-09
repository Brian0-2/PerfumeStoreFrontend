import Button from "@/ui/Button";
import { CheckCircle } from "lucide-react";

type PasswordUpdatedSuccessfullyProps = {
  onClick: () => void;
  feedback: string;
}

export default function PasswordUpdatedSuccessfully({ onClick, feedback }: PasswordUpdatedSuccessfullyProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl p-8 shadow-elegant text-center">
          <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            ¡Contraseña Actualizada!
          </h1>

          <p className="text-white mb-6">
            {feedback}
          </p>

          <Button
            onClick={onClick}
            className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg text-lg flex items-center justify-center transition"

          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </div>
  )
}
