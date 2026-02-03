import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Wind, Sun, Zap, Shield, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import { faqCategories, FAQItem } from "@/lib/faqData";

/**
 * FAQ Page Component
 * 
 * Comprehensive FAQ section with:
 * - 5 organized categories (AC, Solar, Heat Pumps, Warranty, General)
 * - Interactive accordion interface
 * - Category filtering
 * - SEO-optimized schema markup
 */

const iconMap: Record<string, React.ReactNode> = {
  Wind: <Wind className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  MapPin: <MapPin className="w-6 h-6" />,
};

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
      >
        <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    if (newOpen.has(id)) {
      newOpen.delete(id);
    } else {
      newOpen.add(id);
    }
    setOpenItems(newOpen);
  };

  const displayCategories = selectedCategory
    ? faqCategories.filter(cat => cat.name === selectedCategory)
    : faqCategories;

  return (
    <Layout>
      <Helmet>
        <title>FAQ | Algarve Seasons - Air Conditioning, Solar & Heat Pump Questions</title>
        <meta
          name="description"
          content="Find answers to common questions about air conditioning, solar panels, heat pumps, installation, warranty, and service areas in Algarve."
        />
        <meta
          name="keywords"
          content="FAQ, Air Conditioning Algarve, Solar Panels, Heat Pumps, HVAC Installation, Warranty"
        />
        <link rel="canonical" href="https://algarveseasons.com/faq" />
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap(cat =>
              cat.items.map(item => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              }))
            ),
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our air conditioning, solar energy, heat pump services, installation process, and warranty coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container max-w-4xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Categories
            </button>
            {faqCategories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {iconMap[category.icon]}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {displayCategories.map(category => (
              <div key={category.name}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {iconMap[category.icon]}
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.items.map(item => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={openItems.has(item.id)}
                      onToggle={() => toggleItem(item.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Didn't find your answer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team is here to help! Contact us directly for personalized assistance with your specific questions or needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+351910675168"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Call: +351 910 675 168
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
