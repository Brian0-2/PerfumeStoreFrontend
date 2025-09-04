import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '@/data/index';
import WhatsAppForm from './WhatsAppForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contáctanos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para encontrar tu fragancia perfecta? Nuestro equipo de expertos está aquí para ayudarte con asesoría personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <h3 className="text-xl font-bold text-gray-900">Información de Contacto</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3B0A6A] rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">{companyInfo.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#6C1FA6] rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Teléfono</h4>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FFC107] rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${companyInfo.contact.email}`}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <WhatsAppForm 
              className='bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition flex items-center gap-2'
              text='Enviar Mensaje'
            />
            <p className="text-sm text-gray-500 pt-4">
              Horarios de atención: Lunes a Sábado de 9:00 AM a 7:00 PM
            </p>
          </div>

          {/* Mission & Values */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{companyInfo.mission}</p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Nuestros Valores</h4>
              <ul className="space-y-2">
                {companyInfo.values.map((value, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#FFC107] rounded-full flex-shrink-0" />
                    <span className="text-gray-600">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_80%)] rounded-2xl p-8 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">¿Listo para encontrar tu fragancia perfecta?</h3>
              <p className="mb-6 opacity-90 text-lg">Únete a más de 1000 clientes satisfechos que confían en nosotros</p>
                <WhatsAppForm
                  className='bg-[#FFC107] hover:bg-[#FFB300] text-gray-900 px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center'
                  text='Comenzar Ahora'
                />
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};
