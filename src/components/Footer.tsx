import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-b border-gray-100">
          <hr className="border-gray-200 mb-8" />
        </div>
        
        <div className="py-8">
          {/* Navigation Links */}
          <nav className="flex justify-center mb-8">
            <div className="flex flex-wrap justify-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297-.877-.808-1.297-1.958-1.297-3.256V8.449c0-1.297.42-2.448 1.297-3.326.878-.877 2.029-1.297 3.326-1.297h7.098c1.297 0 2.448.42 3.326 1.297.877.878 1.297 2.029 1.297 3.326v3.986c0 1.298-.42 2.448-1.297 3.256-.878.808-2.029 1.297-3.326 1.297H8.449zm7.718-8.904c-.177 0-.321-.144-.321-.321s.144-.321.321-.321.321.144.321.321-.144.321-.321.321zM12 14.738c-1.513 0-2.738-1.226-2.738-2.738S10.487 9.262 12 9.262s2.738 1.226 2.738 2.738S13.513 14.738 12 14.738z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2024 DECORAYETIONS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;