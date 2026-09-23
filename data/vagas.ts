// Contrato da equipe: o tipo Vaga e a lista de vagas.
// Mudou um campo aqui? Avise as outras frentes antes de subir.

export type Area = "Front-end" | "Back-end" | "Full Stack" | "Dados" | "Design" | "Qualidade";
export type Senioridade = "Estágio" | "Júnior" | "Pleno";
export type Modalidade = "Remoto" | "Híbrido" | "Presencial";

export interface Vaga {
  id: string;
  titulo: string;
  empresa: string;
  area: Area;
  senioridade: Senioridade;
  localizacao: string;
  modalidade: Modalidade;
  aceitaIniciante: boolean;
  tecnologias: string[];
  descricao: string;
  requisitos: string[];
  beneficios: string[];
  publicadoEm: string;
}

export const vagas: Vaga[] = [
  {
    id: "1",
    titulo: "Desenvolvedor(a) Front-end Júnior",
    empresa: "TechStart Soluções",
    area: "Front-end",
    senioridade: "Júnior",
    localizacao: "São Paulo, SP",
    modalidade: "Remoto",
    aceitaIniciante: true,
    tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    descricao:
      "Buscamos uma pessoa desenvolvedora Júnior apaixonada por criar interfaces modernas, acessíveis e responsivas. Você fará parte de um time colaborativo focado em produtos de alto impacto, participando desde a leitura do protótipo no Figma até a revisão de código com pessoas mais experientes. Aqui ninguém espera que você saiba tudo: esperamos curiosidade e vontade de perguntar.",
    requisitos: [
      "Conhecimento em HTML, CSS e JavaScript ES6+",
      "Experiência prática com React ou Next.js",
      "Vontade de aprender e evoluir em equipe",
      "Noções básicas de Git e versionamento",
    ],
    beneficios: ["Horário flexível", "Auxílio home office", "Plano de saúde e odontológico", "Bolsa de estudos"],
    publicadoEm: "Há 2 dias",
  },
  {
    id: "2",
    titulo: "Estagiário(a) de Desenvolvimento Web",
    empresa: "LequeLabs",
    area: "Front-end",
    senioridade: "Estágio",
    localizacao: "Recife, PE",
    modalidade: "Híbrido",
    aceitaIniciante: true,
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Git"],
    descricao:
      "Oportunidade ideal para estudantes em transição de carreira ou nos primeiros períodos da faculdade que desejam aprender desenvolvimento web na prática. Você vai começar corrigindo pequenos bugs de layout, passar a construir páginas completas e terá uma mentora dedicada para acompanhar sua evolução semana a semana, com metas claras e conversas de feedback.",
    requisitos: [
      "Estar cursando Ciência da Computação, Análise de Sistemas ou áreas correlatas",
      "Conhecimentos básicos de lógica de programação",
      "Boa comunicação e proatividade",
    ],
    beneficios: ["Bolsa auxílio compatível", "Mentoria individualizada", "Vale transporte e refeição"],
    publicadoEm: "Há 1 dia",
  },
  {
    id: "3",
    titulo: "Desenvolvedor(a) Full Stack Júnior",
    empresa: "InovaTech Software",
    area: "Full Stack",
    senioridade: "Júnior",
    localizacao: "Florianópolis, SC",
    modalidade: "Remoto",
    aceitaIniciante: true,
    tecnologias: ["Node.js", "React", "TypeScript", "PostgreSQL"],
    descricao:
      "Vaga para quem curte trabalhar do front ao back! Você participará da construção de APIs RESTful e das interfaces administrativas que consomem essas APIs, entendendo o caminho completo de um dado: do formulário na tela até a tabela no banco. O time trabalha com pareamento frequente, então você nunca vai ficar sozinha diante de uma tarefa nova.",
    requisitos: [
      "Domínio de JavaScript / TypeScript",
      "Bons conhecimentos de SQL e bancos relacionais",
      "Compreensão sobre consumo e criação de APIs",
    ],
    beneficios: ["Equipamento fornecido pela empresa", "Seguro de vida", "Day off no aniversário"],
    publicadoEm: "Há 3 dias",
  },
  {
    id: "4",
    titulo: "Desenvolvedor(a) React / Front-end Pleno",
    empresa: "ConectaVagas",
    area: "Front-end",
    senioridade: "Pleno",
    localizacao: "Belo Horizonte, MG",
    modalidade: "Presencial",
    aceitaIniciante: false,
    tecnologias: ["React", "Next.js", "Zustand", "Jest"],
    descricao:
      "Procuramos profissional com experiência prévia na construção de aplicações web de médio a grande porte. Você será responsável por decisões de arquitetura no front-end, pela definição de padrões de componentes e testes, e por apoiar as pessoas júniores do time com revisões de código cuidadosas. A vaga exige autonomia para conduzir entregas de ponta a ponta.",
    requisitos: [
      "Experiência sólida com React e Next.js App Router",
      "Conhecimento de testes automatizados",
      "Boas práticas de arquitetura front-end",
    ],
    beneficios: ["Plano de saúde nacional", "VR/VA generoso", "Plano de carreira estruturado"],
    publicadoEm: "Há 5 dias",
  },
  {
    id: "5",
    titulo: "Desenvolvedor(a) Back-end Júnior (Node.js)",
    empresa: "PagaFácil Fintech",
    area: "Back-end",
    senioridade: "Júnior",
    localizacao: "Curitiba, PR",
    modalidade: "Híbrido",
    aceitaIniciante: false,
    tecnologias: ["Node.js", "NestJS", "PostgreSQL", "Docker"],
    descricao:
      "Nosso time de pagamentos está crescendo e precisa de alguém para evoluir os serviços que processam milhares de transações por dia. Você vai escrever endpoints, criar migrações de banco, cobrir regras de negócio com testes e acompanhar métricas em produção. Pedimos pelo menos um projeto real publicado com Node.js, pois o ritmo do time é intenso.",
    requisitos: [
      "Pelo menos um projeto em Node.js publicado",
      "Noções de modelagem de banco relacional",
      "Familiaridade com testes unitários",
    ],
    beneficios: ["PLR semestral", "Gympass", "Auxílio educação"],
    publicadoEm: "Há 4 dias",
  },
  {
    id: "6",
    titulo: "Engenheiro(a) de Software Back-end Pleno (Java)",
    empresa: "LogiRota",
    area: "Back-end",
    senioridade: "Pleno",
    localizacao: "Campinas, SP",
    modalidade: "Remoto",
    aceitaIniciante: false,
    tecnologias: ["Java", "Spring Boot", "Kafka", "AWS"],
    descricao:
      "A LogiRota calcula rotas de entrega para centenas de transportadoras e precisa de uma pessoa Pleno para cuidar dos microsserviços de roteirização. Você vai desenhar integrações orientadas a eventos com Kafka, melhorar a observabilidade dos serviços na AWS e participar das decisões técnicas do squad, sempre documentando as escolhas para o restante da equipe.",
    requisitos: [
      "Experiência de 3 anos ou mais com Java e Spring",
      "Vivência com mensageria (Kafka ou RabbitMQ)",
      "Conhecimento de serviços AWS",
    ],
    beneficios: ["Salário em faixa de mercado", "Stock options", "Plano de saúde sem coparticipação"],
    publicadoEm: "Há 1 semana",
  },
  {
    id: "7",
    titulo: "Estagiário(a) de Dados",
    empresa: "Varejo Mais",
    area: "Dados",
    senioridade: "Estágio",
    localizacao: "Salvador, BA",
    modalidade: "Híbrido",
    aceitaIniciante: true,
    tecnologias: ["SQL", "Python", "Excel", "Power BI"],
    descricao:
      "Quer entender como uma rede de lojas decide o que colocar na prateleira? No estágio de dados você vai montar consultas SQL, limpar planilhas de vendas com Python e construir os primeiros painéis no Power BI que a diretoria olha toda segunda-feira. Não exigimos experiência anterior: oferecemos uma trilha de formação de quatro semanas antes da primeira entrega.",
    requisitos: [
      "Estar cursando graduação em qualquer área",
      "Gosto por números e organização",
      "Excel básico",
    ],
    beneficios: ["Bolsa auxílio", "Trilha de formação paga", "Desconto nas lojas da rede"],
    publicadoEm: "Há 2 dias",
  },
  {
    id: "8",
    titulo: "Analista de Dados Júnior",
    empresa: "SaúdeConecta",
    area: "Dados",
    senioridade: "Júnior",
    localizacao: "Porto Alegre, RS",
    modalidade: "Remoto",
    aceitaIniciante: true,
    tecnologias: ["SQL", "Python", "pandas", "Metabase"],
    descricao:
      "A SaúdeConecta liga pacientes a clínicas de todo o país e quer uma pessoa analista júnior para transformar dados de agendamento em decisões. Você vai investigar por que consultas são canceladas, montar relatórios semanais no Metabase e apresentar descobertas para os times de produto. Pessoas vindas de outras carreiras são muito bem-vindas por aqui.",
    requisitos: [
      "SQL intermediário (JOINs e agregações)",
      "Python com pandas em projetos de estudo",
      "Capacidade de explicar números para quem não é da área",
    ],
    beneficios: ["Plano de saúde premium", "Terapia online subsidiada", "Auxílio home office"],
    publicadoEm: "Há 6 dias",
  },
  {
    id: "9",
    titulo: "Engenheiro(a) de Dados Pleno",
    empresa: "AgroSense",
    area: "Dados",
    senioridade: "Pleno",
    localizacao: "Goiânia, GO",
    modalidade: "Híbrido",
    aceitaIniciante: false,
    tecnologias: ["Python", "Airflow", "Spark", "GCP"],
    descricao:
      "Sensores espalhados por fazendas de três estados geram milhões de leituras por hora, e precisamos de alguém para construir os pipelines que levam esses dados até os modelos de previsão de safra. Você será dona dos DAGs no Airflow, cuidará da qualidade dos dados e trabalhará lado a lado com o time de ciência de dados para colocar modelos em produção.",
    requisitos: [
      "Experiência com orquestração de pipelines (Airflow ou similar)",
      "Processamento distribuído com Spark",
      "Vivência em nuvem, de preferência GCP",
    ],
    beneficios: ["Bônus anual", "Plano de saúde e odontológico", "Viagens a campo custeadas"],
    publicadoEm: "Há 3 dias",
  },
  {
    id: "10",
    titulo: "Designer UX/UI Júnior",
    empresa: "EducaApp",
    area: "Design",
    senioridade: "Júnior",
    localizacao: "Fortaleza, CE",
    modalidade: "Remoto",
    aceitaIniciante: true,
    tecnologias: ["Figma", "Design System", "Pesquisa com usuários"],
    descricao:
      "O EducaApp ajuda professores da rede pública a planejar aulas, e queremos uma pessoa designer júnior para deixar essa experiência mais simples. Você vai conduzir entrevistas com docentes, desenhar fluxos no Figma, testar protótipos e evoluir nosso design system junto com o time de front-end. Um portfólio com estudos de caso pessoais já é suficiente.",
    requisitos: [
      "Portfólio com pelo menos dois estudos de caso",
      "Domínio do Figma",
      "Interesse em educação e acessibilidade",
    ],
    beneficios: ["Horário flexível", "Licença de cursos online", "Auxílio internet"],
    publicadoEm: "Há 1 dia",
  },
  {
    id: "11",
    titulo: "Product Designer Pleno",
    empresa: "MoveCity",
    area: "Design",
    senioridade: "Pleno",
    localizacao: "Rio de Janeiro, RJ",
    modalidade: "Presencial",
    aceitaIniciante: false,
    tecnologias: ["Figma", "Maze", "Hotjar", "Design System"],
    descricao:
      "A MoveCity opera bicicletas e patinetes compartilhados e busca uma pessoa Product Designer Pleno para liderar a experiência do aplicativo de locação. Você vai definir hipóteses com produto, rodar testes de usabilidade nas ruas da cidade, medir o impacto de cada mudança e garantir a consistência do design system entre as plataformas iOS e Android.",
    requisitos: [
      "Experiência de 3 anos ou mais com produto digital",
      "Condução de testes de usabilidade",
      "Familiaridade com métricas de produto",
    ],
    beneficios: ["Participação nos lucros", "Passe livre nos modais da empresa", "Plano de saúde"],
    publicadoEm: "Há 1 semana",
  },
  {
    id: "12",
    titulo: "Analista de Qualidade (QA) Júnior",
    empresa: "Bitwise Games",
    area: "Qualidade",
    senioridade: "Júnior",
    localizacao: "Manaus, AM",
    modalidade: "Híbrido",
    aceitaIniciante: true,
    tecnologias: ["Cypress", "Postman", "Jira", "JavaScript"],
    descricao:
      "Antes de cada lançamento, alguém precisa tentar quebrar o jogo de todas as formas possíveis, e essa pessoa pode ser você. Na vaga de QA júnior você vai escrever casos de teste, reportar bugs com passos claros de reprodução, testar APIs com Postman e, aos poucos, automatizar os fluxos mais importantes com Cypress, acompanhada por uma QA sênior.",
    requisitos: [
      "Atenção a detalhes e escrita clara",
      "Noções de JavaScript",
      "Curiosidade para entender como os sistemas funcionam",
    ],
    beneficios: ["Vale cultura", "Jogos da casa liberados", "Plano odontológico"],
    publicadoEm: "Há 4 dias",
  },
];
