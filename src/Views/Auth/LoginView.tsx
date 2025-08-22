import type { UserLoginForm } from "@/types/index";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ArrowLeft, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Label from "@/ui/Label";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import LoadingSpinner from "@/ui/LoadingSpinner";
import { companyInfo } from "@/data/index";
import { login } from "@/api/AuthAPI";
import { toast } from "sonner";
import ErrorMessage from "@/ui/ErrorMessage";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues: UserLoginForm = {
    email: '',
    password: '',
  };

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const { mutate, isPending, } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      toast.success(data);
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error.message,{
        description: "Error al iniciar sesión"
      });
    }
  });

  const handleLogin = (formData: UserLoginForm) => mutate(formData);

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_80%)] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <div className="text-center sm:text-left mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 mr-2" />
            Volver al inicio
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">E</span>
              </div>
              <span className="font-bold text-2xl text-black">
                {companyInfo.name}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-black mb-2">
              Iniciar Sesión
            </h1>
            <p className="text-gray-500">
              Accede a tu cuenta para ver tus pedidos
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5 sm:space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-black font-medium">
                Correo Electrónico
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="pl-10 h-12 bg-gray-100 border border-gray-300 rounded transition w-full"
                  {...register('email', {
                    required: 'El correo electrónico es obligatorio',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'E-mail no válido',
                    },
                  })}
                />
              </div>
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">

            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-black font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="pl-10 pr-10 h-12 bg-gray-100 border border-gray-300 rounded transition w-full"
                  {...register('password', {
                    required: 'La contraseña es obligatoria',
                    minLength: {
                      value: 8,
                      message: 'La contraseña debe tener al menos 8 caracteres'
                    }
                  })}
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </Button>
              </div>
              {errors.password && (
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <Link
                to="/auth/reset-password"
                className="text-yellow-400 hover:text-yellow-500 transition text-sm font-medium"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg text-lg flex items-center justify-center transition"
            >
              {isPending && <LoadingSpinner size="sm" className="mr-2" />}
              {isPending ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-gray-500 text-sm">
              ¿No tienes cuenta?{' '}
              <span className="text-yellow-400">
                Contacta con nosotros para registrarte
              </span>
            </p>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-xs">
            🔒 Tus datos están protegidos con encriptación de grado militar
          </p>
        </div>
      </div>
    </div>
  );
}
