import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import { 
  Heart, 
  Cake, 
  Building2, 
  Sparkles, 
  Gift,
  Crown,
  ArrowRight,
  Star
} from "lucide-react";
import { motion } from "framer-motion";  // ✅ Framer Motion import

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-luxury" />,
      title: "Weddings",
      description: "Create your perfect day with our comprehensive wedding planning services, from intimate ceremonies to grand celebrations.",
      features: ["Venue Selection", "Floral Design", "Photography Coordination", "Catering Management"],
      link: "/services/weddings"
    },
    {
      icon: <Cake className="w-8 h-8 text-luxury" />,
      title: "Birthday Parties",
      description: "Celebrate life's milestones with unforgettable birthday parties tailored to every age and style preference.",
      features: ["Theme Development", "Decoration Setup", "Entertainment Booking", "Custom Cakes"],
      link: "/services/birthdays"
    },
    {
      icon: <Crown className="w-8 h-8 text-luxury" />,
      title: "Bridal Showers",
      description: "Honor the bride-to-be with elegant bridal shower celebrations that create lasting memories.",
      features: ["Elegant Venues", "Custom Themes", "Brunch Coordination", "Gift Displays"],
      link: "/services/bridal-showers"
    },
    {
      icon: <Building2 className="w-8 h-8 text-luxury" />,
      title: "Corporate Events",
      description: "Elevate your business gatherings with professional event planning that impresses clients and motivates teams.",
      features: ["Conference Planning", "Team Building", "Product Launches", "Awards Ceremonies"],
      link: "/services/corporate"
    },
    {
      icon: <Gift className="w-8 h-8 text-luxury" />,
      title: "Anniversary Celebrations",
      description: "Commemorate love and milestones with beautifully crafted anniversary celebrations that honor your journey.",
      features: ["Romantic Settings", "Memory Displays", "Renewal Ceremonies", "Family Gatherings"],
      link: "/services/anniversaries"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-luxury" />,
      title: "Special Occasions",
      description: "From graduations to retirement parties, we create memorable celebrations for all of life's special moments.",
      features: ["Custom Themes", "Venue Transformation", "Entertainment", "Catering Solutions"],
      link: "/services/special-occasions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <PageHero
        title="Our Services"
        subtitle="From intimate gatherings to grand celebrations, we create extraordinary experiences that exceed expectations and create lasting memories."
        imageUrl="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1600&q=80"
        icon={<Star className="w-12 h-12 text-luxury animate-pulse" />}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="group card-hover border-border/50 hover:border-luxury/30 bg-card/50 backdrop-blur-sm transition-all hover:shadow-xl"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ease-out">
                      {service.icon}
                    </div>
                    <CardTitle className="elegant-text text-2xl text-primary group-hover:text-luxury transition-all duration-300 ease-out">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm text-foreground">
                          <div className="w-1.5 h-1.5 bg-luxury rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90 transition-transform hover:scale-105"
                    >
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="elegant-text text-4xl md:text-5xl text-luxury-foreground mb-6">
            Ready to Plan Your Dream Event?
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our expert planning and exquisite attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
