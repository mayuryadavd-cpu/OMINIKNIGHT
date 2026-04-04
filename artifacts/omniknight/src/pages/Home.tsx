import React, { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { 
  CheckCircle2, Star, Quote, ChevronRight, Droplets, 
  Shirt, Briefcase, ShoppingBag, Sparkles, Wind, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO, ROUTES } from "@/lib/constants";
import { Link } from "wouter";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AnimatedCounter = ({ end, suffix = "", prefix = "", label }: { end: number, suffix?: string, prefix?: string, label: string }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
        {prefix}{count}{suffix}
      </div>
      <div className="text-white/70 text-sm md:text-base font-medium tracking-wide uppercase text-center">
        {label}
      </div>
    </div>
  );
};

export default function Home() {
  const services = [
    { icon: <Shirt className="w-8 h-8" />, title: "Dry Cleaning", desc: "Premium care for delicate fabrics and suits" },
    { icon: <Droplets className="w-8 h-8" />, title: "Laundry", desc: "Everyday wash & fold or wash & iron" },
    { icon: <Wind className="w-8 h-8" />, title: "Steam Ironing", desc: "Crisp, professional wrinkle-free finish" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Shoe Cleaning", desc: "Deep cleaning and restoration for footwear" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Bag & Leather", desc: "Specialized care for leather goods" },
    { icon: <ShoppingBag className="w-8 h-8" />, title: "Carpet & Rug", desc: "Deep extraction cleaning for home textiles" },
    { icon: <Wind className="w-8 h-8" />, title: "Curtain Care", desc: "Dust removal and thorough washing" },
    { icon: <Shirt className="w-8 h-8" />, title: "Woolen & Blanket", desc: "Gentle cleaning for heavy winter wear" },
  ];

  const steps = [
    { title: "Schedule Pickup", desc: "Book via WhatsApp or call. We'll pick up from your doorstep.", number: "01" },
    { title: "We Clean", desc: "Expert sorting, stain treatment, and premium washing/dry cleaning.", number: "02" },
    { title: "Free Delivery", desc: "Fresh, crisp, and neatly packaged garments delivered back to you.", number: "03" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 via-primary to-primary opacity-80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                Serving Chamrajpet & surrounding areas
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6 font-serif">
                Bengaluru's Trusted <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-secondary">
                  Laundry & Dry Clean
                </span> Experts
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
                Premium garment care for busy urban professionals and families. Experience flawless cleaning with our complimentary express pickup and delivery service.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white font-semibold">
                  Book a Pickup
                </Button>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/5 hover:bg-white/10 text-white border-white/20">
                  Call Us Now
                </Button>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary relative border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedCounter end={5000} suffix="+" label="Happy Customers" />
            <AnimatedCounter end={15} suffix="+" label="Services Offered" />
            <AnimatedCounter end={3} label="Cities Served" />
            <AnimatedCounter end={5} suffix="+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">Comprehensive Care For Every Fabric</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/20 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{service.title}</h4>
                  <p className="text-muted-foreground leading-relaxed flex-1">{service.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link href={ROUTES.SERVICES}>
              <Button variant="outline" size="lg" className="group">
                View All Services 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeIn>
                <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Simple Process</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-6">How OmniKnight Works</h3>
                <p className="text-muted-foreground text-lg mb-10">
                  We've streamlined our process so you can spend less time doing laundry and more time doing what you love.
                </p>
              </FadeIn>
              
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <FadeIn key={idx} delay={idx * 0.15} className="flex gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold text-xl border border-primary/10">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <FadeIn delay={0.2} className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-3xl blur-3xl" />
                <img 
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop" 
                  alt="Laundry process" 
                  className="relative z-10 rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                />
                
                {/* Floating card */}
                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-gray-100 max-w-xs">
                  <div className="flex gap-4 items-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground">Quality Checked</div>
                      <div className="text-sm text-muted-foreground">Every single item</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Testimonials</h2>
            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-6">Loved by Bengaluru</h3>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rahul S.", role: "JP Nagar", text: "Exceptional service! They managed to get a tough stain out of my designer blazer. Pickup was right on time." },
              { name: "Priya M.", role: "Jayanagar", text: "The free delivery makes my life so much easier. The clothes come back smelling incredibly fresh and perfectly ironed." },
              { name: "Arvind K.", role: "Basavanagudi", text: "Best dry cleaners in South Bangalore. Very professional handling of my wife's expensive silk sarees." },
              { name: "Neha R.", role: "Chamrajpet", text: "Affordable, fast, and very reliable. I use their wash and fold service weekly and it's always perfect." }
            ].map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                <Quote className="text-secondary w-10 h-10 mb-6 opacity-50" />
                <p className="text-white/90 mb-8 leading-relaxed italic">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{review.name}</div>
                    <div className="text-white/50 text-sm">{review.role}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Teaser */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="container mx-auto max-w-4xl">
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2" style={{ color: "#C0182A" }}>
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#0D1B2A", fontFamily: "'Poppins', sans-serif" }}>
              Meet The Founders
            </h2>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              The people behind OmniKnight's mission to redefine laundry in Bengaluru.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                initials: "BL",
                name: "Bhagya Lakshmi",
                role: "Founder",
                bg: "linear-gradient(135deg, #0D1B2A 0%, #1e3a5f 100%)",
                desc: "Operational expert driving OmniKnight's vision and business strategy.",
              },
              {
                initials: "MP",
                name: "Mithun Padmanabhan",
                role: "Co-Founder",
                bg: "linear-gradient(135deg, #1a2f46 0%, #0D1B2A 100%)",
                desc: "Growth specialist with Ola and MakeMyTrip experience fuelling our expansion.",
              },
            ].map((f, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 32px rgba(192,24,42,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "";
                  }}
                >
                  <div className="h-36 flex items-center justify-center text-white text-5xl font-bold" style={{ background: f.bg }}>
                    {f.initials}
                  </div>
                  <div className="px-5 py-3" style={{ background: "linear-gradient(90deg, #0D1B2A 0%, #C0182A 100%)" }}>
                    <p className="font-bold text-white">{f.name}</p>
                    <p className="text-white/70 text-xs">{f.role}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-center" style={{ color: "#374151" }}>{f.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link href={ROUTES.ABOUT} className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: "#C0182A" }}>
              Learn More About Us
              <ChevronRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="bg-primary rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif relative z-10">
              Ready for fresh, crisp clothes?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Book your pickup in 60 seconds. Flat 20% off on your first order with code FIRST20.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-secondary hover:bg-secondary/90 text-white font-semibold">
                  Book via WhatsApp
                </Button>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border-white/20">
                  Call {COMPANY_INFO.phone}
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
