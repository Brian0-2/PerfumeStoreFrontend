import { useForm } from 'react-hook-form';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { login } from "@/api/AuthAPI";
import { toast } from "@/ui/Sonner";
import type { LoginForm } from '@/types/index';
import Label from "@/ui/Label";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import LoadingSpinner from "@/ui/LoadingSpinner";
import ErrorMessage from "@/ui/ErrorMessage";
import Container from "@/components/auth/Container";
import BackButton from "@/components/auth/BackButton";
import Card from "@/components/auth/Card";
import CardHeader from "@/components/auth/CardHeader";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);

  const initialValues: LoginForm = { email: '', password: '' };
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      toast.success("Bienvenido de nuevo!");
      navigate("/protected", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleLogin = (formData: LoginForm) => mutate(formData);

  return (
    <Container>
      <BackButton to="/" className="mb-6" text="Volver al inicio" />
      {/* Login Card */}
      <Card className="bg-white sm:p-10">
        {/* Header */}
        <CardHeader title="Iniciar Sesión" subtitle="Accede a tu cuenta para ver tus pedidos" />
        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)} className="w-full space-y-5 sm:space-y-6">
          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black font-medium">Correo Electrónico</Label>
            <div className="flex items-center border border-gray-300 rounded bg-gray-100 px-3 h-12 focus-within:border-black focus-within:ring-1 focus-within:ring-gray-400 transition">
              <Mail className="w-5 h-5 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                className="flex-1 h-full bg-transparent border-none pl-2 focus:outline-none"
                {...register('email', {
                  required: 'El correo electrónico es obligatorio',
                  pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail no válido' }
                })}
              />
            </div>
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-black font-medium">Contraseña</Label>
            <div className="flex items-center border border-gray-300 rounded bg-gray-100 px-3 h-12 focus-within:border-black focus-within:ring-1 focus-within:ring-gray-400 transition">
              <Lock className="w-5 h-5 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="flex-1 h-full bg-transparent border-none pl-2 focus:outline-none"
                {...register('password', {
                  required: 'La contraseña es obligatoria',
                  minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' }
                })}
              />
              <Button
                type="button"
                size="lg"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-black transition ml-2"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </Button>
            </div>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </div>
          {/* Forgot Password Link */}
          <div className="text-right">
            <Link to="/auth/forgot-password" className="font-semibold text-sm">
              ¿Olvidaste tu contraseña? <span className="text-yellow-400 hover:text-yellow-500 transition font-medium underline">Restablecer</span>
            </Link>
          </div>
          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
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
            ¿No tienes cuenta? <span className="text-yellow-400">Contacta con nosotros para registrarte</span>
          </p>
        </div>
      </Card>
      {/* Security Note */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">🔒 Tus datos están protegidos con encriptación.</p>
      </div>
    </Container>
  );
}
