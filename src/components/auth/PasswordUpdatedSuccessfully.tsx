import Button from "@/ui/Button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PasswordUpdatedSuccessfully() {

    const navigate = useNavigate();

  return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="gradient-card rounded-2xl p-8 shadow-elegant text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-primary mb-4">
              ¡Contraseña Actualizada!
            </h1>
            
            <p className="text-muted-foreground mb-6">
              Tu contraseña ha sido actualizada exitosamente. 
              Ahora puedes iniciar sesión con tu nueva contraseña.
            </p>
            
            <Button
              onClick={() => navigate('/auth/login')}
              className="w-full gradient-gold text-primary hover:opacity-90 transition-smooth"
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </div>
  )
}
