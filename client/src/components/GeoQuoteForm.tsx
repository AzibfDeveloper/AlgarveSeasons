import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, MapPin, Phone, Mail } from "lucide-react";

interface GeoQuoteFormProps {
  municipality: string;
  municipalitySlug: string;
  triggerText?: string;
  triggerVariant?: "default" | "outline" | "secondary";
  triggerSize?: "default" | "lg" | "sm";
}

export default function GeoQuoteForm({
  municipality,
  municipalitySlug,
  triggerText = "Get Free Quote",
  triggerVariant = "default",
  triggerSize = "default"
}: GeoQuoteFormProps) {
  const [, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    propertyType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handlePropertyChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      propertyType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", {
      ...formData,
      municipality,
      municipalitySlug
    });
    setIsSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        propertyType: "",
        message: ""
      });
      navigate(`/quote-confirmation?municipality=${encodeURIComponent(municipality)}`);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={triggerSize}
          variant={triggerVariant === "default" ? "default" : triggerVariant === "secondary" ? "secondary" : "outline"}
          className={triggerVariant === "default" ? "bg-primary hover:bg-primary/90 text-white font-bold" : triggerVariant === "secondary" ? "bg-secondary hover:bg-secondary/90 text-white font-bold" : "border-primary text-primary hover:bg-primary/5"}
        >
          <Zap className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Get Your Free Quote in {municipality}</DialogTitle>
          <DialogDescription>
            Fill out this quick form and our team will contact you within 24 hours with a personalized quote.
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Zap className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
            <p className="text-slate-600">
              Your quote request has been sent. Our team will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+351 9XX XXX XXX"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Service of Interest *</label>
              <Select value={formData.service} onValueChange={handleServiceChange}>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="air-conditioning">Air Conditioning</SelectItem>
                  <SelectItem value="solar-energy">Solar Energy</SelectItem>
                  <SelectItem value="heat-pumps">Heat Pumps</SelectItem>
                  <SelectItem value="tesla-powerwall">Tesla Powerwall</SelectItem>
                  <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Property Type *</label>
              <Select value={formData.propertyType} onValueChange={handlePropertyChange}>
                <SelectTrigger className="text-sm">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={3}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition text-sm"
              />
            </div>

            {/* Location Badge */}
            <div className="bg-slate-50 p-3 rounded-lg flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-slate-700">
                <span className="font-semibold">Location:</span> {municipality}
              </span>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-10">
              <Zap className="w-4 h-4 mr-2" />
              Get Free Quote
            </Button>

            <p className="text-xs text-slate-600 text-center">
              We respect your privacy. Your information will only be used to provide you with a quote.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
