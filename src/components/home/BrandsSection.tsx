import { CheckCircle, Star, Clock, Users } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { perfumes } from "@/data/index";

export default function PerfumesSection() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", skipSnaps: false },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  return (
    <section id="brands" className="py-16 sm:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-black via-50% to-pink-600 bg-clip-text text-transparent mb-6 p-2">
            Perfumes de Marcas Exclusivas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explora nuestra colección de fragancias de las marcas más prestigiosas del mundo.
          </p>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden relative cursor-grab bg-gray-100 py-6 px-2 rounded-3xl shadow-2xl" ref={emblaRef}>
          <div className="flex">
            {perfumes.map((perfume) => (
              <div
                key={perfume.id}
                className="flex-[0_0_100%] sm:flex-[0_0_33%] lg:flex-[0_0_20%] px-4"
              >
                <div
                  className={`relative rounded-3xl p-6 h-full shadow-lg transition-transform duration-300 group hover:scale-105 overflow-hidden ${perfume.gradient}`}
                >
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 h-full">
                    {/* Icon */}
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white/30 text-3xl text-white">
                      {perfume.icon}
                    </div>

                    {/* Nombre */}
                    <h3 className="text-xl font-bold text-white transition-transform group-hover:scale-105">
                      {perfume.name}
                    </h3>

                    {/* Descripción */}
                    <p className="text-sm text-white/90">{perfume.description}</p>

                    {/* Fragancia */}
                    <p className="text-xs text-white/80">{perfume.signature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de confianza */}
        <div className="mt-24 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center space-y-3">
              <CheckCircle className="text-yellow-500 w-10 h-10" />
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500">Autenticidad Garantizada</div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Star className="text-yellow-500 w-10 h-10" />
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500">Marcas Disponibles</div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Clock className="text-yellow-500 w-10 h-10" />
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-500">Años de Experiencia</div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Users className="text-yellow-500 w-10 h-10" />
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-500">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
