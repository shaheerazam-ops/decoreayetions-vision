import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-luxury" />,
      title: "Passion",
      description: "We pour our heart into every detail, treating each event as if it were our own special celebration."
    },
    {
      icon: <Star className="w-8 h-8 text-luxury" />,
      title: "Excellence", 
      description: "We strive for perfection in every aspect, from initial planning to final execution and cleanup."
    },
    {
      icon: <Users className="w-8 h-8 text-luxury" />,
      title: "Collaboration",
      description: "We work closely with our clients, ensuring their vision becomes reality through open communication."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-luxury" />,
      title: "Creativity",
      description: "We bring innovative ideas and fresh perspectives to create truly unique and memorable experiences."
    }
  ];

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
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
            <h1 className="elegant-text text-5xl md:text-6xl lg:text-7xl text-primary mb-4 font-light">
              About Us
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-luxury via-yellow-400 to-luxury rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Creating extraordinary moments through passionate planning and exquisite design
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-warm rounded-2xl shadow-elegant flex items-center justify-center">
                <Sparkles className="w-24 h-24 text-luxury/60" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
                Our Story
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-luxury via-yellow-400 to-luxury rounded-full mb-6"></div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for creating unforgettable moments, DECORAYETIONS began as a dream 
                  to transform ordinary celebrations into extraordinary experiences. We believe that every 
                  event tells a story, and we're here to help you tell yours beautifully.
                </p>
                
                <p>
                  Our journey started over a decade ago with a simple mission: to bring joy, elegance, 
                  and personal touches to life's most precious moments. From intimate gatherings to 
                  grand celebrations, we've had the privilege of being part of countless love stories, 
                  milestones, and achievements.
                </p>
                
                <p>
                  Today, we continue to push the boundaries of event planning and design, incorporating 
                  the latest trends while maintaining timeless elegance. Every event we create is a 
                  reflection of our clients' unique personalities and dreams.
                </p>
              </div>
              
              <Button 
                asChild
                size="lg" 
                className="mt-8 bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-lg transition-transform transform hover:scale-105"
              >
                <Link to="/portfolio" className="flex items-center gap-2">
                  See Our Work
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="h-1 w-40 bg-gradient-to-r from-luxury via-yellow-400 to-luxury mx-auto my-20 rounded-full shadow-lg shadow-yellow-400/20"></div>

      {/* Photo Collage Section */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
            Moments We Cherish
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-luxury via-yellow-400 to-luxury mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the beautiful events we’ve had the honor of creating.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="https://source.unsplash.com/600x600/?wedding,decor" alt="Event 1" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
          <img src="https://source.unsplash.com/600x600/?event,celebration" alt="Event 2" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
          <img src="https://source.unsplash.com/600x600/?flowers,luxury" alt="Event 3" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
          <img src="https://source.unsplash.com/600x600/?stage,lights" alt="Event 4" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
          <img src="https://source.unsplash.com/600x600/?banquet,party" alt="Event 5" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
          <img src="https://source.unsplash.com/600x600/?luxury,event" alt="Event 6" className="rounded-xl object-cover w-full h-full hover:scale-105 transition-transform shadow-md" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
              Our Impact
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-luxury via-yellow-400 to-luxury mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-luxury">
                  {stat.icon}
                </div>
                <div className="elegant-text text-4xl md:text-5xl text-primary font-light mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?luxury,wedding')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="elegant-text text-4xl md:text-5xl mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your special moment into an unforgettable experience? 
            We'd love to hear about your vision and help bring it to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-lg text-lg px-8 py-6 transition-transform transform hover:scale-105"
            >
              <Link to="/contact">
                Start Your Journey
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-transform transform hover:scale-105"
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
