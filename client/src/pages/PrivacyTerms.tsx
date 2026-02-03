import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";

export default function PrivacyTerms() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy & Terms | Algarve Seasons</title>
        <meta name="description" content="Privacy policy and terms of service for Algarve Seasons HVAC and renewable energy services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-muted-foreground mt-4">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto prose prose-slate">
          <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">Privacy Policy</h2>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Information We Collect</h3>
          <p>
            Algarve Seasons collects information you provide directly, such as when you request a quote, contact us, or subscribe to our services. This may include:
          </p>
          <ul className="space-y-2 mb-6">
            <li>Name and contact information (email, phone)</li>
            <li>Property address and details</li>
            <li>Service preferences and requirements</li>
            <li>Payment information (processed securely)</li>
          </ul>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">2. How We Use Your Information</h3>
          <p>
            We use the information we collect to:
          </p>
          <ul className="space-y-2 mb-6">
            <li>Provide and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send service updates and promotional materials (with your consent)</li>
            <li>Process payments and transactions</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Data Protection</h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data is encrypted and stored securely.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Third-Party Sharing</h3>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share information with trusted partners only as necessary to provide our services (e.g., payment processors, installation partners).
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at privacy@algarveseasons.com.
          </p>

          <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">Terms of Service</h2>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Service Agreement</h3>
          <p>
            By engaging Algarve Seasons for HVAC, solar, or heat pump services, you agree to these terms. Our services are provided on an as-needed basis unless a service contract specifies otherwise.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Pricing and Payment</h3>
          <p>
            All prices are quoted in EUR and include VAT unless otherwise stated. Payment terms are agreed upon before work begins. We accept bank transfers, credit cards, and installment plans.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Warranty</h3>
          <p>
            All installations come with a minimum 5-year warranty on workmanship. Equipment warranties vary by manufacturer. Details are provided in your service agreement.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Cancellation Policy</h3>
          <p>
            Quotes are valid for 30 days. If you cancel a scheduled installation more than 48 hours in advance, no cancellation fee applies. Cancellations within 48 hours may incur a 25% fee.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Liability</h3>
          <p>
            Algarve Seasons is not liable for indirect, incidental, or consequential damages. Our liability is limited to the amount paid for the service in question.
          </p>

          <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Dispute Resolution</h3>
          <p>
            Any disputes arising from our services shall be resolved through negotiation. If unresolved, disputes may be submitted to arbitration or Portuguese courts as applicable.
          </p>

          <h2 className="text-3xl font-bold text-secondary mt-12 mb-6">Contact Us</h2>
          <p>
            For questions about this Privacy Policy or Terms of Service, please contact us:
          </p>
          <ul className="space-y-2 mb-6">
            <li><strong>Email:</strong> privacy@algarveseasons.com</li>
            <li><strong>Phone:</strong> +351 910 675 168</li>
            <li><strong>Address:</strong> Algarve, Portugal</li>
          </ul>

          <p className="text-sm text-slate-500 mt-12">
            © {new Date().getFullYear()} Algarve Seasons. All rights reserved. These terms are subject to change without notice.
          </p>
        </div>
      </section>
    </Layout>
  );
}
