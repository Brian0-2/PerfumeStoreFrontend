import { useForm } from 'react-hook-form';
import { useMutation } from "@tanstack/react-query";
import { Mail } from "lucide-react";
import { forgotPassword } from "@/api/AuthAPI";
import { toast } from "@/ui/Sonner";
import Label from "@/ui/Label";
import Input from "@/ui/Input";
import Button from "@/ui/Button";
import LoadingSpinner from "@/ui/LoadingSpinner";
import ErrorMessage from "@/ui/ErrorMessage";
import Container from "@/components/auth/Container";
import BackButton from "@/components/auth/BackButton";
import Card from "@/components/auth/Card";
import CardHeader from "@/components/auth/CardHeader";
import type { Auth } from '@/types/index';
import { Link } from 'react-router-dom';

export default function ForgotPasswordView() {

  const initialValues: Pick<Auth, 'email'> = { email: '' };
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      toast.success(data!.message);
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  const handleForgotPassword = (formData: Pick<Auth, 'email'>) => mutate(formData);

  return (
    <Container>

      <BackButton to="/" className="mb-6" text="Volver al inicio" />

      {/* Login Card */}
      <Card className="bg-white sm:p-10">

        {/* Header */}
        <CardHeader title="Restablecer Contraseña" subtitle="Ingresa tu email y te enviaremos un enlace para restablecer tu contraseña" />

        {/* Form */}
        <form onSubmit={handleSubmit(handleForgotPassword)} className="w-full space-y-5 sm:space-y-6">

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

            {/* Login Link */}
          <div className="text-right">
            <Link to="/auth/login" className="font-semibold text-sm">
              ¿Ya tienes una cuenta? <span className="text-yellow-400 hover:text-yellow-500 transition font-bold underline">Inicia sesión</span>
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
            {isPending ? 'Enviando...' : 'Enviar Solicitud'}
          </Button>
        </form>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 text-sm">
            ¿No tienes cuenta? <span className="text-yellow-400">Contacta con nosotros para registrarte</span>
          </p>
        </div>
      </Card>

      {/* Note */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">📧 El enlace de recuperación será válido por 15 minutos por motivos de seguridad</p>
      </div>
    </Container>
  );
}
