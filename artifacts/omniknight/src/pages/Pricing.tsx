import React, { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
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

type PriceRow = { item: string; price: string; unit: string };

const washFoldData: PriceRow[] = [
  { item: "Wash & Fold (5 kg – 9 kg)", price: "₹79", unit: "per kg" },
  { item: "Wash & Fold (5 kg)", price: "₹89", unit: "per kg" },
  { item: "Wash & Fold", price: "₹99", unit: "per kg" },
  { item: "Wash & Fold (Premium) @ 1 hr", price: "₹219", unit: "per kg" },
];

const washIronData: PriceRow[] = [
  { item: "Wash & Steam Iron (5 kg – 9 kg)", price: "₹109", unit: "per kg" },
  { item: "Wash & Steam Iron (5 kg)", price: "₹119", unit: "per kg" },
  { item: "Wash & Steam Iron (General)", price: "₹129", unit: "per kg" },
  { item: "Wash & Steam Iron (Premium) @ 2 hr", price: "₹249", unit: "per kg" },
];

const dryCleanData: PriceRow[] = [
  { item: "Lungi Dry Clean", price: "₹59", unit: "per piece" },
  { item: "T-Shirt", price: "₹59", unit: "per piece" },
  { item: "Pant Dry Clean", price: "₹69", unit: "per piece" },
  { item: "Top / Bottom", price: "₹69", unit: "per piece" },
  { item: "Kids Frock", price: "₹99", unit: "per piece" },
  { item: "Shayla Silk", price: "₹99", unit: "per piece" },
  { item: "Soft Toys (Small)", price: "₹109", unit: "per piece" },
  { item: "Hoodie", price: "₹129", unit: "per piece" },
  { item: "Kurta Silk", price: "₹129", unit: "per piece" },
  { item: "Ladies Long Top", price: "₹129", unit: "per piece" },
  { item: "Kurta Dry Clean", price: "₹141", unit: "per piece" },
  { item: "Ladies 1 Piece Set", price: "₹169", unit: "per piece" },
  { item: "Ladies T/B Set With Work", price: "₹169", unit: "per set" },
  { item: "Jacket", price: "₹177", unit: "per piece" },
  { item: "Saree Dry Clean", price: "₹177", unit: "per piece" },
  { item: "Half Jacket", price: "₹179", unit: "per piece" },
  { item: "Lehenga", price: "₹187", unit: "per piece" },
  { item: "Blazer Dry Clean", price: "₹199", unit: "per piece" },
];

const steamIronData: PriceRow[] = [
  { item: "Kurta Steam Press", price: "₹19", unit: "per piece" },
  { item: "Lungi", price: "₹19", unit: "per piece" },
  { item: "Steam Ironing", price: "₹19", unit: "per piece" },
  { item: "Steam Press", price: "₹19", unit: "per piece" },
  { item: "Towel", price: "₹19", unit: "per piece" },
  { item: "Peticoat", price: "₹20", unit: "per piece" },
  { item: "Shalya", price: "₹29", unit: "per piece" },
  { item: "Blouse", price: "₹30", unit: "per piece" },
  { item: "Ladies Long Gown", price: "₹30", unit: "per piece" },
  { item: "Waist Coat", price: "₹30", unit: "per piece" },
  { item: "Starch Iron", price: "₹50", unit: "per piece" },
  { item: "King Size Bed Sheet", price: "₹60", unit: "per piece" },
  { item: "Saree", price: "₹89", unit: "per piece" },
  { item: "Saree Steam Long Iron", price: "₹100", unit: "per piece" },
  { item: "Bandhani Saree", price: "₹129", unit: "per piece" },
  { item: "Anarkali With Work", price: "₹215", unit: "per piece" },
];

const householdData: PriceRow[] = [
  { item: "Pillow Cover", price: "₹29", unit: "per piece" },
  { item: "Single Bed Sheet", price: "₹59", unit: "per piece" },
  { item: "Pillow", price: "₹99", unit: "per piece" },
  { item: "Screen", price: "₹120", unit: "per piece" },
  { item: "Double Bed Sheet", price: "₹129", unit: "per piece" },
  { item: "Bed Sheet (Double)", price: "₹149", unit: "per piece" },
  { item: "Curtain (8×8)", price: "₹149", unit: "per piece" },
  { item: "Curtain Dry Clean", price: "₹150", unit: "per piece" },
];

const TABS = [
  { id: "wash-fold", label: "Wash & Fold", data: washFoldData },
  { id: "wash-iron", label: "Wash & Steam Iron", data: washIronData },
  { id: "dry-clean", label: "Dry Cleaning", data: dryCleanData },
  { id: "steam-iron", label: "Steam Ironing", data: steamIronData },
  { id: "household", label: "Household Items", data: householdData },
];

function PriceTable({ data }: { data: PriceRow[] }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr style={{ backgroundColor: "#0D1B2A" }}>
            <th className="py-4 px-6 font-semibold text-white text-sm uppercase tracking-wider">Item</th>
            <th className="py-4 px-6 font-semibold text-white text-sm uppercase tracking-wider">Price</th>
            <th className="py-4 px-6 font-semibold text-white text-sm uppercase tracking-wider hidden sm:table-cell">Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className="border-b border-gray-100 transition-colors hover:bg-red-50/30"
              style={{ backgroundColor: idx % 2 === 0 ? "#ffffff" : "#f9fafb" }}
            >
              <td className="py-3.5 px-6 text-gray-800 font-medium">{row.item}</td>
              <td
                className="py-3.5 px-6 font-bold text-base"
                style={{ color: "#C0182A" }}
              >
                {row.price}
              </td>
              <td className="py-3.5 px-6 text-gray-500 text-sm hidden sm:table-cell">{row.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("wash-fold");
  const active = TABS.find((t) => t.id === activeTab)!;

  return (
    <div className="min-h-screen pb-24" style={{ backgroundColor: "#f8f9fb" }}>
      {/* Page Header */}
      <section className="pt-24 pb-20 px-4 text-center" style={{ backgroundColor: "#0D1B2A" }}>
        <FadeIn>
          <p
            className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
            style={{ color: "#C0182A" }}
          >
            Transparent
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "#ffffff", fontFamily: "'Poppins', sans-serif" }}
          >
            Pricing
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
            Honest, straightforward rates for every garment. No hidden fees.
          </p>
        </FadeIn>
      </section>

      <section className="container mx-auto px-4 -mt-8 relative z-10 max-w-4xl">
        {/* Promo Banner */}
        <FadeIn>
          <div
            className="rounded-2xl p-5 text-white shadow-lg mb-10 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "linear-gradient(135deg, #C0182A 0%, #e02235 100%)" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-bold text-lg leading-tight">Flat 20% off on your First Order!</p>
                <p className="text-white/80 text-sm">Use code at checkout or mention when booking.</p>
              </div>
            </div>
            <div className="bg-white font-bold px-6 py-2 rounded-lg tracking-widest text-sm border-2 border-dashed border-white/40" style={{ color: "#C0182A" }}>
              FIRST20
            </div>
          </div>
        </FadeIn>

        {/* Custom Tabs */}
        <FadeIn delay={0.1}>
          {/* Tab Pills — horizontal scroll on mobile */}
          <div className="overflow-x-auto pb-2 mb-6">
            <div className="flex gap-2 min-w-max bg-white rounded-xl p-1.5 shadow-sm border border-gray-100">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200"
                  style={
                    activeTab === tab.id
                      ? { backgroundColor: "#0D1B2A", color: "#ffffff" }
                      : { backgroundColor: "#f1f3f5", color: "#4b5563" }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <PriceTable data={active.data} />
          </motion.div>

          {/* Footer Notes */}
          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5 flex items-start gap-3">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
            <div className="text-sm text-gray-600 leading-relaxed space-y-1">
              <p>* Prices may vary for premium/designer fabrics. Contact us for bulk orders.</p>
              <p>* Above rates are exclusive of taxes.</p>
              <p>* Express service is from the time laundry is in the store until exit. Pick up and drop time is not included.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-10 text-base font-semibold shadow-lg text-white"
                style={{ backgroundColor: "#C0182A" }}
              >
                Book a Pickup on WhatsApp
              </Button>
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
