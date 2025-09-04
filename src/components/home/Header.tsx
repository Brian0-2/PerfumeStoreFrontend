import { companyInfo } from "@/data/index";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUser, FaSignOutAlt, FaBox, FaSignInAlt } from "react-icons/fa";
import { route } from "@/utils/routeHandler";
import { useNavigate } from "react-router-dom";
import Button from "@/ui/Button";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { data: user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
    };

    const internalLinks = [
        { href: "#hero", label: "Inicio" },
        { href: "#brands", label: "Marcas" },
        { href: "#how-it-works", label: "¿Como Funciona?" },
        { href: "#about", label: "Nosotros" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-lg">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 ">
                    {/* Logo */}
                    <Button
                        size="sm"
                        onClick={() => navigate(route("HOME"))}
                        className="flex items-center space-x-1 transition duration-300 hover:scale-105 bg-transparent"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#CFD6E2E6] via-[#CFD6E2E6] to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                            <img src="/perfume_icon.svg" alt="Logo image" />
                        </div>
                        <span className="font-bold text-xl text-gray-900 hidden md:block">
                            {companyInfo.name}
                        </span>
                    </Button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-8">
                        {internalLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Auth Section */}
                    <div className="flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <div className="hidden md:flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <FaUser className="w-4 h-4 text-gray-700" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-800">{user?.name}</span>
                                    </div>

                                    <Button
                                        size="sm"
                                        onClick={() => navigate(route("CUSTOMER_DASHBOARD"))}
                                        className="text-gray-700 hover:text-yellow-600 transition duration-300 flex items-center gap-2"
                                    >
                                        <FaBox className="w-4 h-4" />
                                        Mis Pedidos
                                    </Button>

                                    <Button
                                        size="sm"
                                        onClick={handleLogout}
                                        className="text-gray-700 hover:text-red-600 transition duration-300 flex items-center gap-2"
                                    >
                                        <FaSignOutAlt className="w-4 h-4" />
                                        Salir
                                    </Button>
                                </div>

                                {/* Mobile user menu */}
                                <div className="md:hidden flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                        <FaUser className="w-4 h-4 text-gray-700" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-800">{user?.name}</span>
                                </div>
                            </div>
                        ) : (
                            <Button
                                size="sm"
                                onClick={() => navigate(route("LOGIN"))}
                                className="hidden md:flex items-center gap-2 hover:text-yellow-600"
                            >
                                <FaSignInAlt className="w-4 h-4" />
                                Iniciar Sesión
                            </Button>
                        )}

                        {/* Mobile menu button */}
                        <Button
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden ${isMenuOpen ? "bg-red-500 text-white rounded-full" : "bg-gray-200 text-gray-700 rounded-sm"
                                }`}
                        >
                            {isMenuOpen ? <FaTimes className="w-8 h-10" /> : <FaBars className="w-8 h-10" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 z-40 "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                            />

                            <motion.div
                                className="md:hidden fixed top-16 left-0 right-0 inset-0 bg-black/50 backdrop-blur-sm z-50 border-t shadow-lg h-screen"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="px-4 py-4 space-y-3 bg-white ">
                                    {/* Enlaces internos */}
                                    {internalLinks.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2"
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                    {/* Auth */}
                                    {user ? (
                                        <div className="pt-3 border-t space-y-2">
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    route("CUSTOMER_DASHBOARD");
                                                    setIsMenuOpen(false);
                                                }}
                                                className="w-full justify-start flex items-center gap-2"
                                            >
                                                <FaBox className="w-4 h-4" />
                                                Mis Pedidos
                                            </Button>

                                            <Button
                                                size="sm"
                                                onClick={handleLogout}
                                                className="w-full justify-start text-red-600 hover:text-red-700 flex items-center gap-2"
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
                                            className="w-full justify-start flex items-center gap-2 hover:text-yellow-600"
                                        >
                                            <FaSignInAlt className="w-4 h-4" />
                                            Iniciar Sesión
                                        </Button>
                                    )}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}