import LayoutPT from "@/components/LayoutPT";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CarreirasPT() {
  const jobs = [
    {
      title: "Técnico de Instalação de AC",
      department: "Instalação",
      location: "Algarve",
      type: "Tempo Integral",
      description: "Procuramos técnicos experientes para instalação de sistemas de ar condicionado Daikin."
    },
    {
      title: "Especialista em Energia Solar",
      department: "Energia Renovável",
      location: "Algarve",
      type: "Tempo Integral",
      description: "Junte-se à nossa equipa de energia solar. Experiência com painéis solares e baterias Tesla Powerwall."
    },
    {
      title: "Técnico de Manutenção",
      department: "Serviço",
      location: "Algarve",
      type: "Tempo Integral",
      description: "Responsável pela manutenção e reparação de sistemas AVAC existentes."
    },
    {
      title: "Coordenador de Projetos",
      department: "Administração",
      location: "Algarve",
      type: "Tempo Integral",
      description: "Coordene projetos de instalação e comunique com clientes."
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Formação Contínua",
      description: "Certificações Daikin, Tesla e Huawei patrocinadas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipa Profissional",
      description: "Trabalhe com especialistas dedicados e apaixonados"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Crescimento Profissional",
      description: "Oportunidades de progressão na empresa em crescimento"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Benefícios Competitivos",
      description: "Salário competitivo, benefícios e ambiente de trabalho flexível"
    },
  ];

  return (
    <LayoutPT>
      <Helmet>
        <title>Carreiras | Algarve Seasons - Junte-se à Nossa Equipa</title>
        <meta name="description" content="Explore oportunidades de carreira com Algarve Seasons. Procuramos técnicos, especialistas e coordenadores apaixonados por HVAC e energia renovável." />
        <meta name="keywords" content="Carreiras, Empregos, Algarve Seasons, Técnico, HVAC, Solar" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Carreiras
            </h1>
            <p className="text-xl text-muted-foreground">
              Junte-se à equipa Algarve Seasons e faça parte da revolução de energia renovável e conforto inteligente.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Porque Trabalhar Connosco?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200">
                <CardContent className="pt-6">
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-lg text-secondary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-slate-50">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-secondary">A Nossa Cultura</h2>
            <p className="text-lg text-muted-foreground">
              Na Algarve Seasons, acreditamos que o sucesso vem de uma equipa dedicada, bem treinada e motivada. Investimos no desenvolvimento profissional dos nossos colaboradores e criamos um ambiente onde a inovação e a excelência são valorizadas.
            </p>
            <p className="text-lg text-muted-foreground">
              Somos uma empresa em crescimento, servindo 16 municípios do Algarve com mais de 200 instalações completadas. Procuramos pessoas que partilhem a nossa paixão por qualidade, serviço ao cliente e sustentabilidade.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Ambiente de trabalho colaborativo e inclusivo</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Formação contínua e desenvolvimento profissional</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Oportunidades de progressão de carreira</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Horários flexíveis e equilíbrio trabalho-vida</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Equipa Algarve Seasons" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Posições Abertas</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-secondary mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold">
                    Candidatar-se Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Processo de Candidatura</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg text-secondary mb-2">Submeta CV</h3>
              <p className="text-muted-foreground">Envie o seu CV e carta de apresentação</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg text-secondary mb-2">Entrevista</h3>
              <p className="text-muted-foreground">Conheça a nossa equipa e discuta a posição</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg text-secondary mb-2">Avaliação</h3>
              <p className="text-muted-foreground">Avaliação técnica ou prática conforme necessário</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h3 className="font-bold text-lg text-secondary mb-2">Oferta</h3>
              <p className="text-muted-foreground">Receba a oferta e comece a sua jornada</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Pronto para Começar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Envie o seu CV para Dan@algarveseasons.com ou contacte-nos para mais informações.
          </p>
          <a href="mailto:Dan@algarveseasons.com" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Enviar CV
          </a>
        </div>
      </section>
    </LayoutPT>
  );
}
