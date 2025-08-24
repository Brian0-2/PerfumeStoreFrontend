import { useAuth } from '@/hooks/useAuth';
import { Home, Package, CreditCard, User, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Button from '@/ui/Button';

const navigationItems = [
    { icon: Home, label: 'Inicio', path: '/customer' },
    { icon: Package, label: 'Pedidos', path: '/orders' },
    { icon: CreditCard, label: 'Pagos', path: '/payments' },
    { icon: User, label: 'Perfil', path: '/profile' },
];

export function HeaderComponent() {

    const { logout } = useAuth();
     const handleLogout = () => {
        logout();
    };
    
    return (
        <nav className="fixed bottom-0 lg:top-0 lg:bottom-auto left-0 right-0 z-50 bg-white border-t lg:border-b border-border">
            <div className="flex justify-around items-center h-16">
                {navigationItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center px-4 py-2 text-xs transition-colors ${isActive
                                ? 'text-purple-700 underline'
                                : 'text-gray-700 hover:text-gray-950'
                            }`
                        }
                    >
                        <item.icon className="w-5 h-5 mb-1" />
                        <span>{item.label}</span>
                    </NavLink>
                ))}

                <Button
                    size="sm"
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-red-600 transition duration-300 flex items-center gap-2"
                >
                    <LogOut className="w-4 h-4" />
                    Salir
                </Button>
            </div>
        </nav>

    );
}