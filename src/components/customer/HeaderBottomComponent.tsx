import { useAuth } from '@/hooks/useAuth';
import { FiHome, FiPackage, FiCreditCard, FiLogOut } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Modal from '@/ui/Modal';
import Button from '@/ui/Button';
import { route } from '@/utils/routeHandler';

const navigationItems = [
  { icon: FiPackage, label: 'Pedidos', path: route("CUSTOMER_ORDERS") },
  { icon: FiCreditCard, label: 'Pagos', path: route("CUSTOMER_PAYMENTS") },
];

export function HeaderBottomComponent() {
  const [openModal, setOpenModal] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    setOpenModal(true);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center px-4 py-2 text-xs transition-colors ${
                  isActive
                    ? 'text-purple-700 underline'
                    : 'text-gray-700 hover:text-gray-950'
                }`
              }
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span>{item.label}</span>
            </NavLink>
          ))}

          {/* Logout Button */}
          <Button
            onClick={handleLogout}
            className="flex flex-col items-center justify-center px-4 py-2 text-xs text-gray-700 hover:text-red-600 transition-colors"
          >
            <FiLogOut className="w-5 h-5 mb-1" />
            <span>Salir</span>
          </Button>
        </div>
      </nav>

      {/* Logout confirmation modal */}
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        contentLabel="Confirmar cierre de sesión."
      >
        <p className="text-sm text-gray-600">
          ¿Estás seguro de que quieres cerrar sesión? Esta acción cerrará tu sesión actual.
        </p>
        <div className="mt-6 flex justify-end gap-3">
          <Button
            onClick={() => setOpenModal(false)}
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            No.
          </Button>
          <Button
            onClick={logout}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Sí, salir.
          </Button>
        </div>
      </Modal>
    </>
  );
}
