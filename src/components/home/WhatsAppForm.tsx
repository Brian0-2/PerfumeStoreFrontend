import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import ReactDOM from "react-dom";
import { companyInfo } from "@/data/index";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import Label from "@/ui/Label";

type FormValues = {
    name: string;
    lastName: string;
    address: string;
    email: string;
    phone: string;
    message: string;
};

type WhatsAppFormProps = {
    className?: string;
    text?: string;
}

export default function WhatsAppForm({ className, text }: WhatsAppFormProps) {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const handleWhatsApp = (data: FormValues) => {
        const message = `
Hola, me interesa conocer más sobre sus productos y servicios.
Estos son mis datos:

🥺 Nombre: ${data.name} ${data.lastName}
🏠 Domicilio: ${data.address}
📱 Celular: ${data.phone}
📩 Correo: ${data.email}
📝 Mensaje: ${data.message}
`;

        const url = `https://wa.me/${companyInfo.contact.whatsapp.replace(
            /\s+/g,
            ""
        )}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
        setIsOpen(false);
    };
    return (
        <>
            {/* Principal Button */}
            <button
                onClick={() => setIsOpen(true)}
                className={`cursor-pointer ${className}`}
            >
                <MessageCircle className="w-5 h-5 mr-2" />
                {text || "WhatsApp"}
            </button>
            {typeof document !== "undefined" &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
                                >
                                    {/* Botón cerrar */}
                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-4 right-4 text-gray-500 hover:bg-red-500 hover:text-white cursor-pointer"
                                    >
                                        <X size={24} />
                                    </Button>

                                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                                        Enviar mensaje por WhatsApp
                                    </h2>

                                    {/* Form */}
                                    <form
                                        onSubmit={handleSubmit(handleWhatsApp)}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <Label className="block text-sm font-medium">Nombre</Label>
                                            <Input
                                                {...register("name", {
                                                    required: "El nombre es obligatorio",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.name && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium">Apellidos</Label>
                                            <Input
                                                {...register("lastName", {
                                                    required: "Los apellidos son obligatorios",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.lastName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium">Domicilio</Label>
                                            <Input
                                                {...register("address", {
                                                    required: "El domicilio es obligatorio",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.address && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.address.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium">
                                                Numero de Celular
                                            </Label>
                                            <Input
                                                {...register("phone", {
                                                    required: "El teléfono es obligatorio",
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message:
                                                            "Debe ser un número de teléfono válido de 10 dígitos",
                                                    },
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.phone && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium">
                                                Correo Electrónico
                                            </Label>
                                            <Input
                                                {...register("email", {
                                                    required: "El correo electrónico es obligatorio",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message:
                                                            "Debe ser un correo electrónico válido",
                                                    },
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.email && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <Label className="block text-sm font-medium">Mensaje</Label>
                                            <textarea
                                                {...register("message", {
                                                    required: "El mensaje es obligatorio",
                                                })}
                                                rows={3}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.message && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                                        >
                                            Enviar por WhatsApp
                                        </Button>
                                    </form>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
}
