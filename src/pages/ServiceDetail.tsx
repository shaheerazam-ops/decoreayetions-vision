import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Heart, 
  Cake, 
  Building2, 
  Sparkles, 
  Gift,
  Crown,
  ArrowLeft,
  Star,
  Check,
  Calendar,
  Users,
  MapPin,
  Clock
} from "lucide-react";

interface ServiceData {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  packages: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  gallery: {
    url: string;
    title: string;
    description: string;
  }[];
}

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const servicesData: Record<string, ServiceData> = {
    weddings: {
      id: "weddings",
      icon: <Heart className="w-12 h-12 text-luxury" />,
      title: "Wedding Events",
      description: "Create your perfect day with our comprehensive wedding planning services, from intimate ceremonies to grand celebrations.",
      longDescription: "Your wedding day is one of the most important moments of your life, and we understand the significance of creating an event that perfectly reflects your love story. Our comprehensive wedding planning services cover every detail, from the initial consultation to the final send-off, ensuring your special day is flawless and unforgettable.",
      features: [
        "Complete venue selection and booking",
        "Custom floral design and arrangements",
        "Professional photography coordination",
        "Comprehensive catering management",
        "Entertainment and music coordination",
        "Wedding timeline planning",
        "Guest accommodation assistance",
        "Day-of coordination services"
      ],
      packages: [
        {
          name: "Essential Package",
          price: "$2,500",
          features: [
            "Venue selection assistance",
            "Basic floral arrangements",
            "Day-of coordination",
            "Timeline creation",
            "Vendor recommendations"
          ]
        },
        {
          name: "Premium Package",
          price: "$5,000",
          features: [
            "Full venue management",
            "Custom floral design",
            "Photography coordination",
            "Catering management",
            "Entertainment booking",
            "Guest management",
            "Rehearsal coordination"
          ],
          popular: true
        },
        {
          name: "Luxury Package",
          price: "$8,500",
          features: [
            "Complete wedding planning",
            "Luxury venue access",
            "Premium vendor network",
            "Personal wedding assistant",
            "Honeymoon planning",
            "Gift management",
            "Post-wedding cleanup"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Initial Consultation",
          description: "We meet to discuss your vision, budget, and preferences for your perfect wedding day."
        },
        {
          step: 2,
          title: "Planning & Design",
          description: "Our team creates a comprehensive plan including venue, vendors, and timeline."
        },
        {
          step: 3,
          title: "Coordination",
          description: "We manage all vendor communications and ensure everything runs smoothly."
        },
        {
          step: 4,
          title: "Your Perfect Day",
          description: "Relax and enjoy your wedding while we handle every detail behind the scenes."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Elegant Garden Wedding",
          description: "A romantic outdoor ceremony with cascading floral arrangements"
        },
        {
          url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
          title: "Grand Ballroom Reception",
          description: "Luxurious indoor celebration with crystal chandeliers and gold accents"
        },
        {
          url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          title: "Intimate Beach Ceremony",
          description: "Sunset beachside vows with natural coastal beauty"
        },
        {
          url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Rustic Barn Wedding",
          description: "Charming countryside celebration with vintage décor"
        },
        {
          url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
          title: "Modern City Wedding",
          description: "Contemporary urban ceremony with sleek architectural backdrop"
        },
        {
          url: "https://images.unsplash.com/photo-1470905093326-ad1eaa5c1b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Classic Cathedral Wedding",
          description: "Traditional ceremony with timeless elegance and grandeur"
        }
      ]
    },
    birthdays: {
      id: "birthdays",
      icon: <Cake className="w-12 h-12 text-luxury" />,
      title: "Birthday Celebrations",
      description: "Celebrate life's milestones with unforgettable birthday parties tailored to every age and style preference.",
      longDescription: "Every birthday deserves to be celebrated in style! Whether it's a child's magical themed party, a milestone adult celebration, or an elegant gathering for a special someone, we create personalized birthday experiences that bring joy and create lasting memories for everyone involved.",
      features: [
        "Custom theme development and design",
        "Complete decoration setup and styling",
        "Entertainment booking and coordination",
        "Custom cake and dessert arrangements",
        "Photography and videography services",
        "Party favor design and distribution",
        "Guest management and invitations",
        "Venue transformation services"
      ],
      packages: [
        {
          name: "Fun Package",
          price: "$800",
          features: [
            "Basic theme decorations",
            "Standard entertainment",
            "Simple cake arrangement",
            "2-hour event coordination",
            "Basic party favors"
          ]
        },
        {
          name: "Celebration Package",
          price: "$1,500",
          features: [
            "Custom theme design",
            "Professional entertainment",
            "Designer cake selection",
            "4-hour event management",
            "Premium party favors",
            "Photography services"
          ],
          popular: true
        },
        {
          name: "Ultimate Package",
          price: "$2,800",
          features: [
            "Complete venue transformation",
            "Multi-tier entertainment",
            "Luxury dessert station",
            "Full-day coordination",
            "Custom party experiences",
            "Professional photo/video"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Birthday Vision",
          description: "We discuss the birthday person's interests and create a personalized celebration concept."
        },
        {
          step: 2,
          title: "Theme & Planning",
          description: "Our team designs the perfect theme and plans all entertainment and activities."
        },
        {
          step: 3,
          title: "Setup & Coordination",
          description: "We handle all setup, vendor coordination, and ensure the party runs smoothly."
        },
        {
          step: 4,
          title: "Celebration Time",
          description: "The birthday star and guests enjoy an unforgettable celebration!"
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Magical Princess Party",
          description: "Enchanting themed celebration with castle decorations and fairy tale magic"
        },
        {
          url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80",
          title: "Elegant Adult Milestone",
          description: "Sophisticated 50th birthday celebration with gold accents and luxury touches"
        },
        {
          url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Fun Kids Adventure Party",
          description: "Action-packed celebration with games, activities, and colorful decorations"
        },
        {
          url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Sweet 16 Celebration",
          description: "Stylish teen party with trendy decorations and Instagram-worthy setup"
        }
      ]
    },
    "bridal-showers": {
      id: "bridal-showers",
      icon: <Crown className="w-12 h-12 text-luxury" />,
      title: "Bridal Showers",
      description: "Honor the bride-to-be with elegant bridal shower celebrations that create lasting memories.",
      longDescription: "A bridal shower is a special pre-wedding celebration that honors the bride-to-be with her closest friends and family. We create elegant, personalized bridal shower experiences that reflect the bride's personality while providing a beautiful setting for creating lasting memories with loved ones.",
      features: [
        "Elegant venue selection and styling",
        "Custom theme development",
        "Brunch and refreshment coordination",
        "Beautiful gift display arrangements",
        "Games and activity planning",
        "Floral arrangements and centerpieces",
        "Professional photography services",
        "Personalized favor creation"
      ],
      packages: [
        {
          name: "Elegant Package",
          price: "$1,200",
          features: [
            "Venue styling",
            "Basic refreshments",
            "Simple decorations",
            "Game coordination",
            "Gift display setup"
          ]
        },
        {
          name: "Luxury Package",
          price: "$2,200",
          features: [
            "Premium venue styling",
            "Gourmet brunch menu",
            "Custom decorations",
            "Professional hosting",
            "Photography services",
            "Personalized favors"
          ],
          popular: true
        },
        {
          name: "Royal Package",
          price: "$3,500",
          features: [
            "Luxury venue transformation",
            "Multi-course dining",
            "Designer floral arrangements",
            "Personal event assistant",
            "Premium photography",
            "Custom gift experiences"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Bride's Preferences",
          description: "We learn about the bride's style, preferences, and vision for her special celebration."
        },
        {
          step: 2,
          title: "Event Design",
          description: "Our team creates an elegant theme and plans all details from menu to activities."
        },
        {
          step: 3,
          title: "Preparation",
          description: "We coordinate with all vendors and prepare the venue to perfection."
        },
        {
          step: 4,
          title: "Celebration",
          description: "The bride and her guests enjoy a beautiful, memorable bridal shower experience."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Elegant Brunch Setup",
          description: "Beautiful bridal shower with pastel colors and delicate floral arrangements"
        },
        {
          url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Garden Party Bridal Shower",
          description: "Outdoor celebration with romantic garden setting and vintage tea service"
        },
        {
          url: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
          title: "Luxury Spa Bridal Shower",
          description: "Pampering celebration with elegant decorations and wellness theme"
        },
        {
          url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Boho Chic Bridal Shower",
          description: "Trendy bohemian-style celebration with macrame and natural elements"
        }
      ]
    },
    corporate: {
      id: "corporate",
      icon: <Building2 className="w-12 h-12 text-luxury" />,
      title: "Corporate Events",
      description: "Elevate your business gatherings with professional event planning that impresses clients and motivates teams.",
      longDescription: "Professional corporate events require precision, attention to detail, and flawless execution. We specialize in creating impressive corporate gatherings that enhance your company's image, facilitate meaningful connections, and achieve your business objectives while providing exceptional experiences for all attendees.",
      features: [
        "Professional conference planning",
        "Team building activity coordination",
        "Product launch event management",
        "Awards ceremony planning",
        "Corporate retreat organization",
        "Networking event facilitation",
        "Audio/visual equipment coordination",
        "Corporate catering services"
      ],
      packages: [
        {
          name: "Business Package",
          price: "$3,000",
          features: [
            "Venue coordination",
            "Basic AV setup",
            "Standard catering",
            "Event timeline",
            "Professional hosting"
          ]
        },
        {
          name: "Executive Package",
          price: "$5,500",
          features: [
            "Premium venue access",
            "Advanced AV systems",
            "Gourmet catering options",
            "Professional photography",
            "Branded event materials",
            "VIP guest services"
          ],
          popular: true
        },
        {
          name: "Presidential Package",
          price: "$9,000",
          features: [
            "Luxury venue transformation",
            "State-of-the-art technology",
            "Multi-course dining",
            "Celebrity entertainment",
            "Personal event managers",
            "Complete brand integration"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Business Objectives",
          description: "We understand your corporate goals and design an event strategy to achieve them."
        },
        {
          step: 2,
          title: "Professional Planning",
          description: "Our team creates a comprehensive event plan with all professional requirements."
        },
        {
          step: 3,
          title: "Execution",
          description: "We manage all aspects of your corporate event with precision and professionalism."
        },
        {
          step: 4,
          title: "Success Delivery",
          description: "Your corporate event achieves its objectives and leaves a lasting positive impression."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          title: "Executive Conference",
          description: "Professional business meeting with state-of-the-art technology and elegant setup"
        },
        {
          url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Corporate Gala Dinner",
          description: "Luxurious awards ceremony with sophisticated lighting and premium service"
        },
        {
          url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Product Launch Event",
          description: "Modern launch presentation with branded displays and interactive elements"
        },
        {
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Team Building Retreat",
          description: "Engaging corporate retreat with activities and networking opportunities"
        }
      ]
    },
    anniversaries: {
      id: "anniversaries",
      icon: <Gift className="w-12 h-12 text-luxury" />,
      title: "Anniversary Celebrations",
      description: "Commemorate love and milestones with beautifully crafted anniversary celebrations that honor your journey.",
      longDescription: "Anniversary celebrations are about honoring love, commitment, and the beautiful journey couples have shared together. We create romantic and meaningful anniversary events that celebrate your unique love story, whether it's an intimate dinner for two or a grand celebration with family and friends.",
      features: [
        "Romantic setting creation",
        "Memory display and photo arrangements",
        "Renewal ceremony coordination",
        "Family gathering organization",
        "Custom menu development",
        "Anniversary gift coordination",
        "Professional photography services",
        "Personalized celebration elements"
      ],
      packages: [
        {
          name: "Romantic Package",
          price: "$1,500",
          features: [
            "Intimate venue setup",
            "Romantic decorations",
            "Private dining experience",
            "Memory photo display",
            "Anniversary favors"
          ]
        },
        {
          name: "Celebration Package",
          price: "$2,800",
          features: [
            "Family gathering coordination",
            "Professional venue styling",
            "Multi-course dinner",
            "Entertainment services",
            "Photography package",
            "Custom anniversary gifts"
          ],
          popular: true
        },
        {
          name: "Milestone Package",
          price: "$4,500",
          features: [
            "Grand celebration planning",
            "Luxury venue transformation",
            "Renewal ceremony",
            "Live entertainment",
            "Professional videography",
            "Complete guest services"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Love Story",
          description: "We learn about your journey together and what makes your relationship special."
        },
        {
          step: 2,
          title: "Celebration Design",
          description: "Our team creates a personalized celebration that reflects your love story."
        },
        {
          step: 3,
          title: "Memory Creation",
          description: "We coordinate all details to create a meaningful and memorable experience."
        },
        {
          step: 4,
          title: "Anniversary Joy",
          description: "You and your loved ones celebrate this special milestone in perfect harmony."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Golden Anniversary Dinner",
          description: "Elegant 50th anniversary celebration with golden accents and romantic lighting"
        },
        {
          url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
          title: "Silver Anniversary Garden Party",
          description: "Beautiful 25th anniversary celebration in a romantic garden setting"
        },
        {
          url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Intimate Anniversary Dinner",
          description: "Private romantic dinner for two with personalized touches and memories"
        },
        {
          url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Family Anniversary Gathering",
          description: "Multi-generational celebration bringing family together for special milestone"
        }
      ]
    },
    "special-occasions": {
      id: "special-occasions",
      icon: <Sparkles className="w-12 h-12 text-luxury" />,
      title: "Special Occasions",
      description: "From graduations to retirement parties, we create memorable celebrations for all of life's special moments.",
      longDescription: "Life is full of special moments that deserve to be celebrated in style. Whether it's a graduation, retirement, promotion, housewarming, or any other milestone, we create personalized celebrations that honor these important life achievements and create lasting memories for you and your loved ones.",
      features: [
        "Custom theme development",
        "Venue transformation services",
        "Personalized entertainment booking",
        "Specialized catering solutions",
        "Achievement recognition displays",
        "Guest coordination services",
        "Photography and videography",
        "Milestone commemoration gifts"
      ],
      packages: [
        {
          name: "Celebration Package",
          price: "$1,000",
          features: [
            "Basic venue styling",
            "Theme decorations",
            "Standard catering",
            "Achievement displays",
            "Guest coordination"
          ]
        },
        {
          name: "Milestone Package",
          price: "$2,000",
          features: [
            "Custom venue design",
            "Personalized themes",
            "Premium catering",
            "Professional entertainment",
            "Photography services",
            "Commemorative gifts"
          ],
          popular: true
        },
        {
          name: "Legacy Package",
          price: "$3,500",
          features: [
            "Complete venue transformation",
            "Multi-themed celebrations",
            "Gourmet dining options",
            "Live entertainment",
            "Professional documentation",
            "Personal celebration assistant"
          ]
        }
      ],
      process: [
        {
          step: 1,
          title: "Occasion Understanding",
          description: "We learn about the special milestone and what makes this achievement meaningful."
        },
        {
          step: 2,
          title: "Celebration Planning",
          description: "Our team creates a personalized celebration plan that honors the occasion."
        },
        {
          step: 3,
          title: "Event Coordination",
          description: "We manage all details to ensure a smooth and memorable celebration."
        },
        {
          step: 4,
          title: "Special Moment",
          description: "The guest of honor and attendees enjoy a perfectly orchestrated celebration."
        }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Graduation Celebration",
          description: "Proud graduation party with academic theme and achievement recognition"
        },
        {
          url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          title: "Retirement Party",
          description: "Memorable farewell celebration honoring years of dedicated service"
        },
        {
          url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          title: "Housewarming Party",
          description: "Welcoming celebration for new home with cozy and inviting atmosphere"
        },
        {
          url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
          title: "Promotion Celebration",
          description: "Success celebration with professional elegance and achievement focus"
        }
      ]
    }
  };

  const serviceData = serviceId ? servicesData[serviceId] : null;

  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-in slide-in-from-top-8 duration-1000 ease-out">
            <div className="flex justify-center mb-6 animate-in zoom-in duration-800 delay-200 animate-float">
              {serviceData.icon}
            </div>
            <h1 className="elegant-text text-4xl md:text-5xl lg:text-6xl text-primary mb-4 font-light animate-in slide-in-from-left-6 duration-1000 delay-400">
              {serviceData.title}
            </h1>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6 animate-in fade-in duration-800 delay-600"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in slide-in-from-right-6 duration-1000 delay-800">
              {serviceData.description}
            </p>
          </div>
          
          <div className="flex justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-1000 ease-out">
            <Button asChild className="bg-luxury text-luxury-foreground hover:bg-luxury/90 transition-spring button-press">
              <Link to="/services" className="flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in slide-in-from-left-6 duration-700 delay-500">
              <h2 className="elegant-text text-3xl md:text-4xl text-primary mb-6">
                About This Service
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {serviceData.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-card rounded-lg border border-border/50 card-hover">
                  <Calendar className="w-6 h-6 text-luxury mx-auto mb-2" />
                  <div className="text-sm font-medium">Flexible Scheduling</div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border/50 card-hover">
                  <Users className="w-6 h-6 text-luxury mx-auto mb-2" />
                  <div className="text-sm font-medium">Expert Team</div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border/50 card-hover">
                  <MapPin className="w-6 h-6 text-luxury mx-auto mb-2" />
                  <div className="text-sm font-medium">Any Location</div>
                </div>
                <div className="p-4 bg-card rounded-lg border border-border/50 card-hover">
                  <Clock className="w-6 h-6 text-luxury mx-auto mb-2" />
                  <div className="text-sm font-medium">Full Support</div>
                </div>
              </div>
            </div>
            
            <div className="animate-in slide-in-from-right-6 duration-700 delay-700">
              <Card className="border-border/50 shadow-luxury card-hover">
                <CardHeader>
                  <CardTitle className="elegant-text text-2xl text-primary">
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {serviceData.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-in slide-in-from-right-4 duration-500"
                        style={{ animationDelay: `${800 + index * 100}ms` }}
                      >
                        <Check className="w-5 h-5 text-luxury mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in slide-in-from-top-6 duration-700">
            <h2 className="elegant-text text-3xl md:text-4xl text-primary mb-4">
              Our Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See examples of our {serviceData.title.toLowerCase()} that we've created for our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.gallery.map((photo, index) => (
              <Card 
                key={index}
                className="group overflow-hidden border-border/50 hover:border-luxury/30 card-hover gpu-accelerate animate-in slide-in-from-bottom-8 duration-700 cursor-pointer image-hover"
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-spring"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-spring opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-white/90 text-sm">{photo.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="elegant-text text-xl text-primary group-hover:text-luxury transition-smooth">
                      {photo.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>Professional Photography</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-luxury text-luxury" />
                        <Star className="w-3 h-3 fill-luxury text-luxury" />
                        <Star className="w-3 h-3 fill-luxury text-luxury" />
                        <Star className="w-3 h-3 fill-luxury text-luxury" />
                        <Star className="w-3 h-3 fill-luxury text-luxury" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-in slide-in-from-bottom-6 duration-700 delay-500">
            <p className="text-muted-foreground mb-6">
              Want to see more of our work?
            </p>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-luxury text-luxury hover:bg-luxury hover:text-luxury-foreground transition-spring button-press hover-lift"
            >
              <Link to="/portfolio">
                View Full Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in slide-in-from-top-6 duration-700">
            <h2 className="elegant-text text-3xl md:text-4xl text-primary mb-4">
              Service Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your needs and budget
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceData.packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative transition-spring card-hover animate-in slide-in-from-bottom-6 duration-700 ${
                  pkg.popular 
                    ? 'border-luxury shadow-lg scale-105' 
                    : 'border-border/50 hover:border-luxury/30'
                }`}
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-enhanced-pulse">
                    <div className="bg-luxury text-luxury-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="elegant-text text-xl text-primary">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-luxury">{pkg.price}</div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-luxury mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild 
                    className={`w-full transition-spring button-press hover-lift ${
                      pkg.popular
                        ? 'bg-luxury text-luxury-foreground hover:bg-luxury/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <Link to="/contact" state={{ service: serviceData.title, package: pkg.name }}>
                      Choose Package
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in slide-in-from-top-6 duration-700">
            <h2 className="elegant-text text-3xl md:text-4xl text-primary mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we bring your vision to life through our proven process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((step, index) => (
              <Card 
                key={index} 
                className="text-center border-border/50 hover:border-luxury/30 transition-spring card-hover animate-in slide-in-from-bottom-6 duration-700"
                style={{ animationDelay: `${300 + index * 150}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury text-luxury-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold animate-enhanced-pulse">
                    {step.step}
                  </div>
                  <CardTitle className="elegant-text text-lg text-primary">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-luxury">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in slide-in-from-bottom-6 duration-700">
          <Star className="w-12 h-12 text-luxury-foreground mx-auto mb-6 animate-enhanced-pulse" />
          <h2 className="elegant-text text-3xl md:text-4xl text-luxury-foreground mb-6">
            Ready to Plan Your {serviceData.title}?
          </h2>
          <p className="text-xl text-luxury-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable experience that exceeds your expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant text-lg px-8 py-6 transition-spring button-press hover-lift"
            >
              <Link to="/contact" state={{ service: serviceData.title }}>
                Get Free Consultation
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline" 
              size="lg"
              className="border-background text-background hover:bg-background hover:text-primary text-lg px-8 py-6 transition-spring button-press hover-lift"
            >
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;