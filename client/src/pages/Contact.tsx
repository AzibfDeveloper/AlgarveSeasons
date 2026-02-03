import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Reviews from "@/components/Reviews";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function Contact() {
  const [location] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Parse URL parameters to pre-fill form
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    const planParam = params.get("plan");
    const sizeParam = params.get("size"); // e.g., "5kW"

    let prefilledService = "";
    let prefilledMessage = "";

    if (serviceParam) {
      if (serviceParam === "AC") prefilledService = "air-conditioning";
      else if (serviceParam === "Solar") prefilledService = "solar";
      else if (serviceParam === "HeatPump") prefilledService = "heat-pump";
      else if (serviceParam === "Maintenance") prefilledService = "maintenance";
      else if (serviceParam === "Commercial") prefilledService = "commercial";
      else prefilledService = "general";
    }

    if (planParam) {
      prefilledMessage += `I am interested in the ${planParam} maintenance plan. `;
    }

    if (sizeParam) {
      prefilledMessage += `I used your calculator and it estimated I need a ${sizeParam} system. `;
    }

    setFormData(prev => ({
      ...prev,
      service: prefilledService,
      message: prefilledMessage + prev.message
    }));
  }, [location]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend API
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to upgrade your home comfort? Get in touch for a free quote or consultation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-none shadow-md">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Get in Touch</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Phone</p>
                      <a href="tel:+351910675168" className="text-slate-600 hover:text-primary transition-colors">
                        +351 910 675 168
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Email</p>
                      <a href="mailto:Dan@algarveseasons.com" className="text-slate-600 hover:text-primary transition-colors">
                        Dan@algarveseasons.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">Service Area</p>
                      <p className="text-slate-600">
                        Serving the entire Algarve region from Lagos to Tavira.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-slate-900 text-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400" /> Daikin D1+ Premium Partner
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400" /> Certified Tesla Installer
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400" /> Fundo Ambiental Support
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400" /> 5-Year Installation Warranty
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
                <CardContent className="p-8 md:p-10">
                  {isSubmitted ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
                      <p className="text-lg text-slate-600 max-w-md mx-auto">
                        Your message has been sent successfully. Our team will contact you within 24 hours to discuss your project.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            placeholder="John Doe" 
                            required 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="bg-slate-50 border-slate-200 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="john@example.com" 
                            required 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="bg-slate-50 border-slate-200 focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input 
                            id="phone" 
                            type="tel" 
                            placeholder="+351 ..." 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="bg-slate-50 border-slate-200 focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In</Label>
                          <Select 
                            value={formData.service} 
                            onValueChange={(val) => setFormData({...formData, service: val})}
                          >
                            <SelectTrigger className="bg-slate-50 border-slate-200 focus:ring-primary">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="air-conditioning">Air Conditioning</SelectItem>
                              <SelectItem value="solar">Solar Energy</SelectItem>
                              <SelectItem value="heat-pump">Heat Pumps</SelectItem>
                              <SelectItem value="tesla">Tesla Powerwall</SelectItem>
                              <SelectItem value="maintenance">Maintenance & Repair</SelectItem>
                              <SelectItem value="commercial">Commercial Solutions</SelectItem>
                              <SelectItem value="general">General Inquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message / Project Details</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your project..." 
                          className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-primary"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 text-lg">
                        Get Free Quote
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </Layout>
  );
}
