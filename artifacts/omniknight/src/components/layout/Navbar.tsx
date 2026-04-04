import React from "react";
import { Link, useLocation } from "wouter";
import { COMPANY_INFO, ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: "Services", href: ROUTES.SERVICES },
    { label: "Pricing", href: ROUTES.PRICING },
    { label: "Why Us", href: ROUTES.WHY_US },
    { label: "Locate Us", href: ROUTES.LOCATE_US },
    { label: "Contact", href: ROUTES.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-primary/90 dark:border-primary-foreground/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={ROUTES.HOME} className="flex flex-col">
          <span className="font-bold text-2xl tracking-tight text-primary dark:text-white leading-none">
            OmniKnight
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] text-secondary">
            EXPRESS LAUNDRY STUDIO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location === link.href ? "text-secondary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold">
              Schedule Pickup
            </Button>
          </a>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary dark:text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-between">
              <div className="flex flex-col gap-6 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-secondary ${
                      location === link.href ? "text-secondary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="pb-6">
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Schedule Pickup
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
