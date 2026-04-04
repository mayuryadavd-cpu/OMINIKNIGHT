import { Link } from "wouter";
import { COMPANY_INFO, ROUTES } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <Link href={ROUTES.HOME} className="inline-flex mb-6">
              <img
                src="/omniknight-logo.png"
                alt="OmniKnight Express Laundry Studio"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Bengaluru's trusted express laundry and dry cleaning studio. Premium garment care with hassle-free free pickup and delivery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href={ROUTES.HOME} className="text-white/70 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href={ROUTES.SERVICES} className="text-white/70 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link href={ROUTES.ABOUT} className="text-white/70 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.PRICING} className="text-white/70 hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href={ROUTES.WHY_US} className="text-white/70 hover:text-secondary transition-colors">Why Choose Us</Link></li>
              <li><Link href={ROUTES.LOCATE_US} className="text-white/70 hover:text-secondary transition-colors">Locate Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90">{COMPANY_INFO.phone}</p>
                  <p className="text-white/50 text-xs">Mon-Sun, 9AM-9PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Business Hours</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Store Hours</p>
                  <p className="text-white/70 text-sm">{COMPANY_INFO.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 font-medium">Pickup & Delivery</p>
                  <p className="text-white/70 text-sm">{COMPANY_INFO.pickupHours}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {new Date().getFullYear()} OmniKnight Express Laundry Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
