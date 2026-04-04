import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { MapPin, Clock, Truck, Phone } from "lucide-react";

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

export default function LocateUs() {
  return (
    <div className="bg-gray-50 pb-24">
      {/* Page Header */}
      <section className="bg-primary text-white pt-24 pb-20 px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Locate Us</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Find our studio in Chamrajpet or check our free pickup & delivery coverage areas.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Map Column */}
          <FadeIn className="lg:col-span-2 bg-white p-4 rounded-2xl shadow-md border border-gray-100">
            <div className="w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden bg-gray-200">
              <iframe 
                src={COMPANY_INFO.mapUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="OmniKnight Location Map"
              ></iframe>
            </div>
          </FadeIn>

          {/* Info Column */}
          <div className="space-y-8">
            <FadeIn delay={0.1} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Studio Address</h3>
                  <p className="text-muted-foreground leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Business Hours</h3>
                  <p className="text-muted-foreground">{COMPANY_INFO.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Contact</h3>
                  <p className="text-muted-foreground">{COMPANY_INFO.phone}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-primary text-white p-8 rounded-2xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-8 h-8 text-secondary" />
                <h3 className="font-bold text-xl">Service Areas</h3>
              </div>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                We offer free pickup and delivery within a 10km radius of our studio. Key areas include:
              </p>
              <div className="flex flex-wrap gap-2">
                {COMPANY_INFO.coverage.map((area, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1.5 rounded-full text-sm border border-white/20">
                    {area}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}
