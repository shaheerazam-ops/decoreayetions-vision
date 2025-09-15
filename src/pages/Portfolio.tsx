import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  Heart, 
  Cake, 
  Building2, 
  Crown,
  Sparkles,
  Gift,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";

// Framer Motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: ["easeOut"] } // TS-safe
  }
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Events", icon: <Sparkles size={16} /> },
    { id: "weddings", label: "Weddings", icon: <Heart size={16} /> },
    { id: "birthdays", label: "Birthdays", icon: <Cake size={16} /> },
    { id: "corporate", label: "Corporate", icon: <Building2 size={16} /> },
    { id: "bridal", label: "Bridal Showers", icon: <Crown size={16} /> },
    { id: "anniversaries", label: "Anniversaries", icon: <Gift size={16} /> },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Elegant Garden Wedding",
      category: "weddings",
      description: "A romantic outdoor celebration with cascading florals and fairy lights",
      image: "/api/placeholder/600/400",
      tags: ["Outdoor", "Romantic", "Garden", "200 guests"]
    },
    {
      id: 2,
      title: "Sweet 16 Glamour Party", 
      category: "birthdays",
      description: "A sophisticated birthday celebration with gold and pink themes",
      image: "/api/placeholder/600/400",
      tags: ["Teen Party", "Glamour", "Gold Theme", "50 guests"]
    },
    {
      id: 3,
      title: "Corporate Gala Dinner",
      category: "corporate", 
      description: "An upscale corporate event showcasing company achievements",
      image: "/api/placeholder/600/400",
      tags: ["Formal", "Awards", "Networking", "300 guests"]
    },
    {
      id: 4,
      title: "Boho Chic Bridal Shower",
      category: "bridal",
      description: "A whimsical bridal shower with pampas grass and earth tones",
      image: "/api/placeholder/600/400",
      tags: ["Boho", "Brunch", "Outdoor", "25 guests"]
    },
    {
      id: 5,
      title: "Golden Anniversary Celebration",
      category: "anniversaries",
      description: "50 years of love celebrated with family and friends",
      image: "/api/placeholder/600/400",
      tags: ["Anniversary", "Family", "Gold Theme", "80 guests"]
    },
    {
      id: 6,
      title: "Enchanted Forest Wedding",
      category: "weddings", 
      description: "A magical woodland ceremony with natural elements",
      image: "/api/placeholder/600/400",
      tags: ["Forest", "Natural", "Rustic", "150 guests"]
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Camera className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
            <h1 className="elegant-text text-5xl md:text-6xl lg:text-7xl text-primary mb-4 font-light">
              Our Portfolio
            </h1>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the magic we create through our carefully curated collection of unforgettable events and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 transition-elegant ${
                  activeFilter === filter.id 
                    ? "bg-luxury text-luxury-foreground shadow-luxury" 
                    : "border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground"
                }`}
              >
                {filter.icon}
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212,175,55,0.3)" }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-lg transition-transform duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-warm flex items-center justify-center text-muted-foreground">
                    <Camera size={48} />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="elegant-text text-xl text-primary mb-2 group-hover:text-luxury transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-luxury hover:text-luxury-foreground hover:bg-luxury group transition-all"
                    >
                      View Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Sparkles className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-xl text-muted-foreground">
                No events found for this category. Check back soon for more amazing work!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-text text-4xl md:text-5xl text-luxury-foreground mb-6">
            Ready to Create Your Own Masterpiece?
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life and create an event that will be remembered forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6"
            >
              <Link to="/contact">Start Planning Today</Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
