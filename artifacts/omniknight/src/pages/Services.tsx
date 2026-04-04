import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { 
  Shirt, Droplets, Wind, Sparkles, Briefcase, ShoppingBag, 
  CheckCircle2, ArrowRight
} from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Services() {
  const services = [
    {
      id: "dry-cleaning",
      icon: <Shirt className="w-10 h-10" />,
      title: "Dry Cleaning",
      desc: "Premium solvent-based cleaning for your most delicate and expensive garments. We specialize in suits, designer wear, lehengas, and bridal outfits.",
      features: ["Eco-friendly solvents", "Stain removal experts", "Zero shrinkage guarantee", "Hand finished"]
    },
    {
      id: "laundry",
      icon: <Droplets className="w-10 h-10" />,
      title: "Premium Laundry",
      desc: "Everyday wash and fold or wash and iron services using industry-leading detergents that preserve fabric life and color.",
      features: ["Color sorting", "Fabric-specific wash cycles", "Sanitized packaging", "Scent options"]
    },
    {
      id: "steam-ironing",
      icon: <Wind className="w-10 h-10" />,
      title: "Steam Ironing",
      desc: "Professional steam pressing that gives your clothes a crisp, wrinkle-free finish without the shine marks caused by regular irons.",
      features: ["No shine marks", "Crisp creases", "Hanger or fold options", "Next day delivery"]
    },
    {
      id: "shoes",
      icon: <Sparkles className="w-10 h-10" />,
      title: "Shoe Cleaning & Restoration",
      desc: "Deep cleaning, deodorizing, and restoration for sneakers, formal shoes, and boots. We bring your favorite footwear back to life.",
      features: ["Deep sole cleaning", "Deodorizing", "Stain treatment", "Material specific care"]
    },
    {
      id: "bags-leather",
      icon: <Briefcase className="w-10 h-10" />,
      title: "Bag & Leather Care",
      desc: "Specialized cleaning and conditioning for leather jackets, luxury handbags, and accessories to maintain their suppleness.",
      features: ["Gentle cleaning", "Leather conditioning", "Color restoration", "Hardware polishing"]
    },
    {
      id: "carpet-rug",
      icon: <ShoppingBag className="w-10 h-10" />,
      title: "Carpet & Rug Cleaning",
      desc: "Industrial-grade extraction cleaning that removes deep-seated dust, allergens, and stains from your home textiles.",
      features: ["Deep extraction", "Odor removal", "Fringe detailing", "Allergen reduction"]
    },
    {
      id: "curtains",
      icon: <Wind className="w-10 h-10" />,
      title: "Curtain Cleaning",
      desc: "Thorough cleaning for drapes and curtains, removing accumulated dust and restoring their original vibrant look.",
      features: ["Pleat preservation", "Dust mite removal", "Shrinkage control", "Gentle handling"]
    },
    {
      id: "woolens",
      icon: <Shirt className="w-10 h-10" />,
      title: "Woolen & Blanket Care",
      desc: "Gentle wash cycles and specific detergents designed to clean heavy winter wear and blankets without causing matting or shrinkage.",
      features: ["Moth-proofing options", "Softness retention", "Large capacity washing", "Seasonal packing"]
    }
  ];

  return (
    <div className="bg-gray-50 pb-24">
      {/* Page Header */}
      <section className="bg-primary text-white pt-24 pb-20 px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Our Services</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive garment care solutions using European technology and eco-friendly products for exceptional results.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <FadeIn key={service.id} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-all duration-300">
                <div className="p-8 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">{service.desc}</p>
                  
                  <div className="grid grid-cols-2 gap-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 mt-auto">
                  <a href={`${COMPANY_INFO.whatsappLink}?text=Hi, I would like to get a quote for ${service.title} services.`} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full justify-between group/btn border-gray-200 hover:border-secondary hover:bg-secondary/5 hover:text-secondary">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
