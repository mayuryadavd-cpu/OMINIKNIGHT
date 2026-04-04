import React, { useState } from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

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

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4">
        
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-serif mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a question, feedback, or special request? We're here to help. Reach out to us via phone, WhatsApp, or the form below.
          </p>
        </FadeIn>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-6xl mx-auto flex flex-col lg:flex-row">
          
          {/* Left Panel - Contact Info */}
          <div className="lg:w-2/5 bg-primary text-white p-10 md:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/40 via-primary to-primary opacity-80" />
            
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-3xl font-bold font-serif mb-8">Contact Information</h2>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone / WhatsApp</p>
                    <p className="font-medium text-lg">{COMPANY_INFO.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <p className="font-medium text-lg">{COMPANY_INFO.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Address</p>
                    <p className="font-medium leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary shrink-0" />
                  <div>
                    <p className="text-white/60 text-sm mb-1">Working Hours</p>
                    <p className="font-medium">{COMPANY_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-white/80 font-medium mb-4">Fastest response?</p>
                <a href={COMPANY_INFO.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full bg-white/10 hover:bg-white/20 text-white border-white/20 h-12">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="lg:w-3/5 p-10 md:p-14">
            <h2 className="text-2xl font-bold text-foreground mb-8 font-serif">Send us a Message</h2>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="h-full min-h-[300px] flex flex-col items-center justify-center text-center bg-green-50 rounded-2xl border border-green-100 p-8"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required placeholder="John Doe" className="h-12 bg-gray-50 border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" required placeholder="+91 98765 43210" className="h-12 bg-gray-50 border-gray-200" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" className="h-12 bg-gray-50 border-gray-200" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="How can we help you?" 
                    className="min-h-[150px] resize-none bg-gray-50 border-gray-200" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto h-12 px-8 bg-secondary hover:bg-secondary/90 text-white font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
