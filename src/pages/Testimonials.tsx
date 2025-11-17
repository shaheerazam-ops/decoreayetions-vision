import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah & Michael",
      event: "Wedding",
      text: "DECOREAYETIONS transformed our wedding into a fairy tale. Every detail was perfect, and our guests are still talking about it!",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Jennifer L.",
      event: "Corporate Gala",
      text: "Professional, creative, and flawless execution. They exceeded all our expectations for our annual company gala.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "The Johnson Family",
      event: "50th Anniversary",
      text: "They captured 50 years of love beautifully. The celebration was intimate yet grand, exactly what we envisioned.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Amanda Rodriguez",
      event: "Birthday Party",
      text: "From planning to execution, everything was seamless. My daughter's quinceañera was absolutely magical!",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Robert & Patricia",
      event: "Retirement Celebration",
      text: "DECOREAYETIONS made our retirement party unforgettable. The attention to detail and personalized touches were amazing.",
      image: "https://images.unsplash.com/photo-1511795409834-432f7b94aeb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Maria Santos",
      event: "Baby Shower",
      text: "Beautiful, elegant, and stress-free planning. They made my baby shower a dream come true!",
      image: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        title="Kind Words"
        subtitle="Don’t just take our word for it—hear from the families, couples, and brands that trusted us with their most meaningful celebrations."
        imageUrl="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
        icon={<Quote className="w-12 h-12 text-luxury animate-pulse" />}
      />

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-elegant relative"
              >
                <div className="flex items-center mb-6 gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.event}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-luxury/60"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-medium text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;