import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/index";


export default function HeroCarousel() {

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section id="hero" className="relative h-screen">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            {/* Background Image + Gradient */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#000000e6_20%,#6b21a8_90%)] opacity-70" />
            </div>
            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
              <div className="container mx-auto space-y-6" data-aos="fade-up">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                <h2 className="text-xl sm:text-2xl lg:text-3xl text-yellow-400 font-semibold drop-shadow-md">
                  {slide.subtitle}
                </h2>

                <p className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
              ? "bg-yellow-400 shadow-lg"
              : "bg-white/40 hover:bg-white/60"
              }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 -left-2">
        <span className="text-sm rotate-90 whitespace-nowrap flex items-center">
          <span className="ml-1 text-yellow-400 font-bold animate-bounce">
            Desliza para explorar
          </span>
        </span>
      </div>
    </section>
  );
};
