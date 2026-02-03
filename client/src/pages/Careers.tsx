import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

export default function Careers() {
  const positions = [
    {
      id: 1,
      title: "HVAC Technician",
      location: "Algarve",
      type: "Full-time",
      experience: "2+ years",
      description: "Join our growing team to install and maintain premium air conditioning systems across the Algarve."
    },
    {
      id: 2,
      title: "Solar Installation Specialist",
      location: "Algarve",
      type: "Full-time",
      experience: "3+ years",
      description: "Help homeowners harness the Algarve sun with professional solar panel installations."
    },
    {
      id: 3,
      title: "Heat Pump Technician",
      location: "Algarve",
      type: "Full-time",
      experience: "2+ years",
      description: "Install and service modern heat pump systems for residential and commercial properties."
    },
    {
      id: 4,
      title: "Sales & Customer Support",
      location: "Algarve",
      type: "Full-time",
      experience: "1+ years",
      description: "Help customers find the perfect climate solution and provide ongoing support."
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Professional Development",
      description: "Continuous training and certification programs to advance your skills."
    },
    {
      icon: TrendingUp,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses."
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Work with a professional, friendly team that values quality and customer satisfaction."
    },
    {
      icon: Briefcase,
      title: "Stable Growth",
      description: "Join a rapidly growing company with long-term career opportunities."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Careers | Algarve Seasons</title>
        <meta name="description" content="Join our growing team at Algarve Seasons. We're hiring HVAC technicians, solar specialists, and more across the Algarve." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Join Our Growing Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're looking for passionate professionals to help Algarve homeowners achieve their climate and energy goals.
          </p>
        </div>
      </section>

      {/* About Working Here */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-8">Why Work With Us?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={idx}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-secondary mb-4">Our Company Culture</h3>
            <p className="text-slate-600 mb-4">
              At Algarve Seasons, we believe in doing things right. We're a team of professionals dedicated to providing premium HVAC and renewable energy solutions to Algarve homeowners. We value:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Quality workmanship and customer satisfaction</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Professional development and continuous learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Teamwork and mutual support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Integrity and transparency in all dealings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Open Positions
          </h2>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {positions.map((position) => (
              <Card key={position.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{position.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {position.location} • {position.type} • {position.experience} experience
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{position.description}</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-4">Don't see a position that fits? Send us your CV anyway!</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Send Your CV
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-white/90">
            Apply today and become part of the Algarve's leading HVAC and renewable energy team.
          </p>
          <a href="mailto:careers@algarveseasons.com" className="inline-block bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition-colors">
            Apply Now
          </a>
        </div>
      </section>
    </Layout>
  );
}
