import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guests: "",
      budget: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      subInfo: "Mon-Fri 9AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      info: "hello@decoreayetions.com",
      subInfo: "We respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      info: "123 Elegance Avenue",
      subInfo: "New York, NY 10001"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      info: "Mon-Fri: 9AM-6PM",
      subInfo: "Sat: 10AM-4PM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <MessageCircle className="w-12 h-12 text-luxury mx-auto mb-4 animate-pulse" />
            <h1 className="elegant-text text-5xl md:text-6xl lg:text-7xl text-primary mb-4 font-light">
              Contact Us
            </h1>
            <div className="h-1 w-24 bg-luxury mx-auto mb-6"></div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start planning your dream event? Get in touch with us and let's create 
            something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="elegant-text text-3xl text-primary mb-6">
                Tell Us About Your Event
              </h2>
              <div className="h-1 w-16 bg-luxury mb-8"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="border-border focus:border-luxury"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="border-border focus:border-luxury"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="border-border focus:border-luxury"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="eventType" className="text-foreground mb-2 block">
                      Event Type *
                    </Label>
                    <Select 
                      value={formData.eventType} 
                      onValueChange={(value) => handleChange("eventType", value)}
                    >
                      <SelectTrigger className="border-border focus:border-luxury">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="bridal-shower">Bridal Shower</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="anniversary">Anniversary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventDate" className="text-foreground mb-2 block">
                      Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange("eventDate", e.target.value)}
                      className="border-border focus:border-luxury"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="guests" className="text-foreground mb-2 block">
                      Number of Guests
                    </Label>
                    <Select 
                      value={formData.guests} 
                      onValueChange={(value) => handleChange("guests", value)}
                    >
                      <SelectTrigger className="border-border focus:border-luxury">
                        <SelectValue placeholder="Select guest count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-25">0-25 guests</SelectItem>
                        <SelectItem value="26-50">26-50 guests</SelectItem>
                        <SelectItem value="51-100">51-100 guests</SelectItem>
                        <SelectItem value="101-200">101-200 guests</SelectItem>
                        <SelectItem value="200+">200+ guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-foreground mb-2 block">
                    Budget Range
                  </Label>
                  <Select 
                    value={formData.budget} 
                    onValueChange={(value) => handleChange("budget", value)}
                  >
                    <SelectTrigger className="border-border focus:border-luxury">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50000+">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Tell Us About Your Vision *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Share your ideas, themes, or any specific requirements..."
                    rows={5}
                    required
                    className="border-border focus:border-luxury resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="elegant-text text-3xl text-primary mb-6">
                Get In Touch
              </h2>
              <div className="h-1 w-16 bg-luxury mb-8"></div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear from you! Whether you're planning an intimate gathering 
                or a grand celebration, our team is here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-border/50 hover:border-luxury/30 transition-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-luxury mt-1">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-primary mb-1">
                            {item.title}
                          </h3>
                          <p className="text-foreground mb-1">
                            {item.info}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {item.subInfo}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Consultation CTA */}
              <Card className="mt-8 bg-gradient-luxury border-luxury">
                <CardHeader>
                  <CardTitle className="text-luxury-foreground flex items-center gap-2">
                    <Calendar size={24} />
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-luxury-foreground/90 mb-4">
                    Schedule a complimentary 30-minute consultation to discuss your event vision.
                  </p>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="w-full bg-background text-primary hover:bg-background/90"
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-luxury mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-medium text-primary mb-2">
                How far in advance should I book?
              </h3>
              <p className="text-muted-foreground">
                We recommend booking 6-12 months in advance for weddings, 2-6 months for other events.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">
                Do you handle vendor coordination?
              </h3>
              <p className="text-muted-foreground">
                Yes! We coordinate with all vendors and handle timeline management on your event day.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">
                What's included in your packages?
              </h3>
              <p className="text-muted-foreground">
                Each package is customized based on your needs, from planning to day-of coordination.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-primary mb-2">
                Do you travel for events?
              </h3>
              <p className="text-muted-foreground">
                Yes! We plan events throughout the region and can discuss travel arrangements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;