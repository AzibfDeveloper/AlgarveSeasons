import { Star, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    author: "Dan e Equipa Cliente",
    text: "O Dan e a sua equipa são fiáveis, organizados, eficientes e simpáticos. O nosso novo sistema é economicamente eficiente. Altamente recomendado!",
    rating: 5,
    source: "Google Review"
  },
  {
    id: 2,
    author: "Cliente Air to Heat",
    text: "Bom serviço e instalação. A equipa da Air to Heat fez um bom trabalho. Serviço profissional e eficiente.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: 3,
    author: "Residente no Algarve",
    text: "Os trabalhos foram muito profissionais, os preços razoáveis, encontraram o problema imediatamente e resolveram-no. Recomendo VIVAMENTE!",
    rating: 5,
    source: "Google Review"
  }
];

export default function ReviewsPT() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              Testemunhos de Clientes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-outfit">
            A Confiança de Proprietários em Todo o Algarve
          </h2>
          <p className="text-lg text-slate-600">
            Veja o que os nossos clientes dizem sobre as nossas instalações premium de AVAC e Solar. 
            Orgulhamo-nos do nosso serviço 5 estrelas e assistência pós-venda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow">
              <MessageSquareQuote className="absolute top-8 right-8 w-10 h-10 text-orange-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{review.author}</div>
                  <div className="text-sm text-slate-500">{review.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
          >
            <a 
              href="https://share.google/zKoB6d1XPTznmOjkt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src="/google-logo.svg" alt="Google" className="w-5 h-5" onError={(e) => e.currentTarget.style.display = 'none'} />
              Ler Mais Avaliações no Google
            </a>
          </Button>
          <div className="mt-4 text-sm text-slate-500">
            Já trabalhámos juntos? <a href="https://share.google/zKoB6d1XPTznmOjkt" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Deixe-nos uma avaliação</a>
          </div>
        </div>
      </div>
    </section>
  );
}
