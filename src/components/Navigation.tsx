import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-soft border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="brand-title text-3xl lg:text-4xl text-primary transition-smooth hover:text-luxury">
              DECOREAYETIONS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`elegant-text transition-smooth hover:text-luxury ${
                  isActive(item.path) ? "text-luxury font-medium" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              asChild 
              variant="outline" 
              className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground transition-elegant"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Phone size={16} />
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-luxury"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 elegant-text transition-smooth hover:text-luxury ${
                    isActive(item.path) ? "text-luxury font-medium bg-accent/20" : "text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  asChild 
                  className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90"
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    <Phone size={16} />
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;