import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { companyInfo } from "@/data/index";


export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121015] text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-lg">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-3">
              <a
                href={`https://instagram.com/${companyInfo.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://facebook.com/${companyInfo.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Enlaces Rápidos
            </h3>
            <nav className="space-y-2">
              {[
                { href: "#hero", label: "Inicio" },
                { href: "#brands", label: "Marcas" },
                { href: "#about", label: "Nosotros" },
                { href: "#contact", label: "Contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Nuestros Servicios
            </h3>
            <nav className="space-y-2">
              {[
                "Asesoría Personalizada",
                "Apartado de Perfumes",
                "Seguimiento de Pedidos",
                "Garantía de Autenticidad",
              ].map((service) => (
                <span
                  key={service}
                  className="block text-gray-400 text-sm hover:text-yellow-500 transition-colors cursor-default"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {companyInfo.contact.address}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.contact.phone}`}
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  {companyInfo.contact.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.contact.email}`}
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  {companyInfo.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-500 text-xs">
              © {currentYear} {companyInfo.name}. Todos los derechos reservados.
            </p>

            <div className="flex space-x-6 text-xs">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
              >
                Privacidad
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-yellow-500 transition-colors"
              >
                Términos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
