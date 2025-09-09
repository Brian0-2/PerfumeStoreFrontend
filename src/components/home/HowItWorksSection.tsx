import { companyInfo, steps } from "@/data/index";
import WhatsAppForm from "./WhatsAppForm";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-50% to-pink-600 bg-clip-text text-transparent mb-6 p-2">
            ¿Cómo Funciona Nuestra Plataforma?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Un proceso simple y seguro diseñado para brindarte la mejor experiencia 
            en la compra de perfumes, desde el primer contacto hasta el seguimiento 
            completo de tu pedido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="rounded-2xl p-8 h-full shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-colors duration-500 group-hover:text-indigo-600">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay={900}>
          <div className="rounded-2xl p-8 sm:p-12 shadow-xl bg-gradient-to-r from-black via-50% to-pink-600 text-yellow-500">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Listo para Comenzar?
            </h3>
            <p className="mb-8 text-lg text-white">
              Contáctanos hoy mismo y descubre la facilidad de gestionar tus pedidos 
              de perfumes con total transparencia y seguridad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppForm
                className='bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition flex items-center gap-2 justify-center'
                text='Comenzar Ahora'
              />
              <a
                href={companyInfo.contact.phone ? `tel:${companyInfo.contact.phone.replace(/\s+/g, '')}` : '#'}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
