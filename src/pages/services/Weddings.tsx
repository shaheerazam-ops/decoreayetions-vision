import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Camera, 
  Flower,
  Music,
  UtensilsCrossed,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Weddings = () => {
  const packages = [
    {
      name: "Essential Package",
      price: "Starting at $8,000",
      description: "Perfect for intimate weddings",
      features: [
        "Wedding day coordination",
        "Vendor recommendations",
        "Timeline creation",
        "Setup supervision",
        "Emergency kit"
      ]
    },
    {
      name: "Premium Package", 
      price: "Starting at $15,000",
      description: "Complete planning service",
      features: [
        "Full wedding planning",
        "Venue selection assistance",
        "Vendor coordination",
        "Design consultation",
        "Rehearsal coordination",
        "Day-of coordination"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "Starting at $25,000", 
      description: "White-glove experience",
      features: [
        "Unlimited planning sessions",
        "Custom design service",
        "Premium vendor network",
        "Guest concierge services",
        "Honeymoon planning",
        "Anniversary planning"
      ]
    }
  ];

  const services = [
    {
      icon: <MapPin className="w-8 h-8 text-luxury" />,
      title: "Venue Selection",
      description: "Find the perfect setting for your special day with our curated venue recommendations."
    },
    {
      icon: <Flower className="w-8 h-8 text-luxury" />,
      title: "Floral Design",
      description: "Custom floral arrangements that reflect your style and complement your theme."
    },
    {
      icon: <Camera className="w-8 h-8 text-luxury" />,
      title: "Photography Coordination",
      description: "Connect with talented photographers who will capture every precious moment."
    },
    {
      icon: <Music className="w-8 h-8 text-luxury" />,
      title: "Entertainment",
      description: "From live bands to DJs, we'll help you create the perfect soundtrack for your celebration."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-luxury" />,
      title: "Catering Management",
      description: "Delicious dining experiences tailored to your tastes and dietary requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Heart className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
            <h1 className="elegant-text text-5xl md:text-6xl lg:text-7xl text-primary mb-4 font-light">
              Wedding Planning
            </h1>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your wedding day should be as unique and beautiful as your love story. 
            Let us create an unforgettable celebration that reflects your vision and exceeds your dreams.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6 font-light">
              Wedding Services
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wedding planning services to make your special day perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-elegant border-border/50 hover:border-luxury/30 bg-card/50">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="elegant-text text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {services.slice(3).map((service, index) => (
              <Card key={index + 3} className="text-center hover:shadow-luxury transition-elegant border-border/50 hover:border-luxury/30 bg-card/50">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="elegant-text text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6 font-light">
              Wedding Packages
            </h2>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your dream wedding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative text-center hover:shadow-luxury transition-elegant ${
                  pkg.popular 
                    ? 'border-luxury shadow-luxury bg-luxury/5' 
                    : 'border-border/50 hover:border-luxury/30 bg-card/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-luxury text-luxury-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="elegant-text text-2xl text-primary mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="elegant-text text-3xl text-luxury font-light mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-luxury flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-luxury text-luxury-foreground hover:bg-luxury/90' 
                        : 'border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground'
                    }`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link to="/contact">
                      Choose Package
                    </Link>
                  </Button>
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
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's create a wedding that perfectly reflects your love story. 
            Schedule your complimentary consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/contact">
                Schedule Consultation
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/portfolio">
                View Wedding Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weddings;