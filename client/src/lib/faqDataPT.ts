/**
 * FAQ Data Structure - Portuguese Version
 * 
 * Organized by category with comprehensive Q&A content
 * optimized for SEO and user engagement
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  name: string;
  description: string;
  icon: string;
  items: FAQItem[];
}

export const faqCategoriesPT: FAQCategory[] = [
  {
    name: "Ar Condicionado",
    description: "Perguntas sobre instalação, manutenção e sistemas de arrefecimento",
    icon: "Wind",
    items: [
      {
        id: "ac-1",
        question: "Quais são os benefícios de um sistema de ar condicionado Daikin?",
        answer: "Os sistemas Daikin oferecem eficiência energética superior, funcionamento silencioso, purificação avançada do ar e controlo preciso da temperatura. Como Parceiro Premium Daikin D1+, instalamos sistemas que reduzem o consumo de energia até 40% em comparação com modelos mais antigos, mantendo conforto ideal durante todo o ano. A tecnologia inverter da Daikin ajusta a capacidade de arrefecimento conforme a procura, economizando dinheiro nas contas de eletricidade.",
        category: "Ar Condicionado",
      },
      {
        id: "ac-2",
        question: "Quanto custa a instalação de ar condicionado no Algarve?",
        answer: "Os custos de instalação de AC variam consoante o tipo de sistema, tamanho da propriedade e complexidade. Sistemas de divisão única de parede normalmente variam de €1.500-€3.000, enquanto sistemas multi-divisão para propriedades maiores custam €3.500-€8.000+. Fornecemos orçamentos gratuitos e sem compromisso após avaliar a sua propriedade. O nosso preço inclui instalação profissional, testes e garantia de 5 anos no trabalho.",
        category: "Ar Condicionado",
      },
      {
        id: "ac-3",
        question: "Qual é a diferença entre sistemas de AC de parede, canalizados e multi-divisão?",
        answer: "Os sistemas de parede (split) são ideais para divisões únicas ou espaços abertos, oferecendo fácil instalação e custos mais baixos. Os sistemas canalizados distribuem ar fresco através de condutas ocultas em toda a propriedade, proporcionando arrefecimento uniforme, mas requerendo modificações estruturais. Os sistemas multi-divisão conectam múltiplas unidades interiores a uma unidade exterior, permitindo que diferentes divisões tenham controlo independente de temperatura. Recomendamos multi-divisão para vilas e canalizados para propriedades maiores.",
        category: "Ar Condicionado",
      },
      {
        id: "ac-4",
        question: "Com que frequência devo fazer manutenção do meu sistema de ar condicionado?",
        answer: "Recomendamos manutenção profissional de AC duas vezes por ano: antes do verão (maio) e antes do inverno (outubro). A manutenção regular inclui limpeza de filtros, verificação de refrigerante e diagnósticos do sistema. Isto previne avarias durante épocas de pico, mantém a eficiência energética e prolonga a vida útil do sistema para 15+ anos. Oferecemos pacotes de manutenção a partir de €150 por visita.",
        category: "Ar Condicionado",
      },
    ],
  },
  {
    name: "Energia Solar",
    description: "Perguntas sobre painéis solares, armazenamento em bateria e retorno do investimento",
    icon: "Sun",
    items: [
      {
        id: "solar-1",
        question: "Quanto posso economizar com painéis solares no Algarve?",
        answer: "O Algarve recebe mais de 300 dias de sol por ano, tornando-o ideal para energia solar. Uma instalação típica de 6kW pode gerar €1.500-€2.500 em eletricidade anualmente, dependendo do consumo e da orientação do telhado. Com incentivos governamentais e poupança de energia, o retorno do investimento é normalmente de 5-8 anos. Após esse período, a eletricidade é praticamente gratuita durante os 25+ anos de vida útil do painel.",
        category: "Energia Solar",
      },
      {
        id: "solar-2",
        question: "O que é uma bateria Tesla Powerwall e como funciona?",
        answer: "A Tesla Powerwall é um sistema de armazenamento em bateria que guarda a energia solar que gera durante o dia para uso à noite ou durante períodos nublados. Uma Powerwall de 13,5 kWh pode alimentar uma casa média durante 1-2 dias sem sol. Isto aumenta a independência energética, reduz contas de eletricidade e fornece backup durante cortes de energia. Como instaladores certificados Tesla, oferecemos integração completa com painéis solares.",
        category: "Energia Solar",
      },
      {
        id: "solar-3",
        question: "Quanto espaço de telhado preciso para painéis solares?",
        answer: "Um sistema solar típico de 6kW requer aproximadamente 30-40 m² de espaço de telhado, dependendo da eficiência do painel. A maioria das casas e vilas do Algarve têm telhados suficientes. Também oferecemos soluções de montagem em solo para propriedades com espaço disponível. Durante a consulta gratuita, avaliamos o seu telhado, orientação solar e potencial de sombra para otimizar a produção.",
        category: "Energia Solar",
      },
      {
        id: "solar-4",
        question: "Os painéis solares funcionam em dias nublados?",
        answer: "Sim, os painéis solares produzem eletricidade mesmo em dias nublados, embora com eficiência reduzida (cerca de 25% da produção em dia ensolarado). O Algarve tem dias nublados ocasionais, mas a produção solar anual permanece excelente. Se instalar uma bateria Powerwall, pode armazenar energia de dias ensolarados para usar durante períodos nublados ou à noite.",
        category: "Energia Solar",
      },
    ],
  },
  {
    name: "Bombas de Calor",
    description: "Perguntas sobre sistemas de bombas de calor, eficiência e aquecimento",
    icon: "Zap",
    items: [
      {
        id: "hp-1",
        question: "Como funcionam as bombas de calor ar-ar?",
        answer: "As bombas de calor ar-ar extraem calor do ar exterior (mesmo em temperaturas frias) e transferem-no para o interior da sua casa. No verão, funcionam em modo inverso, arrefecendo como um ar condicionado. São 3-4 vezes mais eficientes do que aquecimento elétrico tradicional, reduzindo custos de energia em 50-70%. Combinadas com painéis solares, proporcionam aquecimento e arrefecimento praticamente gratuitos.",
        category: "Bombas de Calor",
      },
      {
        id: "hp-2",
        question: "Qual é a diferença entre bombas de calor ar-ar e ar-água?",
        answer: "As bombas de calor ar-ar fornecem ar quente/fresco diretamente para as divisões (como um ar condicionado reversível). As bombas de calor ar-água aquecem água que circula através de radiadores ou pisos radiantes, oferecendo aquecimento mais uniforme. As bombas ar-água são ideais para renovações ou novas construções com sistemas de aquecimento por radiador/piso. As bombas ar-ar são mais fáceis de instalar em propriedades existentes.",
        category: "Bombas de Calor",
      },
      {
        id: "hp-3",
        question: "As bombas de calor funcionam bem no clima do Algarve?",
        answer: "Sim, as bombas de calor funcionam excelentemente no Algarve. Os invernos suaves significam que as bombas de calor operam com eficiência máxima durante todo o ano. Mesmo nos raros dias frios (5-10°C), as bombas de calor modernas funcionam eficientemente. Combinadas com ar condicionado para o verão, proporcionam conforto durante todo o ano com custos de energia mínimos.",
        category: "Bombas de Calor",
      },
      {
        id: "hp-4",
        question: "Quanto custa instalar uma bomba de calor?",
        answer: "Uma bomba de calor ar-ar para uma casa média custa €2.500-€5.000 instalada. As bombas ar-água são mais caras (€4.000-€8.000+) devido à complexidade da instalação. Oferecemos financiamento flexível e os custos são rapidamente recuperados através de poupanças de energia. Muitas propriedades qualificam-se para incentivos governamentais que reduzem o custo inicial.",
        category: "Bombas de Calor",
      },
    ],
  },
  {
    name: "Garantia e Serviço",
    description: "Perguntas sobre garantias, manutenção e suporte pós-venda",
    icon: "Shield",
    items: [
      {
        id: "warranty-1",
        question: "Que garantia oferecem nos sistemas instalados?",
        answer: "Oferecemos garantia de 5 anos no trabalho de instalação e 2-10 anos de garantia do fabricante nos equipamentos (dependendo do tipo de sistema). Os sistemas Daikin têm garantia estendida disponível até 10 anos. Isto cobre defeitos de fabrico, problemas de instalação e manutenção regular. Oferecemos pacotes de garantia estendida por uma pequena taxa anual.",
        category: "Garantia e Serviço",
      },
      {
        id: "warranty-2",
        question: "O que está incluído na manutenção anual?",
        answer: "O nosso pacote de manutenção anual inclui: limpeza/substituição de filtros, verificação de refrigerante, inspeção de componentes elétricos, testes de desempenho e limpeza de unidades interiores/exteriores. Isto garante que o seu sistema funciona com eficiência máxima, reduz o risco de avarias e prolonga a vida útil. Oferecemos visitas de manutenção preventiva duas vezes por ano (antes do verão e inverno).",
        category: "Garantia e Serviço",
      },
      {
        id: "warranty-3",
        question: "Oferecem serviço de emergência 24/7?",
        answer: "Sim, oferecemos serviço de emergência de AC dentro de 24 horas nas principais cidades do Algarve (Faro, Lagos, Albufeira, Portimão). Para reparações de emergência, contacte-nos pelo telefone +351 910 675 168. Há uma taxa de chamada de emergência, mas os clientes com contratos de manutenção anual recebem prioridade e descontos.",
        category: "Garantia e Serviço",
      },
      {
        id: "warranty-4",
        question: "Como agendar manutenção ou reparação?",
        answer: "Pode agendar manutenção através do nosso website, telefone (+351 910 675 168) ou email (Dan@algarveseasons.com). Oferecemos horários flexíveis, incluindo fins de semana e feriados. Para reparações de emergência, contacte-nos imediatamente. Normalmente conseguimos agendar visitas de manutenção dentro de 1-2 semanas durante épocas de baixa procura.",
        category: "Garantia e Serviço",
      },
    ],
  },
  {
    name: "Geral",
    description: "Perguntas gerais sobre Algarve Seasons e serviços",
    icon: "MapPin",
    items: [
      {
        id: "general-1",
        question: "Em que áreas do Algarve servem?",
        answer: "Servimos todos os 16 municípios do Algarve: Faro, Lagos, Albufeira, Loulé, Portimão, Tavira, Olhão, Silves, Lagoa, Carriacão, Monchique, Aljezur, Vila do Bispo, Castro Marim, Alcoutim e São Brás. Oferecemos instalação, manutenção e serviço de emergência em toda a região. Consulte a nossa página de Áreas de Serviço para informações específicas da sua localidade.",
        category: "Geral",
      },
      {
        id: "general-2",
        question: "Como obtenho um orçamento gratuito?",
        answer: "Oferecemos consultas e orçamentos gratuitos e sem compromisso. Pode solicitar um orçamento através do nosso website, telefone (+351 910 675 168) ou email (Dan@algarveseasons.com). Um dos nossos especialistas visitará a sua propriedade, avaliará as suas necessidades e fornecerá um orçamento detalhado. O processo normalmente leva 1-2 dias úteis.",
        category: "Geral",
      },
      {
        id: "general-3",
        question: "Qual é o tempo de instalação típico?",
        answer: "O tempo de instalação varia consoante o sistema: um sistema de AC de parede única normalmente leva 1-2 dias, sistemas multi-divisão levam 2-3 dias, e instalações solares levam 3-5 dias. Após a instalação, realizamos testes completos e formação de utilização. Agendamos a instalação num momento conveniente para si, normalmente dentro de 2-4 semanas após aprovação do orçamento.",
        category: "Geral",
      },
      {
        id: "general-4",
        question: "Oferecem financiamento para instalações?",
        answer: "Sim, oferecemos opções de financiamento flexível para todas as instalações. Pode parcelar o custo em 12, 24 ou 36 meses com taxas competitivas. Muitos clientes também qualificam-se para incentivos governamentais que reduzem o custo inicial. Discutiremos opções de financiamento durante a sua consulta gratuita.",
        category: "Geral",
      },
    ],
  },
];
