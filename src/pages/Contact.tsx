import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Star,
  Loader2,
  LogIn,
  LogOut,
  ShieldCheck,
  UserPlus,
  CircleUserRound
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import { placeOrder, sendOrderConfirmation } from "@/lib/orders";

const Contact = () => {
  const { toast } = useToast();
  const { user, initialLoading } = useSupabaseAuth();
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [authForm, setAuthForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const openAuthDialog = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthDialogOpen(true);
  };

  const handleConsultationClick = () => {
    if (initialLoading) return;

    if (!user) {
      toast({
        title: "Create your account",
        description: "Sign up to book a free consultation.",
      });
      openAuthDialog("signup");
      return;
    }

    toast({
      title: "Consultation requested",
      description: "You're signed in. We’ll contact you in 1–2 business days.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast({
        title: "Login required",
        description: "Please log in or create an account before sending your request.",
        variant: "destructive",
      });
      setIsAuthDialogOpen(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const newOrder = await placeOrder({
        user_id: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        event_type: formData.eventType || "unspecified",
        event_date: formData.eventDate || null,
        guests: formData.guests || null,
        budget: formData.budget || null,
        message: formData.message,
      });

      if (user.email) {
        await sendOrderConfirmation(newOrder.id, user.email);
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });

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
    } catch (error: any) {
      console.error("Failed to save order", error);
      toast({
        title: "Something went wrong",
        description: error.message ?? "We could not save your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);

    const authPayload = {
      email: authForm.email,
      password: authForm.password,
    };

    const emailRedirectTo =
      typeof window !== "undefined" ? `${window.location.origin}/auth/callback` : undefined;

    const { error } =
      authMode === "login"
        ? await supabase.auth.signInWithPassword(authPayload)
        : await supabase.auth.signUp({
            ...authPayload,
            options: {
              emailRedirectTo,
              data: authForm.fullName ? { full_name: authForm.fullName } : {},
            },
          });

    setAuthLoading(false);

    if (error) {
      toast({
        title: authMode === "login" ? "Unable to log in" : "Unable to create account",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: authMode === "login" ? "Welcome back!" : "Account created",
      description:
        authMode === "login"
          ? "You can now submit your event request."
          : "Please verify your email (if required) and then submit your request.",
    });

    setAuthForm({ fullName: "", email: "", password: "" });
    setIsAuthDialogOpen(false);
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: "Unable to sign out",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Signed out",
      description: "You have been signed out of your account.",
    });
  };

  const isLoggedIn = Boolean(user);

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

  const supportHighlights = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Secure Client Portal",
      description: "Bank-grade authentication keeps your personal celebration details protected.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24-Hour Response",
      description: "Expect a personalized reply within one business day from our lead planner.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Tailored Concepts",
      description: "Every proposal is built from scratch around your vision, budget, and guest experience.",
    },
  ];

  const planningSteps = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "1. Discovery Call",
      description: "We listen to your story, goals, and inspiration to understand the celebration you’re envisioning.",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "2. Tailored Proposal",
      description: "Receive a mood board, timeline, and transparent budget outline curated by your dedicated planner.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "3. White-Glove Execution",
      description: "Relax while we manage vendors, logistics, and styling to deliver a flawless event experience.",
    },
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
            Ready to start planning your dream event? Share your ideas and we’ll craft a bespoke experience
            with white-glove service from the very first message.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button
              size="lg"
              className="bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury px-8"
              onClick={() => openAuthDialog("login")}
            >
              Client Login
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90 shadow-elegant px-8"
              onClick={() => openAuthDialog("signup")}
            >
              Create Account
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-luxury text-primary hover:bg-background/80 px-8"
              asChild
            >
              <a href="#event-request-form">Plan an Event</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {supportHighlights.map((item, index) => (
            <Card key={index} className="border-none shadow-lg bg-background/80 backdrop-blur">
              <CardContent className="p-6 flex gap-4 items-start">
                <div className="text-luxury p-3 bg-luxury/10 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
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
              <div className="space-y-8">
                <Card className="border-luxury/40 bg-background/80 shadow-luxury/20 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="rounded-full bg-luxury/15 p-3 text-luxury">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary">
                        {isLoggedIn ? "You're signed in" : "Log in to place your order"}
                      </CardTitle>
                      <CardDescription>
                        {isLoggedIn
                          ? "We’ll attach your request to your account so you can track it."
                          : "Create an account or log in first so we can save your order."}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {initialLoading ? (
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Checking your session...
                      </div>
                    ) : isLoggedIn ? (
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <CircleUserRound className="h-10 w-10 text-luxury" />
                          <div>
                            <p className="font-medium text-primary">{user?.email}</p>
                            <p className="text-sm text-muted-foreground">
                              You're ready to submit your event details.
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" onClick={handleSignOut}>
                          <LogOut className="mr-2 h-4 w-4" />
                          Sign out
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          Access our secure portal to save your event brief, track messages, and manage proposals.
                        </p>
                        <Button
                          type="button"
                          size="lg"
                          className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury"
                          onClick={() => setIsAuthDialogOpen(true)}
                        >
                          Launch Client Portal
                        </Button>
                        <p className="text-center text-sm text-muted-foreground">
                          Need an account? Choose “Create account” inside the portal and you’ll be up and running in seconds.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              
              <Card
                id="event-request-form"
                className="border-luxury/30 bg-background/90 shadow-2xl backdrop-blur"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Event Request Brief</CardTitle>
                  <CardDescription>
                    Share a few details and we’ll design a bespoke concept tailored to your celebration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                      className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury disabled:cursor-not-allowed"
                      disabled={!isLoggedIn || isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 size={20} className="mr-2 animate-spin" />
                      ) : (
                        <Send size={20} className="mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground">
                      {isLoggedIn
                        ? "Your event request will be saved securely in your account."
                        : "Please log in above to enable the Send Message button."}
                    </p>
                  </form>
                </CardContent>
              </Card>
              </div>
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
                    onClick={handleConsultationClick}
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="elegant-text text-4xl md:text-5xl text-primary mb-4">How We Partner With You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            A proven, concierge-style process keeps every detail organized—from first hello to final toast.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {planningSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-xl bg-background/90 backdrop-blur">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-luxury/15 text-luxury flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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

      <Dialog
        open={isAuthDialogOpen}
        onOpenChange={(open) => {
          setIsAuthDialogOpen(open);
          if (!open) {
            setAuthMode("login");
            setAuthForm({ fullName: "", email: "", password: "" });
          }
        }}
      >
        <DialogContent className="sm:max-w-md">
          <form onSubmit={handleAuthSubmit} className="space-y-5">
            <DialogHeader>
              <DialogTitle className="text-2xl text-primary">
                {authMode === "login" ? "Welcome Back" : "Create Your Account"}
              </DialogTitle>
              <DialogDescription>
                {authMode === "login"
                  ? "Enter your credentials to access saved requests and proposals."
                  : "Create a secure portal to manage your events and receive proposals."}
                <button
                  type="button"
                  className="ml-1 font-medium text-luxury hover:underline"
                  onClick={() => setAuthMode((prev) => (prev === "login" ? "signup" : "login"))}
                >
                  {authMode === "login" ? "Need an account?" : "Already registered?"}
                </button>
              </DialogDescription>
            </DialogHeader>

            {authMode === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="authFullName">Full Name</Label>
                <Input
                  id="authFullName"
                  value={authForm.fullName}
                  onChange={(e) =>
                    setAuthForm((prev) => ({
                      ...prev,
                      fullName: e.target.value,
                    }))
                  }
                  placeholder="Your name"
                  minLength={2}
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="authEmail">Email</Label>
              <Input
                id="authEmail"
                type="email"
                value={authForm.email}
                onChange={(e) =>
                  setAuthForm((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="authPassword">Password</Label>
              <Input
                id="authPassword"
                type="password"
                value={authForm.password}
                onChange={(e) =>
                  setAuthForm((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                placeholder="Enter a secure password"
                minLength={6}
                required
              />
            </div>

            <DialogFooter className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full bg-luxury text-luxury-foreground hover:bg-luxury/90 shadow-luxury"
                disabled={authLoading}
              >
                {authLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : authMode === "login" ? (
                  <LogIn className="mr-2 h-4 w-4" />
                ) : (
                  <UserPlus className="mr-2 h-4 w-4" />
                )}
                {authMode === "login" ? "Log In" : "Create Account"}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By continuing, you agree to our terms and confirm you’re authorized to share these event details.
              </p>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Contact;