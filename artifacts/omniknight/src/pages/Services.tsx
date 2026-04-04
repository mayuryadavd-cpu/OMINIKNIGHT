import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { COMPANY_INFO } from "@/lib/constants";
import {
  Shirt,
  Sparkles,
  Wind,
  Zap,
  Layers,
  Building2,
  ShoppingBag,
  Phone,
  MessageCircle,
} from "lucide-react";

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
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

type ServiceCard = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: { label: string; color: "crimson" | "navy" };
  pricingTab?: string;
};

const services: ServiceCard[] = [
  {
    icon: <Shirt className="w-7 h-7" />,
    title: "Wash & Fold",
    desc: "Perfectly washed, neatly folded — ready to wear.",
    pricingTab: "wash-fold",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Dry Cleaning",
    desc: "Premium solvent cleaning for delicate fabrics — silks, sarees, suits & more.",
    pricingTab: "dry-clean",
  },
  {
    icon: <Wind className="w-7 h-7" />,
    title: "Steam Ironing",
    desc: "Crisp, wrinkle-free finish every single time.",
    pricingTab: "steam-iron",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Express Service",
    desc: "Same-day & ultra-fast premium processing — because your time matters.",
    badge: { label: "Fast Track", color: "crimson" },
  },
  {
    icon: <Layers className="w-7 h-7" />,
    title: "Saree Pre-Pleating & Box Folding",
    desc: "Expert pleating and elegant box folding for a flawless traditional look.",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "B2B Laundry Solutions",
    desc: "Bulk laundry services for Hotels, PGs & Bus Operators.",
    badge: { label: "Bulk Orders", color: "navy" },
  },
  {
    icon: <ShoppingBag className="w-7 h-7" />,
    title: "Shoe Care",
    desc: "Specialized care for all types of footwear — sneakers, leather, formal & more.",
    pricingTab: "household",
  },
];

function ServiceCardItem({ service, index }: { service: ServiceCard; index: number }) {
  const badgeBg =
    service.badge?.color === "crimson"
      ? { backgroundColor: "#C0182A", color: "#fff" }
      : { backgroundColor: "#0D1B2A", color: "#fff" };

  return (
    <FadeIn delay={index * 0.07}>
      <div
        className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 transition-all duration-300 cursor-default group"
        style={{ borderTop: "3px solid transparent" }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderTopColor = "#C0182A";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 12px 30px rgba(0,0,0,0.10)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderTopColor = "transparent";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 1px 3px rgba(0,0,0,0.05)";
        }}
      >
        {/* Badge */}
        {service.badge && (
          <span
            className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
            style={badgeBg}
          >
            {service.badge.label}
          </span>
        )}

        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#fff0f1", color: "#C0182A" }}
        >
          {service.icon}
        </div>

        {/* Text */}
        <div>
          <h3
            className="font-bold text-base mb-1 leading-snug"
            style={{ color: "#0D1B2A" }}
          >
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
            {service.desc}
          </p>
        </div>

        {/* Link */}
        {service.pricingTab && (
          <Link
            href="/pricing"
            className="text-xs font-semibold mt-auto self-start flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: "#C0182A" }}
          >
            View Pricing
            <span>&rarr;</span>
          </Link>
        )}
      </div>
    </FadeIn>
  );
}

export default function Services() {
  return (
    <div className="pb-24 min-h-screen" style={{ backgroundColor: "#F4F6F9" }}>
      {/* Page Header */}
      <section
        className="pt-24 pb-16 px-4 text-center"
        style={{ backgroundColor: "#0D1B2A" }}
      >
        <FadeIn>
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: "#C0182A" }}
          >
            What We Offer
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-5"
            style={{ color: "#ffffff", fontFamily: "'Poppins', sans-serif" }}
          >
            Our Services
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Comprehensive garment care using European technology and eco-friendly products — 
            from everyday laundry to premium dry cleaning.
          </p>
        </FadeIn>
      </section>

      {/* Hero Banner */}
      <div className="container mx-auto px-4 -mt-4 mb-12">
        <FadeIn>
          <div
            className="rounded-2xl overflow-hidden shadow-lg flex items-center justify-between px-10 py-8 gap-6 relative"
            style={{
              background: "linear-gradient(120deg, #0D1B2A 60%, #1a2f46 100%)",
              minHeight: 160,
            }}
          >
            {/* Left: tagline */}
            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#C0182A" }}>
                Premium Garment Care
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Trusted by 5,000+ families<br />across Bengaluru
              </h2>
              <p className="text-white/60 mt-2 text-sm max-w-sm">
                European-grade machines · Eco-friendly solvents · Express 1-hr turnaround
              </p>
            </div>
            {/* Right: stat pills */}
            <div className="hidden sm:flex gap-4 relative z-10">
              {[
                { value: "15+", label: "Services" },
                { value: "5★", label: "Rated" },
                { value: "48hr", label: "Turnaround" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center rounded-xl px-5 py-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", minWidth: 90 }}
                >
                  <span className="text-2xl font-bold" style={{ color: "#C0182A" }}>{s.value}</span>
                  <span className="text-xs text-white/50 mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>
            {/* Decorative circles */}
            <div className="absolute right-0 top-0 w-48 h-48 rounded-full opacity-5" style={{ background: "#C0182A", transform: "translate(30%, -30%)" }} />
            <div className="absolute right-24 bottom-0 w-32 h-32 rounded-full opacity-5" style={{ background: "#ffffff", transform: "translateY(40%)" }} />
          </div>
        </FadeIn>
      </div>

      {/* Service Cards Grid */}
      <section className="container mx-auto px-4">
        {/* Row 1: 5 cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-5">
          {services.slice(0, 5).map((service, idx) => (
            <ServiceCardItem key={idx} service={service} index={idx} />
          ))}
        </div>
        {/* Row 2: 2 cards centered */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {services.slice(5).map((service, idx) => (
            <ServiceCardItem key={idx + 5} service={service} index={idx + 5} />
          ))}
        </div>
      </section>

      {/* CTA Strip */}
      <section className="container mx-auto px-4 mt-14">
        <FadeIn>
          <div
            className="rounded-2xl px-8 py-10 text-white text-center shadow-lg"
            style={{ backgroundColor: "#C0182A" }}
          >
            <p className="text-xl md:text-2xl font-bold mb-2">
              Not sure which service you need?
            </p>
            <p className="text-white/80 mb-8 text-base">
              Call us or WhatsApp — we'll guide you to the right solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 bg-white font-semibold px-7 py-3.5 rounded-xl text-base transition-opacity hover:opacity-90"
                style={{ color: "#C0182A" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white text-white font-semibold px-7 py-3.5 rounded-xl text-base transition-opacity hover:opacity-90"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
