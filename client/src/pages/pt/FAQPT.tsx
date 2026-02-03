import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, Wind, Sun, Zap, Shield, MapPin } from "lucide-react";
import LayoutPT from "@/components/LayoutPT";
import { faqCategoriesPT, FAQItem } from "@/lib/faqDataPT";

/**
 * FAQ Page Component - Portuguese Version
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

export default function FAQPT() {
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
    ? faqCategoriesPT.filter(cat => cat.name === selectedCategory)
    : faqCategoriesPT;

  return (
    <LayoutPT>
      <Helmet>
        <title>FAQ | Algarve Seasons - Perguntas sobre Ar Condicionado, Solar e Bombas de Calor</title>
        <meta
          name="description"
          content="Encontre respostas para perguntas comuns sobre ar condicionado, painéis solares, bombas de calor, instalação, garantia e áreas de serviço no Algarve."
        />
        <meta
          name="keywords"
          content="FAQ, Ar Condicionado Algarve, Painéis Solares, Bombas de Calor, Instalação AVAC, Garantia"
        />
        <link rel="canonical" href="https://algarveseasons.com/pt-pt/faq" />
        
        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategoriesPT.flatMap(cat =>
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
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-muted-foreground">
              Encontre respostas às perguntas mais comuns sobre os nossos serviços de ar condicionado, energia solar e bombas de calor.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Todas as Categorias
            </button>
            {faqCategoriesPT.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-medium transition-colors flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <h3 className="text-lg font-bold text-secondary">Categorias</h3>
                {faqCategoriesPT.map(category => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category.name
                        ? "bg-primary text-white"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {iconMap[category.icon]}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <p className="text-xs mt-1 opacity-75">{category.items.length} perguntas</p>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="lg:col-span-2 space-y-8">
              {displayCategories.map(category => (
                <div key={category.name}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-primary">{iconMap[category.icon]}</div>
                    <h2 className="text-2xl font-bold text-secondary">{category.name}</h2>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Não encontrou a resposta?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contacte-nos diretamente. A nossa equipa está pronta para responder a qualquer pergunta.
          </p>
          <a href="tel:+351910675168" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contacte-nos Agora
          </a>
        </div>
      </section>
    </LayoutPT>
  );
}
