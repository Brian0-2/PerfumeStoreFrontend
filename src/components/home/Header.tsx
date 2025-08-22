import { companyInfo } from "@/data/index";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X, User, LogOut, Package } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/ui/Button";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { data, logout } = useAuth();

    const handleLogout = () => {
        logout();
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "#hero", label: "Inicio" },
        { href: "#brands", label: "Marcas" },
        { href: "#how-it-works", label: "¿Como Funciona?" },
        { href: "#about", label: "Nosotros" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center space-x-2 transition duration-300 hover:scale-105"
                    >
                        <div className="w-10 h-10 bg-gradient-to-r from-[#CFD6E2E6] via-[#CFD6E2E6] to-yellow-600 rounded-lg flex items-center justify-center shadow-md">
                            <img src="/perfume_icon.svg" alt="Logo image" />
                        </div>
                        <span className="font-bold text-xl text-gray-900 hidden sm:block">
                            {companyInfo.name}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
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
                        {data ? (
                            <div className="flex items-center space-x-2">
                                <div className="hidden sm:flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <User className="w-4 h-4 text-gray-700" />
                                        </div>
                                        <span className="text-sm font-medium text-gray-800">
                                            {data?.user?.name}
                                        </span>
                                    </div>

                                    <Button
                                        size="sm"
                                        onClick={() => navigate("/dashboard")}
                                        className="text-gray-700 hover:text-yellow-600 transition duration-300 flex items-center gap-2"
                                    >
                                        <Package className="w-4 h-4" />
                                        Mis Pedidos
                                    </Button>

                                    <Button
                                        size="sm"
                                        onClick={handleLogout}
                                        className="text-gray-700 hover:text-red-600 transition duration-300 flex items-center gap-2"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Salir
                                    </Button>
                                </div>

                                {/* Mobile user menu */}
                                <div className="sm:hidden">
                                    <Button
                                        size="sm"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        <User className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Button
                                    size="sm"
                                    onClick={() => navigate("/auth/login")}
                                    className="hidden sm:flex"
                                >
                                    Iniciar Sesión
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => navigate("/auth/login")}
                                    className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 p-2 rounded-xl text-gray-900 hover:opacity-90 transition duration-300"
                                >
                                    <span className="hidden sm:inline">Acceder</span>
                                    <User className="w-4 h-4 sm:hidden" />
                                </Button>
                            </div>
                        )}

                        {/* Mobile menu button */}
                        <Button
                            size="sm"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden"
                        >
                            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className=""
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                            />

                            <motion.div
                                className="md:hidden fixed top-16 left-0 right-0 bg-white z-50 border-t shadow-lg"
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="px-4 py-4 space-y-3">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.href}
                                            href={item.href}
                                            className="block text-gray-700 hover:text-yellow-600 transition-colors duration-300 font-medium py-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    ))}

                                    {data && (
                                        <div className="pt-3 border-t space-y-2">
                                            <Button
                                                size="sm"
                                                onClick={() => {
                                                    navigate("/dashboard");
                                                    setIsMenuOpen(false);
                                                }}
                                                className="w-full justify-start flex items-center gap-2"
                                            >
                                                <Package className="w-4 h-4" />
                                                Mis Pedidos
                                            </Button>

                                            <Button
                                                size="sm"
                                                onClick={handleLogout}
                                                className="w-full justify-start text-red-600 hover:text-red-700 flex items-center gap-2"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                Cerrar Sesión
                                            </Button>
                                        </div>
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
