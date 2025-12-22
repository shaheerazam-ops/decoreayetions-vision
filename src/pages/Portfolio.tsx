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
import PageHero from "@/components/PageHero";

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
    transition: { duration: 0.8, ease: "easeOut" }
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
      image: "https://plus.unsplash.com/premium_photo-1674065309449-574be96378fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZ3N8ZW58MHx8MHx8fDA%3D",
      tags: ["Outdoor", "Romantic", "Garden", "200 guests"]
    },
    {
      id: 2,
      title: "Sweet 16 Glamour Party", 
      category: "birthdays",
      description: "A sophisticated birthday celebration with gold and pink themes",
      image: "https://i.pinimg.com/originals/b1/20/16/b120169c3d550f6a4e70263a819e05df.jpg",
      tags: ["Teen Party","Glamour","Gold Theme"]
    },
    {
      id: 3,
      title: "Corporate Gala Dinner",
      category: "corporate", 
      description: "An upscale corporate event showcasing company achievements",
      image: "https://i.pinimg.com/originals/b1/20/16/b120169c3d550f6a4e70263a819e05df.jpg",
      tags: ["Formal", "Awards", "Networking", "300 guests"]
    },
    {
      id: 4,
      title: "Boho Chic Bridal Shower",
      category: "bridal",
      description: "A whimsical bridal shower with pampas grass and earth tones",
      image: "https://i.pinimg.com/originals/b1/20/16/b120169c3d550f6a4e70263a819e05df.jpg",
      tags: ["Boho", "Brunch", "Outdoor", "25 guests"]
    },
    {
      id: 5,
      title: "Golden Anniversary Celebration",
      category: "anniversaries",
      description: "50 years of love celebrated with family and friends",
      image: "https://i.pinimg.com/originals/b1/20/16/b120169c3d550f6a4e70263a819e05df.jpg",
      tags: ["Anniversary", "Family", "Gold Theme"]
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

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter(item =>
          item.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        title="Our Portfolio"
        subtitle="Discover the magic we create through our carefully curated collection of unforgettable events and celebrations."
        imageUrl="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1600&q=80"
        icon={<Camera className="w-12 h-12 text-luxury animate-pulse" />}
      />

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
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
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
                      variant="outline" 
                      className="w-full justify-between text-black hover:text-luxury-foreground hover:bg-luxury group transition-all"
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
    </div>
  );
};

export default Portfolio;
