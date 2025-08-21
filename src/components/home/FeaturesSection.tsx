import { features, testimonials } from '@/data/index';

export default function FeaturesSection() {

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Features Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Nos especializamos en brindar una experiencia de compra excepcional
            con los más altos estándares de calidad y servicio.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center flex"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 flex flex-col h-full w-full">
                <div className="text-4xl mb-4 transform transition duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Testimonials */}
        <div className="bg-gray-100 rounded-3xl p-8 sm:p-12" data-aos="fade-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Lo Que Dicen Nuestros Clientes
            </h3>
            <p className="text-gray-600">
              Testimonios reales de clientes satisfechos con nuestro servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400 text-sm">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
