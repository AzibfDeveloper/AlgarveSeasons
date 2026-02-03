import Layout from "@/components/Layout";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Lightbulb, Zap, Leaf, Sun, Wind, Clock, User, ArrowRight } from "lucide-react";
import { articles } from "@/lib/articlesData";
import { useLocation } from "wouter";

export default function ResourcesGuides() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [, setLocation] = useLocation();

  const categories = [
    { id: "all", label: "All Articles", icon: BookOpen },
    { id: "HVAC", label: "HVAC & Cooling", icon: Wind },
    { id: "Solar", label: "Solar Energy", icon: Sun },
    { id: "Heat Pumps", label: "Heat Pumps", icon: Leaf },
    { id: "General", label: "General", icon: Lightbulb }
  ];

  const filteredArticles = selectedCategory && selectedCategory !== "all"
    ? articles.filter(a => a.category === selectedCategory)
    : articles;

  const currentArticle = selectedArticle ? articles.find(a => a.id === selectedArticle) : null;

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Wind, Sun, Leaf, Lightbulb, Zap, BookOpen
    };
    return iconMap[iconName] || BookOpen;
  };

  if (currentArticle) {
    return (
      <Layout>
        <Helmet>
          <title>{currentArticle.title} | Resources & Guides | Algarve Seasons</title>
          <meta name="description" content={currentArticle.description} />
        </Helmet>

        {/* Article Header */}
        <section className="py-12 bg-gradient-to-br from-secondary/10 to-primary/10">
          <div className="container max-w-4xl">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-primary hover:text-primary/80 font-semibold mb-6 flex items-center gap-2"
            >
              ← Back to Articles
            </button>
            
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {currentArticle.category}
                </span>
              </div>
              <h1 className="text-5xl font-display font-bold text-secondary">
                {currentArticle.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{currentArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentArticle.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{new Date(currentArticle.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {currentArticle.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('#')) {
                  const level = paragraph.match(/^#+/)?.[0].length || 1;
                  const text = paragraph.replace(/^#+\s/, '');
                  const HeadingLevel = Math.min(level + 1, 6);
                  const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
                  const HeadingTag = headingTags[HeadingLevel - 1];
                  return React.createElement(
                    HeadingTag as any,
                    { key: idx, className: `font-bold text-secondary mt-8 mb-4 ${level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'}` },
                    text
                  );
                } else if (paragraph.startsWith('|')) {
                  // Simple table rendering
                  const rows = paragraph.split('\n').filter(r => r.trim());
                  return (
                    <div key={idx} className="overflow-x-auto my-6">
                      <table className="w-full border-collapse border border-slate-300">
                        <tbody>
                          {rows.map((row, ridx) => (
                            <tr key={ridx} className={ridx === 0 ? 'bg-slate-100' : ridx === 1 ? 'border-b-2 border-slate-300' : ''}>
                              {row.split('|').filter(c => c.trim()).map((cell, cidx) => (
                                <td key={cidx} className="border border-slate-300 px-4 py-2">
                                  {cell.trim()}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                } else if (paragraph.startsWith('-') || paragraph.startsWith('•')) {
                  const items = paragraph.split('\n').filter(l => l.trim());
                  return (
                    <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-slate-700">
                      {items.map((item, iidx) => (
                        <li key={iidx}>{item.replace(/^[-•]\s/, '')}</li>
                      ))}
                    </ul>
                  );
                } else {
                  return (
                    <p key={idx} className="text-slate-700 leading-relaxed my-4">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Related Topics */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-secondary mb-4">Topics Covered in This Article</h3>
              <div className="flex flex-wrap gap-2">
                {currentArticle.topics.map((topic, idx) => (
                  <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-r from-secondary to-primary text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Implement These Solutions?</h3>
              <p className="mb-6 text-white/90">
                Contact our experts for personalized advice about your specific situation.
              </p>
              <Button
                onClick={() => setLocation('/contact')}
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Resources & Guides | Algarve Seasons</title>
        <meta name="description" content="Free guides and resources about air conditioning, solar energy, heat pumps, and energy efficiency for Algarve homes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-display font-bold text-secondary">
            Resources & Guides
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Free educational content to help you make informed decisions about your home's climate and energy systems.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = selectedCategory === cat.id || (selectedCategory === null && cat.id === "all");
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id === "all" ? null : cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const IconComponent = getIconComponent(article.icon);
              return (
                <Card
                  key={article.id}
                  className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer overflow-hidden"
                  onClick={() => setSelectedArticle(article.id)}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="inline-block mb-3">
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>By {article.author.split(' ')[0]}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-500 uppercase">Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {article.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full mt-4 py-2 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Answers Section */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold text-secondary mb-12 text-center">
            Quick Answers
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How much can I save with solar panels in the Algarve?",
                a: "Most Algarve homeowners save €800-1,500 per year on electricity with a typical 5-10kW solar system. Payback period is typically 5-7 years."
              },
              {
                q: "What's the best time to install AC in the Algarve?",
                a: "Spring (March-May) is ideal for AC installation, as it allows testing before summer heat arrives. However, we can install year-round."
              },
              {
                q: "Are heat pumps suitable for Algarve's climate?",
                a: "Yes! Heat pumps are perfect for the Algarve. They provide efficient cooling in summer and heating in winter, with minimal energy consumption."
              },
              {
                q: "What maintenance do my systems need?",
                a: "AC systems need annual servicing, solar panels need occasional cleaning, and heat pumps require annual maintenance. We offer maintenance packages."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-secondary mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-display font-bold">
            Ready to Learn More?
          </h2>
          <p className="text-xl text-white/90">
            Contact our experts for personalized advice about your specific situation.
          </p>
          <Button
            onClick={() => setLocation('/contact')}
            className="bg-white text-primary hover:bg-white/90 font-bold h-12 px-8 text-lg"
          >
            Get Free Consultation
          </Button>
        </div>
      </section>
    </Layout>
  );
}
