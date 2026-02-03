import LayoutPT from "@/components/LayoutPT";
import { Helmet } from "react-helmet-async";

export default function PrivacidadePT() {
  return (
    <LayoutPT>
      <Helmet>
        <title>Privacidade & Termos | Algarve Seasons</title>
        <meta name="description" content="Política de Privacidade e Termos de Serviço da Algarve Seasons" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
        <div className="container py-20">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-secondary">
              Privacidade & Termos
            </h1>
            <p className="text-xl text-muted-foreground">
              Informações sobre como protegemos os seus dados e os termos de utilização do nosso serviço.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Privacy Policy */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Política de Privacidade</h2>
              
              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Introdução</h3>
              <p className="text-muted-foreground mb-4">
                A Algarve Seasons ("nós", "nosso" ou "empresa") respeita a privacidade dos nossos clientes e visitantes do website. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e salvaguardamos as suas informações.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Informações que Recolhemos</h3>
              <p className="text-muted-foreground mb-4">Recolhemos informações que voluntariamente nos fornece, incluindo:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Nome, endereço de email e número de telefone</li>
                <li>Endereço da propriedade e tipo de propriedade</li>
                <li>Preferências de serviço e histórico de comunicações</li>
                <li>Informações de pagamento (processadas de forma segura)</li>
                <li>Dados de navegação do website (através de cookies)</li>
              </ul>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Como Utilizamos as Suas Informações</h3>
              <p className="text-muted-foreground mb-4">Utilizamos as suas informações para:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Fornecer os nossos serviços de HVAC e energia renovável</li>
                <li>Responder a consultas e pedidos de orçamento</li>
                <li>Comunicar atualizações de serviço e ofertas especiais</li>
                <li>Melhorar a qualidade dos nossos serviços</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Proteção de Dados</h3>
              <p className="text-muted-foreground mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. As suas informações são armazenadas em servidores seguros com encriptação SSL.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Partilha de Dados</h3>
              <p className="text-muted-foreground mb-4">
                Não vendemos, alugamos ou partilhamos as suas informações pessoais com terceiros, exceto quando necessário para fornecer os nossos serviços (por exemplo, fornecedores de equipamento) ou quando legalmente obrigados.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Cookies</h3>
              <p className="text-muted-foreground mb-4">
                O nosso website utiliza cookies para melhorar a sua experiência. Pode controlar as definições de cookies no seu navegador. A maioria dos navegadores permite rejeitar cookies ou alertá-lo quando um cookie está a ser enviado.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Direitos do Utilizador</h3>
              <p className="text-muted-foreground mb-4">
                Sob a legislação de proteção de dados, tem o direito de aceder, corrigir ou eliminar os seus dados pessoais. Para exercer estes direitos, contacte-nos em Dan@algarveseasons.com.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Contacto</h3>
              <p className="text-muted-foreground mb-4">
                Se tem perguntas sobre esta Política de Privacidade, contacte-nos em:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-muted-foreground"><strong>Algarve Seasons</strong></p>
                <p className="text-muted-foreground">Email: Dan@algarveseasons.com</p>
                <p className="text-muted-foreground">Telefone: +351 910 675 168</p>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="mt-16 pt-16 border-t border-slate-200">
              <h2 className="text-3xl font-bold text-secondary mb-4">Termos de Serviço</h2>
              
              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">1. Aceitação dos Termos</h3>
              <p className="text-muted-foreground mb-4">
                Ao aceder e utilizar este website, aceita estar vinculado por estes Termos de Serviço. Se não concorda com qualquer parte destes termos, não deve utilizar o website.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">2. Serviços Fornecidos</h3>
              <p className="text-muted-foreground mb-4">
                A Algarve Seasons fornece serviços de instalação, manutenção e reparação de sistemas de ar condicionado, energia solar e bombas de calor na região do Algarve. Todos os serviços são fornecidos de acordo com as normas profissionais da indústria.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">3. Orçamentos e Preços</h3>
              <p className="text-muted-foreground mb-4">
                Os orçamentos fornecidos são válidos por 30 dias. Os preços estão sujeitos a alterações sem aviso prévio. Os custos finais podem variar dependendo de fatores descobertos durante a instalação.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">4. Garantia</h3>
              <p className="text-muted-foreground mb-4">
                Oferecemos garantia de 5 anos no trabalho de instalação e garantia do fabricante nos equipamentos (2-10 anos dependendo do tipo). A garantia não cobre danos causados por mau uso, negligência ou falta de manutenção.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">5. Cancelamento e Reembolso</h3>
              <p className="text-muted-foreground mb-4">
                Os clientes podem cancelar serviços agendados com 48 horas de antecedência. Cancelamentos com menos de 48 horas podem estar sujeitos a uma taxa de cancelamento. Reembolsos serão processados dentro de 14 dias úteis.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">6. Responsabilidade Limitada</h3>
              <p className="text-muted-foreground mb-4">
                A Algarve Seasons não é responsável por danos indiretos, incidentais ou consequentes resultantes do uso ou incapacidade de usar os nossos serviços. A nossa responsabilidade total não excede o valor dos serviços fornecidos.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">7. Lei Aplicável</h3>
              <p className="text-muted-foreground mb-4">
                Estes Termos de Serviço são regidos pelas leis de Portugal. Qualquer disputa será resolvida nos tribunais competentes de Portugal.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">8. Alterações aos Termos</h3>
              <p className="text-muted-foreground mb-4">
                Reservamos o direito de alterar estes Termos de Serviço a qualquer momento. As alterações entram em vigor imediatamente após a publicação no website. O uso continuado do website implica aceitação das alterações.
              </p>

              <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">9. Contacto</h3>
              <p className="text-muted-foreground mb-4">
                Para questões sobre estes Termos de Serviço, contacte-nos em:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-muted-foreground"><strong>Algarve Seasons</strong></p>
                <p className="text-muted-foreground">Email: Dan@algarveseasons.com</p>
                <p className="text-muted-foreground">Telefone: +351 910 675 168</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-PT')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutPT>
  );
}
