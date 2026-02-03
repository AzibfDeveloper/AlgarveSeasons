import LayoutPT from "@/components/LayoutPT";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function RecursosPT() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const articles = [
    {
      id: 1,
      title: "Guia Completo de Manutenção de Ar Condicionado",
      category: "Manutenção",
      excerpt: "Aprenda como manter o seu sistema de ar condicionado em perfeito estado durante todo o ano.",
      readTime: "8 min",
      author: "Equipa Algarve Seasons",
      content: "A manutenção regular é essencial para garantir que o seu sistema de ar condicionado funciona com eficiência máxima. Neste guia, cobrimos limpeza de filtros, verificação de refrigerante, inspeção de componentes elétricos e muito mais.",
      tags: ["AC", "Manutenção", "Dicas"]
    },
    {
      id: 2,
      title: "Porque Escolher Energia Solar no Algarve",
      category: "Energia Solar",
      excerpt: "Descubra os benefícios de instalar painéis solares na sua propriedade do Algarve.",
      readTime: "6 min",
      author: "Equipa Algarve Seasons",
      content: "O Algarve é uma das regiões mais ensolaradas de Portugal. Com mais de 300 dias de sol por ano, a energia solar é uma escolha óbvia. Saiba como economizar até €2.500 por ano com painéis solares.",
      tags: ["Solar", "Economia", "Energia"]
    },
    {
      id: 3,
      title: "Eficiência de Bombas de Calor: Guia do Proprietário",
      category: "Bombas de Calor",
      excerpt: "Tudo o que precisa saber sobre sistemas de bombas de calor e como funcionam.",
      readTime: "7 min",
      author: "Equipa Algarve Seasons",
      content: "As bombas de calor são 3-4 vezes mais eficientes do que aquecimento elétrico tradicional. Neste guia, explicamos como funcionam, os tipos disponíveis e como escolher o sistema certo para a sua casa.",
      tags: ["Bombas de Calor", "Eficiência", "Aquecimento"]
    },
    {
      id: 4,
      title: "Instalação de AC: O Que Esperar",
      category: "Instalação",
      excerpt: "Prepare-se para a instalação de ar condicionado com este guia passo a passo.",
      readTime: "5 min",
      author: "Equipa Algarve Seasons",
      content: "A instalação de ar condicionado é um processo simples quando realizado por profissionais. Descubra o que esperar, quanto tempo leva e como preparar a sua casa.",
      tags: ["AC", "Instalação", "Processo"]
    },
  ];

  const categories = ["Manutenção", "Energia Solar", "Bombas de Calor", "Instalação"];

  const filteredArticles = selectedCategory
    ? articles.filter(article => article.category === selectedCategory)
    : articles;

  return (
    <LayoutPT>
      <Helmet>
        <title>Recursos & Guias | Algarve Seasons - Informações AVAC e Energia</title>
        <meta name="description" content="Aceda a guias completos, dicas e recursos sobre ar condicionado, energia solar e bombas de calor." />
        <meta name="keywords" content="Guias, Recursos, Ar Condicionado, Solar, Bombas de Calor, Dicas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Recursos & Guias
            </h1>
            <p className="text-xl text-muted-foreground">
              Informações completas sobre ar condicionado, energia solar e bombas de calor.
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
              Todos os Artigos
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredArticles.map(article => (
              <Card key={article.id} className="border-slate-200 hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {article.author}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    Ler Artigo Completo →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Respostas Rápidas</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">Quanto custa um sistema de AC?</h3>
              <p className="text-muted-foreground">Sistemas de parede variam de €1.500-€3.000. Contacte-nos para um orçamento gratuito.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">Quanto economizo com solar?</h3>
              <p className="text-muted-foreground">Tipicamente €1.500-€2.500 por ano. Retorno do investimento em 5-8 anos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">Qual é o tempo de instalação?</h3>
              <p className="text-muted-foreground">AC: 1-2 dias. Solar: 3-5 dias. Agendamos num momento conveniente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold text-lg text-secondary mb-2">Oferecem garantia?</h3>
              <p className="text-muted-foreground">Sim, 5 anos de garantia no trabalho e 2-10 anos do fabricante.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Tem Perguntas?</h2>
          <p className="text-xl mb-8 opacity-90">
            Consulte a nossa página de FAQ ou contacte-nos diretamente para mais informações.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/pt-pt/faq" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Ver FAQ
            </a>
            <a href="tel:+351910675168" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Contacte-nos
            </a>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
