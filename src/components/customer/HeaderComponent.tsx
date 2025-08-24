import { Home, Package, CreditCard, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navigationItems = [
  { icon: Home, label: 'Inicio', path: '/' },
  { icon: Package, label: 'Pedidos', path: '/orders' },
  { icon: CreditCard, label: 'Pagos', path: '/payments' },
  { icon: User, label: 'Perfil', path: '/profile' },
];

export function HeaderComponent() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="flex justify-around items-center h-16">
        {navigationItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center px-4 py-2 text-xs transition-colors ${
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`
            }
          >
            <item.icon className="w-5 h-5 mb-1" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}