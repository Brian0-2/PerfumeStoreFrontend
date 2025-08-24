import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import ReactDOM from "react-dom";
import { companyInfo } from "@/data/index";
import Button from "@/ui/Button";

type FormValues = {
    nombre: string;
    apellidos: string;
    domicilio: string;
    codigoPostal: string;
    mensaje: string;
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

\u{1F642} Nombre: ${data.nombre} ${data.apellidos}
\u{1F3E0} Domicilio: ${data.domicilio}
\u{1F4EE} Código Postal: ${data.codigoPostal}
\u{1F4DD} Mensaje: ${data.mensaje}
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
            {/* Botón principal */}
            <button
                onClick={() => setIsOpen(true)}
                className={`cursor-pointer ${className}`}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
                {text || "WhatsApp"}
            </button>

            {/* Portal para asegurar que el modal se renderice sobre todo */}
            {typeof document !== "undefined" &&
                ReactDOM.createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
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
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute top-4 right-4 text-gray-500 hover:bg-red-500 hover:text-white cursor-pointer"
                                    >
                                        <X size={24} />
                                    </button>

                                    <h2 className="text-xl font-bold text-gray-800 mb-4">
                                        Enviar mensaje por WhatsApp
                                    </h2>

                                    {/* Formulario */}
                                    <form
                                        onSubmit={handleSubmit(handleWhatsApp)}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <label className="block text-sm font-medium">Nombre</label>
                                            <input
                                                {...register("nombre", {
                                                    required: "El nombre es obligatorio",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.nombre && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.nombre.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium">Apellidos</label>
                                            <input
                                                {...register("apellidos", {
                                                    required: "Los apellidos son obligatorios",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.apellidos && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.apellidos.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium">Domicilio</label>
                                            <input
                                                {...register("domicilio", {
                                                    required: "El domicilio es obligatorio",
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.domicilio && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.domicilio.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium">
                                                Código Postal
                                            </label>
                                            <input
                                                {...register("codigoPostal", {
                                                    required: "El código postal es obligatorio",
                                                    pattern: {
                                                        value: /^[0-9]{5}$/,
                                                        message:
                                                            "Debe ser un código postal válido de 5 dígitos",
                                                    },
                                                })}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.codigoPostal && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.codigoPostal.message}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium">Mensaje</label>
                                            <textarea
                                                {...register("mensaje", {
                                                    required: "El mensaje es obligatorio",
                                                })}
                                                rows={3}
                                                className="w-full mt-1 p-2 border rounded-lg"
                                            />
                                            {errors.mensaje && (
                                                <p className="text-red-500 text-sm">
                                                    {errors.mensaje.message}
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
