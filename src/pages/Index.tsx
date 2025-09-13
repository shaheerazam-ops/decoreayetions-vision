import Navigation from "@/components/Navigation";
import Hero3D from "@/components/Hero3D";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Cake, 
  Building2, 
  Crown,
  Gift,
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Calendar,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <Heart className="w-6 h-6 text-luxury" />,
      title: "Weddings",
      description: "Unforgettable ceremonies and receptions",
    },
    {
      icon: <Cake className="w-6 h-6 text-luxury" />,
      title: "Birthday Parties", 
      description: "Celebrations for every milestone",
    },
    {
      icon: <Crown className="w-6 h-6 text-luxury" />,
      title: "Bridal Showers",
      description: "Elegant pre-wedding celebrations",
    },
    {
      icon: <Building2 className="w-6 h-6 text-luxury" />,
      title: "Corporate Events",
      description: "Professional gatherings that impress",
    },
    {
      icon: <Gift className="w-6 h-6 text-luxury" />,
      title: "Anniversaries",
      description: "Commemorating love and milestones",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-luxury" />,
      title: "Special Occasions",
      description: "Graduations, retirements, and more",
    }
  ];

  const features = [
    "Full-service event planning",
    "Custom design and decoration", 
    "Vendor coordination and management",
    "Day-of event coordination",
    "Budget planning and management",
    "Timeline and logistics planning"
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      text: "DECOREAYETIONS transformed our wedding into a fairy tale. Every detail was perfect, and our guests are still talking about it!",
      rating: 5
    },
    {
      name: "Jennifer L.",
      event: "Corporate Gala",
      text: "Professional, creative, and flawless execution. They exceeded all our expectations for our annual company gala.",
      rating: 5
    },
    {
      name: "The Johnson Family",
      event: "50th Anniversary",
      text: "They captured 50 years of love beautifully. The celebration was intimate yet grand, exactly what we envisioned.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with 3D */}
      <Hero3D />

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground px-4 py-2">
              Our Expertise
            </Badge>
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6 font-light">
              Creating Magical Moments
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From intimate celebrations to grand affairs, we specialize in bringing your vision to life 
              with impeccable attention to detail and sophisticated design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group text-center hover:shadow-luxury transition-elegant border-border/50 hover:border-luxury/30 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="elegant-text text-xl text-primary group-hover:text-luxury transition-smooth">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild
              size="lg" 
              className="bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury"
            >
              <Link to="/services" className="flex items-center gap-2">
                Explore All Services
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground px-4 py-2">
                Why Choose Us
              </Badge>
              <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6 font-light">
                Excellence in Every Detail
              </h2>
              <div className="h-1 w-16 bg-luxury mb-6"></div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over a decade of experience creating extraordinary events, we combine creative vision 
                with flawless execution to deliver celebrations that exceed expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-luxury flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-luxury text-luxury-foreground hover:bg-luxury/90"
                >
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground"
                >
                  <Link to="/portfolio">
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="text-center p-6 border-border/50 bg-card/70">
                  <Users className="w-8 h-8 text-luxury mx-auto mb-3" />
                  <div className="elegant-text text-2xl text-primary font-light">500+</div>
                  <div className="text-sm text-muted-foreground">Events Planned</div>
                </Card>
                
                <Card className="text-center p-6 border-border/50 bg-card/70">
                  <Award className="w-8 h-8 text-luxury mx-auto mb-3" />
                  <div className="elegant-text text-2xl text-primary font-light">98%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </Card>
              </div>
              
              <div className="space-y-6 pt-12">
                <Card className="text-center p-6 border-border/50 bg-card/70">
                  <Heart className="w-8 h-8 text-luxury mx-auto mb-3" />
                  <div className="elegant-text text-2xl text-primary font-light">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Couples</div>
                </Card>
                
                <Card className="text-center p-6 border-border/50 bg-card/70">
                  <Calendar className="w-8 h-8 text-luxury mx-auto mb-3" />
                  <div className="elegant-text text-2xl text-primary font-light">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground px-4 py-2">
              Client Stories
            </Badge>
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6 font-light">
              What Our Clients Say
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from the clients who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-luxury fill-luxury" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-medium text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-luxury">
                      {testimonial.event}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-text text-4xl md:text-5xl text-luxury-foreground mb-6 font-light">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's transform your special moment into an unforgettable experience. 
            Contact us today for a complimentary consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;