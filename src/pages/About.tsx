import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Award, 
  Heart, 
  Sparkles,
  Clock,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "500+", label: "Events Planned", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Couples", icon: <Heart className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        <img 
          src="https://i.pinimg.com/1200x/00/f9/66/00f966818e57e027a90f1419730c02e3.jpg" 
          alt="About Us Hero" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <Users className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
          <h1 className="elegant-text text-5xl md:text-6xl lg:text-7xl mb-4 font-light">
            About Us
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-luxury via-yellow-400 to-luxury rounded-full mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Creating extraordinary moments through passionate planning and exquisite design
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light elegant-text">Our Story</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Founded with a vision to transform ordinary events into extraordinary experiences, 
              our team brings together creativity, precision, and passion. 
              We believe that every celebration deserves to be unique, elegant, and truly memorable.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              From intimate gatherings to grand celebrations, we approach each event with fresh 
              ideas and meticulous attention to detail. Our mission is to create timeless memories 
              that reflect your story and style.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.pinimg.com/1200x/37/d5/7b/37d57b6389eff35449ededf93654f388.jpg" 
              alt="Event 1" 
              className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl" 
            />
            <img 
              src="https://i.pinimg.com/1200x/00/f9/66/00f966818e57e027a90f1419730c02e3.jpg" 
              alt="Event 2" 
              className="rounded-lg shadow-lg mt-8 transform transition duration-500 hover:scale-105 hover:shadow-xl" 
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-background rounded-xl shadow-md transform transition duration-500 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 text-luxury">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <motion.section 
        className="py-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Sparkles className="w-12 h-12 text-luxury mx-auto mb-6 animate-spin-slow" />
        <h2 className="text-3xl md:text-4xl font-light elegant-text mb-6">
          Ready to Begin Your Journey?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Let’s create a celebration that reflects your love story and leaves lasting memories.
        </p>
        <Link to="/contact">
          <Button 
            size="lg" 
            className="bg-luxury text-black font-semibold hover:bg-luxury/90 transition-all hover:scale-105 hover:shadow-xl"
          >
            Start Planning 
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </motion.section>
    </div>
  );
};

export default About;

