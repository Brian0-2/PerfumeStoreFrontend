import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/data/index";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 transform ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image + Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-pink-600" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center text-center px-6">
              <div className="container mx-auto space-y-6" data-aos="fade-up">
                <h1 className="text-4xl p-4 sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-500 via-yellow-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg">
                  {slide.title}
                </h1>

                <h2 className="text-lg sm:text-2xl lg:text-3xl text-yellow-500 font-semibold tracking-wide drop-shadow-md">
                  {slide.subtitle}
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow">
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
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-pink-500/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-7 h-7 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-pink-500 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-7 h-7 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-500 ring-1 ring-black ring-offset-2 ring-offset-black/30"
                : "bg-white/40 hover:bg-pink-400/70"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-yellow-500 to-pink-500 animate-pulse" />
        <span className="text-sm font-medium bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent animate-bounce">
          Desliza para explorar
        </span>
      </div>
    </section>
  );
}
