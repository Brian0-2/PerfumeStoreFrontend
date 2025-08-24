import { newPassword, tokenConfirm } from "@/api/AuthAPI";
import { toast } from "@/ui/Sonner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Label from "@/ui/Label";
import LoadingSpinner from "@/ui/LoadingSpinner";
import Container from "@/components/auth/Container";
import BackButton from "@/components/auth/BackButton";
import Card from "@/components/auth/Card";
import CardHeader from "@/components/auth/CardHeader";
import ErrorMessage from "@/ui/ErrorMessage";
import type { NewPasswordForm } from "@/types/index";
import { getPasswordStrength } from "@/utils/getPasswordStrength";
import Forbidden from "../Forbidden";

export default function NewPasswordView() {
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState(false);
    const { token } = useParams() as { token: string };
    const navigate = useNavigate();

    const { data: tokenInfo, isError, isLoading, error } = useQuery({
        queryKey: ["token", token],
        queryFn: () => tokenConfirm(token),
        refetchOnWindowFocus: false,
        retry: false,
    });

    const initialValues: NewPasswordForm = { password: "", confirmPassword: "" };
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({ defaultValues: initialValues });

    const password = watch("password");

    const { mutate, isPending } = useMutation({
        mutationFn: newPassword,
        onSuccess: (data) => {
            toast.success(data!.message);
            navigate("/auth/login");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const passwordStrength = getPasswordStrength(password || "");

    const handleForgotPassword = (formData: NewPasswordForm) => {
        const data = { formData, token };
        mutate(data);
    };

    if(isError) return <Forbidden errorMessage={error.message} />;

    return (
        <Container>
            {isLoading && <LoadingSpinner size="lg" />}
            {tokenInfo && (
                <>
                    {/* Back Button */}
                    <BackButton
                        to="/auth/login"
                        className="mb-6"
                        text="Volver al inicio de sesión"
                    />
                    {/* New Password Card */}
                    <Card className="bg-white sm:p-10">
                        <CardHeader
                            title="Nueva Contraseña"
                            subtitle="Ingresa tu nueva contraseña para completar la recuperación"
                        />
                        {/* Form */}
                        <form
                            onSubmit={handleSubmit(handleForgotPassword)}
                            className="space-y-6"
                        >
                            {/* Password */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-black font-medium"
                                >
                                    Nueva Contraseña
                                </Label>
                                <div className="flex items-center border border-gray-300 rounded bg-gray-100 px-3 h-12 focus-within:border-black focus-within:ring-1 focus-within:ring-gray-400 transition">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="flex-1 h-full bg-transparent border-none pl-2 focus:outline-none"
                                        {...register("password", {
                                            required: "La contraseña es obligatoria",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "La contraseña debe tener al menos 8 caracteres",
                                            },
                                        })}
                                    />
                                    <Button
                                        type="button"
                                        size="lg"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-400 hover:text-black transition ml-2"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </Button>
                                </div>
                                {errors.password && (
                                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                                )}
                            </div>
                            {/* Password Strength Indicator */}
                            {password && (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold">Fortaleza:</span>
                                        <span
                                            className={`text-sm font-medium ${passwordStrength.score >= 3
                                                    ? "text-green-600"
                                                    : passwordStrength.score >= 2
                                                        ? "text-yellow-600"
                                                        : "text-red-600"
                                                }`}
                                        >
                                            {passwordStrength.text}
                                        </span>
                                    </div>
                                    <div className="w-full bg-secondary rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all ${passwordStrength.color}`}
                                            style={{
                                                width: `${(passwordStrength.score / 5) * 100}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* Confirm Password */}
                            <div className="space-y-2">
                                <Label
                                    htmlFor="confirmPassword"
                                    className="text-black font-medium"
                                >
                                    Confirmar Contraseña
                                </Label>
                                <div className="flex items-center border border-gray-300 rounded bg-gray-100 px-3 h-12 focus-within:border-black focus-within:ring-1 focus-within:ring-gray-400 transition">
                                    <Lock className="w-5 h-5 text-gray-400" />
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="flex-1 h-full bg-transparent border-none pl-2 focus:outline-none"
                                        {...register("confirmPassword", {
                                            required:
                                                "La confirmación de la contraseña es obligatoria",
                                            minLength: {
                                                value: 8,
                                                message:
                                                    "La contraseña debe tener al menos 8 caracteres",
                                            },
                                        })}
                                    />
                                    <Button
                                        type="button"
                                        size="lg"
                                        onClick={() =>
                                            setShowConfirmPassword(!showConfirmPassword)
                                        }
                                        className="text-gray-400 hover:text-black transition ml-2"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </Button>
                                </div>
                                {errors.confirmPassword && (
                                    <ErrorMessage>
                                        {errors.confirmPassword.message}
                                    </ErrorMessage>
                                )}
                            </div>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isPending || passwordStrength.score < 2}
                                className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg text-lg flex items-center justify-center transition"
                            >
                                {isPending && <LoadingSpinner size="sm" className="mr-2" />}
                                {isPending ? "Actualizando..." : "Actualizar Contraseña"}
                            </Button>
                        </form>
                        {/* Security Requirements */}
                        <div className="mt-6 p-4 bg-secondary/30 rounded-lg">
                            <h4 className="text-sm font-semibold text-primary mb-2">
                                Requisitos de seguridad:
                            </h4>
                            <ul className="text-xs text-muted-foreground space-y-1">
                                <li className={password!.length >= 8 ? "text-green-600" : ""}>
                                    Mínimo 8 caracteres
                                </li>
                                <li
                                    className={/[A-Z]/.test(password || "") ? "text-green-600" : ""}
                                >
                                    Una letra mayúscula
                                </li>
                                <li
                                    className={/[a-z]/.test(password || "") ? "text-green-600" : ""}
                                >
                                    Una letra minúscula
                                </li>
                                <li
                                    className={/[0-9]/.test(password || "") ? "text-green-600" : ""}
                                >
                                    Un número
                                </li>
                            </ul>
                        </div>
                    </Card>
                </>
            )}
        </Container>
    );
}
