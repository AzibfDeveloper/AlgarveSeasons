import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function QuoteConfirmation() {
  const [location] = useLocation();
  const [municipality, setMunicipality] = useState<string>("");

  useEffect(() => {
    // Extract municipality from URL params
    const params = new URLSearchParams(window.location.search);
    const mun = params.get("municipality") || "Algarve";
    setMunicipality(mun);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white">
      {/* Header spacing */}
      <div className="h-24" />

      {/* Main content */}
      <div className="flex-1 container max-w-3xl mx-auto px-4 py-12">
        {/* Success message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 rounded-full blur-lg opacity-20" />
              <CheckCircle className="w-24 h-24 text-orange-600 relative" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Quote Request Received!
          </h1>

          <p className="text-xl text-slate-600 mb-2">
            Thank you for choosing Algarve Seasons
          </p>
          <p className="text-lg text-slate-500">
            We've received your quote request for {municipality} and will be in touch shortly.
          </p>
        </div>

        {/* Next steps cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Step 1 */}
          <Card className="border-slate-200 hover:border-orange-300 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    24-Hour Response
                  </h3>
                  <p className="text-sm text-slate-600">
                    Our team will review your request and contact you within 24 hours with a personalized quote.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="border-slate-200 hover:border-orange-300 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                    <MessageSquare className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Consultation
                  </h3>
                  <p className="text-sm text-slate-600">
                    We'll discuss your needs, answer questions, and provide expert recommendations for your property.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="border-slate-200 hover:border-orange-300 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    Schedule Visit
                  </h3>
                  <p className="text-sm text-slate-600">
                    Book a convenient time for our team to visit and provide an on-site assessment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact info */}
        <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 mb-12">
          <CardContent className="pt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Can't wait? Contact us directly:
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Call us</p>
                  <a
                    href="tel:+351910675168"
                    className="text-lg font-semibold text-orange-600 hover:text-orange-700"
                  >
                    +351 910 675 168
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-600">Email us</p>
                  <a
                    href="mailto:info@algarveseasons.com"
                    className="text-lg font-semibold text-orange-600 hover:text-orange-700"
                  >
                    info@algarveseasons.com
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" variant="outline" className="border-slate-300">
              Back to Home
            </Button>
          </Link>

          <Link href={`/${municipality.toLowerCase()}`}>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Back to {municipality}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* FAQ section */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900">
                What happens after I submit a quote request?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Our team reviews your request and contacts you within 24 hours to discuss your needs, provide recommendations, and schedule a convenient site visit if needed.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900">
                Is the quote really free?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Yes! Our initial consultation and quote are completely free with no obligation. We only charge if you decide to move forward with our services.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900">
                How long does the assessment take?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                A typical on-site assessment takes 30-45 minutes. Our technician will evaluate your property, discuss options, and provide a detailed quote.
              </p>
            </details>

            <details className="group border border-slate-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900">
                What if I have questions before the call?
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Feel free to call us anytime at +351 910 675 168 or check out our <Link href="/faq" className="text-orange-600 font-semibold hover:underline">FAQ page</Link> for detailed information about our services.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
