import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Instagram, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Welcome to DECORAYETIONS!",
      subtitle: "A full service event planning & production company!",
    },
    {
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Elegant Weddings",
      subtitle: "Creating unforgettable moments for your special day",
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Corporate Events",
      subtitle: "Professional gatherings that leave lasting impressions",
    },
    {
      url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Special Celebrations",
      subtitle: "Birthdays, anniversaries, and milestone moments",
    },
    {
      url: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
      title: "Luxury Events",
      subtitle: "Sophisticated design and flawless execution",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slider */}
      <div className="relative w-full h-full pointer-events-none">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-transform transform hover:scale-110 pointer-events-auto"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 transition-transform transform hover:scale-110 pointer-events-auto"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex space-x-2 pointer-events-auto">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-12 h-1 transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
        <div className="text-center max-w-4xl mx-auto px-4 pointer-events-auto">
          <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
            {heroImages[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 transition-transform transform hover:scale-105"
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 transition-transform transform hover:scale-105"
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 justify-center mt-8">
            <a
              href="https://www.instagram.com/decorayetions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-transform transform hover:scale-110"
            >
              <Instagram className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://www.facebook.com/301138853074599"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <Facebook className="w-7 h-7 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
