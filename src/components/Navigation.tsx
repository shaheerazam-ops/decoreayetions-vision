import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with social links */}
        <div className="flex justify-center py-2 border-b border-gray-50">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Facebook</a>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex flex-col items-center py-4 relative">
          {/* Logo centered */}
          <Link to="/" className="mb-4">
            <h1 className="brand-title text-4xl lg:text-5xl text-gray-900 hover:text-gray-700 transition-colors text-center">
              DECOREAYETIONS
            </h1>
          </Link>

          {/* Navigation menu centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                  isActive(item.path) ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-600 hover:text-gray-900"
                } pb-1`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute top-4 right-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-sm uppercase tracking-wider transition-colors ${
                    isActive(item.path) ? "text-gray-900 font-medium" : "text-gray-600 hover:text-gray-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;