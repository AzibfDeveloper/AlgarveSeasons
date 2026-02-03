import LayoutPT from "@/components/LayoutPT";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function DepoimentosPT() {
  const testimonials = [
    {
      name: "Rachel Wilson",
      location: "Albufeira",
      rating: 5,
      text: "Algarve Seasons instalou um sistema solar completo com bateria Tesla Powerwall na minha villa. A qualidade do trabalho foi impecável e agora economizo mais de €200 por mês em eletricidade. Recomendo vivamente!",
      image: "👩‍💼"
    },
    {
      name: "João Silva",
      location: "Faro",
      rating: 5,
      text: "Tive uma avaria de ar condicionado no meio do verão. A Algarve Seasons respondeu dentro de 24 horas e resolveu o problema rapidamente. Serviço profissional e preço justo. Muito satisfeito!",
      image: "👨‍💼"
    },
    {
      name: "Maria Santos",
      location: "Lagos",
      rating: 5,
      text: "Instalaram uma bomba de calor na minha casa e a diferença é notável. O inverno é agora confortável sem custos de energia elevados. A equipa foi muito educada e profissional.",
      image: "👩‍🦰"
    },
    {
      name: "David Thompson",
      location: "Vilamoura",
      rating: 5,
      text: "Como gestor de propriedades, confio na Algarve Seasons para manutenção de todos os sistemas de ar condicionado. Nunca tivemos problemas e os hóspedes sempre comentam o conforto das casas.",
      image: "👨‍💼"
    },
    {
      name: "Ana Costa",
      location: "Portimão",
      rating: 5,
      text: "O processo de instalação foi muito bem organizado. A equipa explicou tudo claramente e o resultado superou as minhas expectativas. Recomendo a Algarve Seasons a todos os meus amigos!",
      image: "👩‍🦱"
    },
    {
      name: "Carlos Ferreira",
      location: "Loulé",
      rating: 5,
      text: "Parceiros Daikin D1+ certificados. Isso diz tudo. Instalaram um sistema multi-divisão na minha casa e funciona perfeitamente. Profissionalismo de topo!",
      image: "👨‍🦱"
    },
  ];

  return (
    <LayoutPT>
      <Helmet>
        <title>Depoimentos | Algarve Seasons - Avaliações de Clientes</title>
        <meta name="description" content="Leia depoimentos de clientes satisfeitos sobre os serviços de ar condicionado, energia solar e bombas de calor da Algarve Seasons." />
        <meta name="keywords" content="Depoimentos, Avaliações, Clientes Algarve Seasons, Ar Condicionado, Solar" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Depoimentos de Clientes
            </h1>
            <p className="text-xl text-muted-foreground">
              Veja o que os nossos clientes satisfeitos dizem sobre os nossos serviços.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Por Números</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-lg text-muted-foreground">Instalações Completas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5★</div>
              <p className="text-lg text-muted-foreground">Avaliação Média</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">16</div>
              <p className="text-lg text-muted-foreground">Municípios Servidos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">8+</div>
              <p className="text-lg text-muted-foreground">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Junte-se aos Nossos Clientes Satisfeitos</h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenha um orçamento gratuito e descubra porque é que tantos clientes confiam em nós.
          </p>
          <a href="tel:+351910675168" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contacte-nos Agora
          </a>
        </div>
      </section>
    </LayoutPT>
  );
}
