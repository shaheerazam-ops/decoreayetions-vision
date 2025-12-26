import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Quote, User, Trash2, Star, Camera } from "lucide-react";

/* =======================
   Types
======================= */

interface Testimonial {
  id: number;
  name: string;
  event: string;
  text: string;
  image?: string;
  rating: number;
  userAdded: boolean;
}

interface FormData {
  name: string;
  event: string;
  text: string;
  rating: number;
  image?: string;
}

/* =======================
   Component
======================= */

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding",
      text: "DECOREAYETIONS transformed our wedding into a fairy tale.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      userAdded: false,
    },
    {
      id: 2,
      name: "Jennifer L.",
      event: "Corporate Gala",
      text: "Professional, creative, and flawless execution.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      userAdded: false,
    },
    {
      id: 3,
      name: "The Johnson Family",
      event: "50th Anniversary",
      text: "They captured 50 years of love beautifully.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80",
      rating: 4,
      userAdded: false,
    },
    {
      id: 4,
      name: "Amanda Rodriguez",
      event: "Birthday Party",
      text: "From planning to execution, everything was seamless.",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      userAdded: false,
    },
    {
      id: 5,
      name: "Robert & Patricia",
      event: "Retirement Celebration",
      text: "Personalized touches made our celebration unforgettable.",
      image:
        "https://images.unsplash.com/photo-1511795409834-432f7b94aeb3?auto=format&fit=crop&w=400&q=80",
      rating: 4,
      userAdded: false,
    },
    {
      id: 6,
      name: "Maria Santos",
      event: "Baby Shower",
      text: "Beautiful, elegant, and stress-free planning.",
      image:
        "https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      userAdded: false,
    },
    {
      id: 7,
      name: "Ayaan Khan",
      event: "Engagement Ceremony",
      text: "Premium décor and amazing coordination.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      rating: 4,
      userAdded: false,
    },
    {
      id: 8,
      name: "Neha Sharma",
      event: "Bridal Shower",
      text: "Guests couldn’t stop taking pictures!",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
      rating: 5,
      userAdded: false,
    },
    {
      id: 9,
      name: "Daniel Brooks",
      event: "Product Launch",
      text: "Elegant setup and spot-on branding.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=400&q=80",
      rating: 3,
      userAdded: false,
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    event: "",
    text: "",
    rating: 0,
    image: undefined,
  });

  /* =======================
     Handlers
  ======================= */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFormData((prev) => ({
      ...prev,
      image: URL.createObjectURL(file),
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.event || !formData.text || formData.rating === 0) return;

    setTestimonials((prev) => [
      {
        id: Date.now(),
        name: formData.name,
        event: formData.event,
        text: formData.text,
        image: formData.image,
        rating: formData.rating,
        userAdded: true,
      },
      ...prev,
    ]);

    setFormData({ name: "", event: "", text: "", rating: 0, image: undefined });
  };

  const handleDelete = (id: number) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  /* =======================
     JSX
  ======================= */

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHero
        title="Kind Words"
        subtitle="Real experiences shared by our valued clients."
        imageUrl="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1600&q=80"
        icon={<Quote className="w-12 h-12 text-luxury animate-pulse" />}
      />

      {/* Review Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-border"
            />

            <input
              type="text"
              name="event"
              placeholder="Event Type"
              value={formData.event}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-border"
            />

            <textarea
              name="text"
              placeholder="Write your testimonial..."
              rows={4}
              value={formData.text}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-background border border-border"
            />

            {/* Star Rating */}
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer ${
                    star <= formData.rating
                      ? "text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                  fill={star <= formData.rating ? "currentColor" : "none"}
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, rating: star }))
                  }
                />
              ))}
            </div>

            {/* PFP Upload */}
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="w-16 h-16 rounded-full object-cover mx-auto ring-2 ring-black"
              />
            )}

            <input
              type="file"
              id="pfp-upload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <label
              htmlFor="pfp-upload"
              className="
                w-14 h-14 mx-auto
                flex items-center justify-center
                rounded-full
                border-2 border-black
                bg-white
                cursor-pointer
                transition-all duration-300
                hover:scale-110 hover:bg-black
                group
              "
            >
              <Camera className="w-6 h-6 text-black group-hover:text-white transition" />
            </label>

            <button
              type="submit"
              className="
                w-full py-3 rounded-xl
                bg-white text-black
                border-2 border-black
                font-medium
                transition-all duration-300
                hover:bg-black hover:text-white
                hover:shadow-lg
              "
            >
              Submit Review
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card/60 backdrop-blur border border-border/50 rounded-2xl p-8 shadow-lg relative"
            >
              {t.userAdded && (
                <button
                  onClick={() => handleDelete(t.id)}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-red-500"
                >
                  <Trash2 size={18} />
                </button>
              )}

              <div className="flex items-center gap-4 mb-4">
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.event}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}

                <div>
                  <h3 className="font-medium text-primary">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.event}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < t.rating
                            ? "text-yellow-400"
                            : "text-muted-foreground"
                        }
                        fill={i < t.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="italic text-foreground/90">"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
