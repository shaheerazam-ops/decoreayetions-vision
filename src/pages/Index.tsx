import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Image Slider */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 elegant-text">
            With over 15 years of combined experience, we aim to exceed client expectations by executing a flawless event within a practical budget.
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We are well versed in the latest trends and specialize in a range of events!
          </p>
        </div>
      </section>

      {/* Navigation Grid Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Button */}
            <Link to="/about" className="group relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1511795409834-432f7b94aeb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-light text-white tracking-wider">ABOUT</span>
              </div>
            </Link>

            {/* Gallery Button */}
            <Link to="/portfolio" className="group relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-light text-white tracking-wider">GALLERY</span>
              </div>
            </Link>

            {/* Contact Button */}
            <Link to="/contact" className="group relative aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1556125574-d7f27ec36a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Contact Us"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-light text-white tracking-wider">CONTACT</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;