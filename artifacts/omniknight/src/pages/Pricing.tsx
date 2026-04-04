import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Tag } from "lucide-react";

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

export default function Pricing() {
  const laundryPricing = [
    { item: "Shirt", price: "₹40 - ₹60", time: "24 hrs" },
    { item: "T-Shirt", price: "₹35 - ₹50", time: "24 hrs" },
    { item: "Trousers / Jeans", price: "₹50 - ₹70", time: "24 hrs" },
    { item: "Kurta (Basic)", price: "₹40 - ₹60", time: "24 hrs" },
    { item: "Saree (Cotton/Basic)", price: "₹80 - ₹120", time: "24 hrs" },
    { item: "Shorts / Skirts", price: "₹35 - ₹50", time: "24 hrs" },
    { item: "Undergarments", price: "₹20 - ₹30", time: "24 hrs" },
  ];

  const dryCleanPricing = [
    { item: "2-Piece Suit", price: "₹300 - ₹500", time: "48 hrs" },
    { item: "Blazer / Jacket", price: "₹200 - ₹350", time: "48 hrs" },
    { item: "Sherwani", price: "₹400 - ₹700", time: "48 hrs" },
    { item: "Heavy Saree", price: "₹250 - ₹450", time: "48 hrs" },
    { item: "Lehenga (Basic)", price: "₹500 - ₹1200", time: "72 hrs" },
    { item: "Bridal Wear", price: "₹800 - ₹2000+", time: "72 hrs" },
    { item: "Designer Dress", price: "₹300 - ₹800", time: "48 hrs" },
  ];

  const specialtyPricing = [
    { item: "Carpet / Rug", price: "₹5 - ₹8 / sq ft", time: "72 hrs" },
    { item: "Curtains", price: "₹60 - ₹100 / panel", time: "48 hrs" },
    { item: "Sneakers / Shoes", price: "₹150 - ₹350", time: "48 hrs" },
    { item: "Leather Jacket", price: "₹400 - ₹800", time: "72 hrs" },
    { item: "Handbag", price: "₹200 - ₹500", time: "48 hrs" },
    { item: "Single Blanket", price: "₹150 - ₹250", time: "48 hrs" },
    { item: "Double Blanket / Quilt", price: "₹250 - ₹400", time: "48 hrs" },
  ];

  const renderTable = (data: typeof laundryPricing) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50/80 border-b border-gray-100">
            <th className="py-4 px-6 font-semibold text-foreground">Garment / Item</th>
            <th className="py-4 px-6 font-semibold text-foreground">Est. Price</th>
            <th className="py-4 px-6 font-semibold text-foreground hidden sm:table-cell">Turnaround</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
              <td className="py-4 px-6 font-medium text-foreground/80">{row.item}</td>
              <td className="py-4 px-6 text-primary font-semibold">{row.price}</td>
              <td className="py-4 px-6 text-muted-foreground text-sm hidden sm:table-cell">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="bg-gray-50 pb-24 min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white pt-24 pb-20 px-4 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">Transparent Pricing</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Premium quality care with straightforward, honest pricing. No hidden fees.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 -mt-10 relative z-10">
        <FadeIn>
          {/* Promo Banner */}
          <div className="bg-gradient-to-r from-secondary to-red-500 rounded-2xl p-6 text-white shadow-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-full">
                <Tag className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Flat 20% off on your first order!</h3>
                <p className="text-white/80">Experience premium care for less.</p>
              </div>
            </div>
            <div className="bg-white text-secondary font-bold px-6 py-2 rounded-lg tracking-widest border-2 border-dashed border-secondary/20">
              FIRST20
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs defaultValue="laundry" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white shadow-sm p-1 rounded-xl">
              <TabsTrigger value="laundry" className="text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Laundry</TabsTrigger>
              <TabsTrigger value="dryclean" className="text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Dry Clean</TabsTrigger>
              <TabsTrigger value="specialty" className="text-base py-3 rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">Specialty</TabsTrigger>
            </TabsList>
            
            <TabsContent value="laundry" className="mt-0 outline-none">
              {renderTable(laundryPricing)}
            </TabsContent>
            
            <TabsContent value="dryclean" className="mt-0 outline-none">
              {renderTable(dryCleanPricing)}
            </TabsContent>
            
            <TabsContent value="specialty" className="mt-0 outline-none">
              {renderTable(specialtyPricing)}
            </TabsContent>
          </Tabs>

          <div className="max-w-4xl mx-auto mt-8 flex items-start gap-3 bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100">
            <Info className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              <strong>Disclaimer:</strong> Prices listed above are estimates. The final price will be confirmed at the time of pickup based on fabric type, exact garment condition, level of embroidery/embellishment, and specific stain treatment requirements.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
                Schedule a Pickup Now
              </Button>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
