import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ROUTES } from "@/lib/constants";
import { Award, Target, Heart } from "lucide-react";

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

function FounderAvatar({ initials, color }: { initials: string; color: string }) {
  return (
    <div
      className="w-full h-56 flex items-center justify-center text-white text-6xl font-bold select-none"
      style={{ background: color }}
    >
      {initials}
    </div>
  );
}

const founders = [
  {
    initials: "BL",
    name: "Bhagya Lakshmi",
    role: "Founder",
    avatarColor: "linear-gradient(135deg, #0D1B2A 0%, #1e3a5f 100%)",
    desc: "Strategic partner ensuring smooth operations and driving the startup's vision with expertise in operational management and business development.",
  },
  {
    initials: "MP",
    name: "Mithun Padmanabhan",
    role: "Co-Founder",
    avatarColor: "linear-gradient(135deg, #1a2f46 0%, #0D1B2A 100%)",
    desc: "Business development expert with experience in mobility, e-commerce & travel sectors. Formerly with Ola and MakeMyTrip, driving growth and innovation.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#F4F6F9" }}>
      {/* Page Header */}
      <section className="pt-24 pb-20 px-4 text-center" style={{ backgroundColor: "#0D1B2A" }}>
        <FadeIn>
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: "#C0182A" }}
          >
            Our Story
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-5 text-white"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            About OmniKnight
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Born out of Bengaluru's busiest neighbourhoods — we're on a mission to
            make premium garment care accessible, affordable, and completely hassle-free.
          </p>
        </FadeIn>
      </section>

      {/* Mission / Values */}
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-7 h-7" style={{ color: "#C0182A" }} />,
              title: "Our Mission",
              text: "To deliver world-class garment care at your doorstep — express turnaround, eco-friendly process, and zero stress.",
            },
            {
              icon: <Heart className="w-7 h-7" style={{ color: "#C0182A" }} />,
              title: "Our Values",
              text: "Honesty in pricing, care in handling, and reliability in delivery. Every garment is treated like our own.",
            },
            {
              icon: <Award className="w-7 h-7" style={{ color: "#C0182A" }} />,
              title: "Our Promise",
              text: "If you're not satisfied, we'll re-clean it — free of charge. Your trust is our most valuable asset.",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#fff0f1" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#0D1B2A" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Meet The Founders */}
      <section className="container mx-auto px-4 pb-16 max-w-4xl">
        <FadeIn className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-3"
            style={{ color: "#C0182A" }}
          >
            Our Team
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: "#0D1B2A", fontFamily: "'Poppins', sans-serif" }}
          >
            Meet The Founders
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {founders.map((founder, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 cursor-default"
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 40px rgba(192,24,42,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "";
                }}
              >
                {/* Avatar / Photo */}
                <FounderAvatar initials={founder.initials} color={founder.avatarColor} />

                {/* Name Banner */}
                <div
                  className="px-6 py-4"
                  style={{
                    background: "linear-gradient(90deg, #0D1B2A 0%, #C0182A 100%)",
                  }}
                >
                  <p className="font-bold text-white text-lg leading-tight">
                    {founder.name}
                  </p>
                  <p className="text-white/70 text-sm mt-0.5">{founder.role}</p>
                </div>

                {/* Description */}
                <div className="px-6 py-6">
                  <p
                    className="text-sm leading-relaxed text-center"
                    style={{ color: "#374151" }}
                  >
                    {founder.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-6 text-center text-sm" style={{ color: "#9CA3AF" }}>
          <p>Founder photos coming soon.</p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <div
            className="rounded-2xl px-8 py-10 text-center text-white shadow-lg"
            style={{ backgroundColor: "#0D1B2A" }}
          >
            <p className="text-xl font-bold mb-2">Ready to experience OmniKnight?</p>
            <p className="text-white/60 mb-6 text-sm">
              Flat 20% off on your first order — use code FIRST20
            </p>
            <Link
              href={ROUTES.CONTACT}
              className="inline-block font-semibold px-8 py-3.5 rounded-xl text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#C0182A", color: "#fff" }}
            >
              Book a Pickup
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
