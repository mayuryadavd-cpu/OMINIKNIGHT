import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, FlaskConical, Users, BadgeCheck, Clock } from "lucide-react";

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

export default function WhyUs() {
  const features = [
    {
      icon: <FlaskConical className="w-8 h-8" />,
      title: "Advanced Technology",
      desc: "We use professional European-grade machines that ensure deep cleaning while being incredibly gentle on fibers, extending the life of your garments."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Solvents",
      desc: "Our dry cleaning processes utilize non-toxic, eco-friendly solvents that are harsh on stains but safe for your skin and the environment."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Hygiene Standards",
      desc: "We follow strict WHO/CDC compliant sanitation protocols. Every machine is regularly sanitized, and clean garments are packaged hygienically."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Staff",
      desc: "Our team consists of trained professionals who understand fabric science. From silk to cashmere, they know exactly how to handle different textiles."
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Quality Guarantee",
      desc: "We offer a zero-shrinkage guarantee and multiple quality check gates before any garment is cleared for delivery back to you."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Express Turnaround",
      desc: "Time is valuable. We offer reliable standard turnarounds and a 24-hour express option for those urgent wardrobe needs."
    }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Hero */}
      <section className="relative py-24 bg-primary overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Why Choose OmniKnight</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We aren't just washing clothes; we're extending the life of your wardrobe with science, care, and precision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="container mx-auto px-4">
        <FadeIn className="bg-primary text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">The OmniKnight Promise</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              If you aren't completely satisfied with the quality of our cleaning or pressing, we will re-clean your item absolutely free of charge. Your satisfaction is our absolute priority.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-secondary flex flex-col items-center justify-center bg-primary-foreground/5 shadow-[0_0_30px_rgba(192,24,42,0.3)]">
              <BadgeCheck className="w-12 h-12 text-secondary mb-2" />
              <span className="font-bold tracking-widest text-sm uppercase">100% Quality</span>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
