import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Algarve Seasons | Daikin D1+ Partner & HVAC Specialists</title>
        <meta name="description" content="Learn about Algarve Seasons, the leading HVAC and renewable energy provider in the Algarve. Daikin D1+ Partner, Tesla Certified, serving since 2016." />
        <meta name="keywords" content="About Algarve Seasons, HVAC company Algarve, Daikin partner, solar energy provider" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              About Algarve Seasons
            </h1>
            <p className="text-xl text-muted-foreground">
              We are the Algarve's leading HVAC and renewable energy solution provider, dedicated to delivering premium comfort and energy efficiency to homes and businesses across all 16 municipalities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-secondary">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2016, Algarve Seasons began with a simple mission: to provide world-class air conditioning, solar energy, and heat pump solutions to the Algarve region. What started as a small installation team has grown into the region's most trusted HVAC and renewable energy provider.
            </p>
            <p className="text-lg text-muted-foreground">
              We recognized that the Algarve's unique climate—with scorching summers and mild winters—required specialized expertise. Our team invested in certifications from Daikin, Tesla, and Huawei to become the most qualified installers in the region.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we've completed over 200 installations and serve homeowners, villa managers, and businesses across the entire Algarve region with the same commitment to quality and service that defined us from day one.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Algarve Seasons Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Why Choose Algarve Seasons?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Certified Partners</h3>
                <p className="text-muted-foreground">
                  Official Daikin D1+ Partner, Tesla Certified, and Huawei authorized installer.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of Algarve climate, property types, and energy needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Rapid Response</h3>
                <p className="text-muted-foreground">
                  Emergency AC repair within 24 hours across key Algarve towns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">5-Star Service</h3>
                <p className="text-muted-foreground">
                  Consistent top-rated reviews from villa owners and property managers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Air Conditioning</h3>
              <p className="text-muted-foreground">
                Premium Daikin and Mitsubishi installations including wall-mounted units, multi-room systems, and VRV solutions for large properties.
              </p>
              <Link href="/services/air-conditioning">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Solar Energy</h3>
              <p className="text-muted-foreground">
                Photovoltaic systems, Tesla Powerwall battery storage, and Huawei inverters to maximize your Algarve sunshine.
              </p>
              <Link href="/services/solar-energy">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Heat Pumps</h3>
              <p className="text-muted-foreground">
                Efficient air-to-water and air-to-air heat pump systems for year-round comfort and lower energy bills.
              </p>
              <Link href="/services/heat-pumps">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Work with Algarve Seasons?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how we can optimize your home's climate and energy efficiency.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
