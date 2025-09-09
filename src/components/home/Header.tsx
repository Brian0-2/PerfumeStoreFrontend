import { companyInfo } from "@/data/index";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaBars,
    FaTimes,
    FaUser,
    FaSignOutAlt,
    FaBox,
    FaSignInAlt,
} from "react-icons/fa";
import { route } from "@/utils/routeHandler";
import { useNavigate } from "react-router-dom";
import Button from "@/ui/Button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: user, logout } = useAuth();
    const navigate = useNavigate();

    // Bloquear scroll cuando el menú móvil está abierto
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = isMenuOpen ? "hidden" : original || "";
        return () => {
            document.body.style.overflow = original;
        };
    }, [isMenuOpen]);

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
    };

    const internalLinks = [
        { href: "#hero", label: "Inicio" },
        { href: "#brands", label: "Marcas" },
        { href: "#how-it-works", label: "¿Cómo Funciona?" },
        { href: "#about", label: "Nosotros" },
        { href: "#contact", label: "Contacto" },
    ];

    // Clases comunes para hover + focus accesibles
    const interactive =
        "transition duration-200 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500";
    const linkClass = `text-gray-800 hover:text-yellow-500 font-medium ${interactive}`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Button
                        size="sm"
                        onClick={() => navigate(route("HOME"))}
                        className={`flex items-center gap-2 z-50 ${interactive}`}
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                            <img src="/perfume_icon.svg" alt="Logo" className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl md:block text-black">
                            {companyInfo.name}
                        </span>
                    </Button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {internalLinks.map((item) => (
                            <a key={item.href} href={item.href} className={linkClass}>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Auth + Mobile Menu Button */}
                    <div className="flex items-center gap-3">
                        {user ? (
                            <div className="flex items-center gap-2">
                                {/* Desktop user area */}
                                <div className="hidden md:flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                            <FaUser className="w-4 h-4 text-black" />
                                        </div>
                                        <span className="text-sm font-medium">
                                            {user?.name}
                                        </span>
                                    </div>

                                    <Button
                                        size="sm"
                                        onClick={() => navigate(route("CUSTOMER_ORDERS"))}
                                        className={`flex items-center gap-2 hover:text-yellow-400 ${interactive}`}
                                    >
                                        <FaBox className="w-4 h-4" />
                                        Mis Pedidos
                                    </Button>

                                    <Button
                                        size="sm"
                                        onClick={handleLogout}
                                        className={`flex items-center gap-2 hover:text-red-500 ${interactive}`}
                                    >
                                        <FaSignOutAlt className="w-4 h-4" />
                                        Salir
                                    </Button>
                                </div>

                                {/* Mobile user snippet */}
                                <div className="md:hidden flex items-center gap-2">
                                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                                        <FaUser className="w-4 h-4 text-black" />
                                    </div>
                                    <span className="text-sm font-medium">
                                        {user?.name}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <Button
                                size="sm"
                                onClick={() => navigate(route("LOGIN"))}
                                className={`hidden md:flex items-center gap-2 hover:text-yellow-400 ${interactive}`}
                            >
                                <FaSignInAlt className="w-4 h-4" />
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* Mobile menu button */}
                        <Button
                            size="sm"
                            onClick={() => setIsMenuOpen((v) => !v)}
                            aria-controls="mobile-nav"
                            aria-expanded={isMenuOpen}
                            aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
                            className={`md:hidden z-50 inline-flex items-center justify-center rounded-full p-2 ${interactive} ${isMenuOpen
                                    ? "bg-red-500 text-white hover:brightness-110"
                                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                                }`}
                        >
                            {isMenuOpen ? (
                                <FaTimes className="w-6 h-6" />
                            ) : (
                                <FaBars className="w-6 h-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Panel */}
                        <motion.nav
                            id="mobile-nav"
                            aria-label="Navegación principal móvil"
                            className="md:hidden fixed top-16 left-0 right-0 z-40"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                            <div className="px-4 py-6 space-y-4 bg-white border-t shadow-lg rounded-b-xl text-gray-900">
                                {/* Enlaces internos */}
                                {internalLinks.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block py-2 hover:text-yellow-500 transition duration-200 hover:scale-105 font-medium"
                                    >
                                        {item.label}
                                    </a>
                                ))}

                                {/* Auth */}
                                {user ? (
                                    <div className="pt-4 border-t space-y-3">
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                navigate(route("CUSTOMER_ORDERS"));
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full justify-start flex items-center gap-2 transition duration-200 hover:scale-105 hover:text-yellow-500"
                                        >
                                            <FaBox className="w-4 h-4" />
                                            Mis Pedidos
                                        </Button>

                                        <Button
                                            size="sm"
                                            onClick={handleLogout}
                                            className="w-full justify-start text-red-600 hover:text-red-700 flex items-center gap-2 transition duration-200 hover:scale-105"
                                        >
                                            <FaSignOutAlt className="w-4 h-4" />
                                            Cerrar Sesión
                                        </Button>
                                    </div>
                                ) : (
                                    <Button
                                        size="sm"
                                        onClick={() => {
                                            navigate(route("LOGIN"));
                                            setIsMenuOpen(false);
                                        }}
                                        className="w-full justify-start flex items-center gap-2 hover:text-yellow-500 transition duration-200 hover:scale-105"
                                    >
                                        <FaSignInAlt className="w-4 h-4" />
                                        Iniciar Sesión
                                    </Button>
                                )}
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}