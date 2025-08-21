import { brands } from '@/data/index';
import { CheckCircle, Star, Clock, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function BrandsSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <section id="brands" className="py-16 sm:py-24 bg-gradient-to-br from-secondary/20 via-background to-luxury/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-luxury to-perfume bg-clip-text text-transparent mb-6">
            Marcas de Prestigio Mundial
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Descubre nuestra exclusiva colección de fragancias de las casas de perfumería más prestigiosas del mundo,
            cada una con su propia historia de elegancia y distinción.
          </p>
        </div>

        {/* Carrusel */}
        <div className="overflow-hidden relative cursor-pointer" ref={emblaRef}>
          <div className="flex">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className=" flex-[0_0_100%] sm:flex-[0_0_33%] lg:flex-[0_0_20%] px-4">
                <div
                  className="relative rounded-3xl p-6 h-full shadow-card hover:shadow-elegant transition-elegant group-hover:scale-105 border border-white/20 overflow-hidden"
                  style={{
                    background: brand.gradient,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Brand Pattern Background */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-elegant">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 20% 20%, hsl(${brand.colors.accent}) 0%, transparent 50%), 
                                          radial-gradient(circle at 80% 80%, hsl(${brand.colors.secondary}) 0%, transparent 50%)`
                    }} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-4 h-full">
                    {/* Brand Icon */}
                    <div
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-elegant backdrop-blur-sm"
                      style={{
                        backgroundColor: `hsl(${brand.colors.secondary} / 0.9)`,
                        border: `2px solid hsl(${brand.colors.accent} / 0.3)`
                      }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-smooth">
                        {brand.icon}
                      </span>
                    </div>
                    {/* Brand Name */}
                    <h3
                      className="text-xl font-bold transition-smooth group-hover:scale-105"
                      style={{
                        color: brand.name === 'Dior' || brand.name === 'Carolina Herrera'
                          ? `hsl(${brand.colors.primary === '0 0% 100%' ? '0 0% 10%' : brand.colors.primary})`
                          : `hsl(${brand.colors.accent})`
                      }}
                    >
                      {brand.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed flex-1 opacity-90"
                      style={{
                        color: brand.name === 'Dior' || brand.name === 'Carolina Herrera'
                          ? `hsl(0 0% 20%)`
                          : `hsl(${brand.colors.secondary})`
                      }}
                    >
                      {brand.description}
                    </p>

                    {/* Signature Fragrances */}
                    <div
                      className="text-xs font-medium opacity-80 group-hover:opacity-100 transition-smooth"
                      style={{
                        color: brand.name === 'Dior' || brand.name === 'Carolina Herrera'
                          ? `hsl(${brand.colors.primary === '0 0% 100%' ? '0 0% 30%' : brand.colors.primary})`
                          : `hsl(${brand.colors.accent})`
                      }}
                    >
                      {brand.signature}
                    </div>

                    {/* Decorative Element */}
                    <div
                      className="w-12 h-0.5 rounded-full opacity-60 group-hover:opacity-100 transition-smooth"
                      style={{
                        background: `linear-gradient(90deg, hsl(${brand.colors.accent}), hsl(${brand.colors.secondary}))`
                      }}
                    />
                  </div>

                  {/* Luxury Border Effect */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-elegant pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, hsl(${brand.colors.accent} / 0.2) 0%, transparent 50%, hsl(${brand.colors.secondary} / 0.2) 100%)`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
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
