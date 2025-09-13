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
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
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
              <div className="h-1 w-16 bg-luxury mb-6"></div>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a passion for creating unforgettable moments, DECOREAYETIONS began as a dream 
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
                className="mt-8 bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury"
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

      {/* Values Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
              Our Values
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide us in creating exceptional experiences for every client
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-luxury transition-elegant border-border/50 hover:border-luxury/30 bg-card/70 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                    {value.icon}
                  </div>
                  <h3 className="elegant-text text-xl text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
              Our Impact
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-text text-4xl md:text-5xl text-luxury-foreground mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to transform your special moment into an unforgettable experience? 
            We'd love to hear about your vision and help bring it to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/contact">
                Start Your Journey
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6"
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