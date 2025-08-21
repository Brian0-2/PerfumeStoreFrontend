import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '@/components/home/Header';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import BrandsSection from '@/components/home/BrandsSection';
import HeroCarousel from '@/components/home/HeroCarousel';
import FeaturesSection from '@/components/home/FeaturesSection';
import Footer from '@/components/home/Footer';
import ContactSection from '@/components/home/ContactSection';

export default function HomePage() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <BrandsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <ContactSection /> 
      </main>
      <Footer />
    </div>
  );
};