import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Faro",
      service: "Air Conditioning",
      rating: 5,
      text: "Dan & his team are reliable, tidy, efficient & friendly. Our new system is economically efficient. Highly recommended!",
      image: "M"
    },
    {
      name: "João Santos",
      location: "Lagos",
      service: "Solar Energy",
      rating: 5,
      text: "Professional installation and excellent after-sales support. Our electricity bills have dropped by 70%. Best investment we made!",
      image: "J"
    },
    {
      name: "Emma Wilson",
      location: "Albufeira",
      service: "Heat Pump",
      rating: 5,
      text: "Works were very professional, prices were reasonable, found the issue right away and got it sorted. HIGHLY recommend!",
      image: "E"
    },
    {
      name: "Carlos Oliveira",
      location: "Portimão",
      service: "Complete Solution",
      rating: 5,
      text: "From initial consultation to final installation, everything was seamless. The team explained everything clearly and finished on time.",
      image: "C"
    },
    {
      name: "Anna Costa",
      location: "Vilamoura",
      service: "Solar + Battery",
      rating: 5,
      text: "Amazing service! We now have complete energy independence with our solar panels and Tesla Powerwall. Worth every euro!",
      image: "A"
    },
    {
      name: "Miguel Ferreira",
      location: "Tavira",
      service: "Air Conditioning",
      rating: 5,
      text: "Quick response time, professional team, and excellent warranty. They've been our go-to for HVAC needs for 3 years now.",
      image: "M"
    },
    {
      name: "Sophia Martins",
      location: "Loulé",
      service: "Heat Pump Heating",
      rating: 5,
      text: "Replaced our old gas boiler with a heat pump. Winter heating is now efficient and eco-friendly. Great investment!",
      image: "S"
    },
    {
      name: "Roberto Gomes",
      location: "Olhão",
      service: "Solar Installation",
      rating: 5,
      text: "Professional from start to finish. The monitoring app makes it easy to track our energy production. Excellent value.",
      image: "R"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Customer Testimonials | Algarve Seasons</title>
        <meta name="description" content="Read what our customers say about our air conditioning, solar, and heat pump services across the Algarve." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            What Our Customers Say
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real reviews from Algarve homeowners who have trusted Algarve Seasons with their climate and energy needs.
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-bold text-secondary">5.0 Rating • 200+ Reviews</span>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 leading-relaxed">"{testimonial.text}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.location} • {testimonial.service}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="text-slate-600">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">5.0</p>
              <p className="text-slate-600">Average Rating</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">16</p>
              <p className="text-slate-600">Municipalities Served</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">8+</p>
              <p className="text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Join Our Growing List of Satisfied Customers
          </h2>
          <p className="text-xl text-white/90">
            Get your free quote today and experience the Algarve Seasons difference.
          </p>
          <a href="/contact" className="inline-block bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors">
            Get Free Quote
          </a>
        </div>
      </section>
    </Layout>
  );
}
