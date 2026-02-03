import LayoutPT from "@/components/LayoutPT";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Award, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function SobrePT() {
  return (
    <LayoutPT>
      <Helmet>
        <title>Sobre Algarve Seasons | Parceiro Daikin D1+ e Especialistas AVAC</title>
        <meta name="description" content="Conheça a Algarve Seasons, a principal fornecedora de soluções AVAC e energia renovável no Algarve. Parceiro Daikin D1+, Certificado Tesla, servindo desde 2016." />
        <meta name="keywords" content="Sobre Algarve Seasons, empresa AVAC Algarve, parceiro Daikin, fornecedor energia solar" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Sobre Algarve Seasons
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos a principal fornecedora de soluções AVAC e energia renovável do Algarve, dedicada a entregar conforto premium e eficiência energética a casas e negócios em todos os 16 municípios.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold text-secondary">A Nossa História</h2>
            <p className="text-lg text-muted-foreground">
              Fundada em 2016, a Algarve Seasons começou com uma missão simples: fornecer soluções de ar condicionado, energia solar e bombas de calor de classe mundial à região do Algarve. O que começou como uma pequena equipa de instalação cresceu para se tornar a fornecedora de AVAC e energia renovável mais confiável da região.
            </p>
            <p className="text-lg text-muted-foreground">
              Reconhecemos que o clima único do Algarve—com verões escaldantes e invernos suaves—exigia conhecimento especializado. A nossa equipa investiu em certificações da Daikin, Tesla e Huawei para se tornar os instaladores mais qualificados da região.
            </p>
            <p className="text-lg text-muted-foreground">
              Hoje, completámos mais de 200 instalações e servimos proprietários de casas, gestores de vilas e empresas em toda a região do Algarve com o mesmo compromisso com a qualidade e o serviço que nos definiu desde o primeiro dia.
            </p>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/images/hero-villa-solar.jpg" 
              alt="Equipa Algarve Seasons" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Porque Escolher Algarve Seasons?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Parceiros Certificados</h3>
                <p className="text-muted-foreground">
                  Parceiro Oficial Daikin D1+, Certificado Tesla e instalador autorizado Huawei.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Conhecimento Local</h3>
                <p className="text-muted-foreground">
                  Compreensão profunda do clima do Algarve, tipos de propriedades e necessidades energéticas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Resposta Rápida</h3>
                <p className="text-muted-foreground">
                  Reparação de AC de emergência dentro de 24 horas nas principais cidades do Algarve.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200">
              <CardContent className="pt-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-bold text-lg text-secondary mb-2">Serviço 5 Estrelas</h3>
                <p className="text-muted-foreground">
                  Avaliações consistentemente top-rated de proprietários de vilas e gestores de propriedades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-display font-bold text-secondary mb-16 text-center">Os Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Ar Condicionado</h3>
              <p className="text-muted-foreground">
                Instalações premium Daikin e Mitsubishi incluindo unidades de parede, sistemas multi-divisão e soluções VRV para propriedades grandes.
              </p>
              <Link href="/pt-pt/servicos/ar-condicionado">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Saiba Mais →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Energia Solar</h3>
              <p className="text-muted-foreground">
                Sistemas fotovoltaicos, armazenamento em bateria Tesla Powerwall e inversores Huawei para maximizar o seu sol do Algarve.
              </p>
              <Link href="/pt-pt/servicos/energia-solar">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Saiba Mais →
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Bombas de Calor</h3>
              <p className="text-muted-foreground">
                Sistemas eficientes de bombas de calor ar-água e ar-ar para conforto durante todo o ano e contas de energia mais baixas.
              </p>
              <Link href="/pt-pt/servicos/bombas-calor">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Saiba Mais →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-display font-bold mb-6">Pronto para Trabalhar com Algarve Seasons?</h2>
          <p className="text-xl mb-8 opacity-90">
            Obtenha uma consulta gratuita e descubra como podemos otimizar o clima e a eficiência energética da sua casa.
          </p>
          <Link href="/pt-pt/contacto">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 h-14 px-8 text-lg font-bold">
              Obtenha o Seu Orçamento Gratuito
            </Button>
          </Link>
        </div>
      </section>
    </LayoutPT>
  );
}
