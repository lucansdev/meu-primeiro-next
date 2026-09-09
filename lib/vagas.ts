export interface Vaga {
  id: string;
  titulo: string;
  empresa: string;
  localizacao: string;
  modalidade: "Remoto" | "Híbrido" | "Presencial";
  senioridade: "Estágio" | "Júnior" | "Pleno";
  tecnologias: string[];
  descricao: string;
  requisitos: string[];
  beneficios: string[];
  publicadoEm: string;
}

export const VAGAS_MOCK: Vaga[] = [
  {
    id: "1",
    titulo: "Desenvolvedor(a) Front-end Júnior",
    empresa: "TechStart Soluções",
    localizacao: "São Paulo, SP",
    modalidade: "Remoto",
    senioridade: "Júnior",
    tecnologias: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    descricao: "Buscamos uma pessoa desenvolvedora Júnior apaixonada por criar interfaces modernas, acessíveis e responsivas. Você fará parte de um time colaborativo focado em produtos de alto impacto.",
    requisitos: [
      "Conhecimento em HTML, CSS e JavaScript ES6+",
      "Experiência prática com React ou Next.js",
      "Vontade de aprender e evoluir em equipe",
      "Noções básicas de Git e versionamento"
    ],
    beneficios: ["Horário flexível", "Auxílio home office", "Plano de saúde e odontológico", "Bolsa de estudos"],
    publicadoEm: "Há 2 dias"
  },
  {
    id: "2",
    titulo: "Estagiário(a) de Desenvolvimento Web",
    empresa: "LequeLabs",
    localizacao: "Recife, PE",
    modalidade: "Híbrido",
    senioridade: "Estágio",
    tecnologias: ["HTML5", "CSS3", "JavaScript", "Git"],
    descricao: "Oportunidade ideal para estudantes em transição de carreira ou primeiros períodos da faculdade que desejam aprender desenvolvimento web na prática.",
    requisitos: [
      "Estar cursando Ciência da Computação, Análise de Sistemas ou áreas correlas",
      "Conhecimentos básicos de lógica de programação",
      "Boa comunicação e proatividade"
    ],
    beneficios: ["Bolsa auxílio compatível", "Mentoria individualizada", "Vale transporte e refeição"],
    publicadoEm: "Há 1 dia"
  },
  {
    id: "3",
    titulo: "Desenvolvedor(a) Full Stack Júnior",
    empresa: "InovaTech Software",
    localizacao: "Florianópolis, SC",
    modalidade: "Remoto",
    senioridade: "Júnior",
    tecnologias: ["Node.js", "React", "TypeScript", "PostgreSQL"],
    descricao: "Vaga para quem curte trabalhar do front ao back! Você participará da construção de APIs RESTful e interfaces administrativas.",
    requisitos: [
      "Domínio de JavaScript / TypeScript",
      "Bons conhecimentos de SQL e bancos relacionais",
      "Compreensão sobre consumo e criação de APIs"
    ],
    beneficios: ["Equipamento fornecido pela empresa", "Seguro de vida", "Day off no aniversário"],
    publicadoEm: "Há 3 dias"
  },
  {
    id: "4",
    titulo: "Desenvolvedor(a) React / Front-end Pleno",
    empresa: "ConectaVagas",
    localizacao: "Belo Horizonte, MG",
    modalidade: "Presencial",
    senioridade: "Pleno",
    tecnologias: ["React", "Next.js", "State Management", "Jest"],
    descricao: "Procuramos profissional com experiência prévia na construção de aplicações web de médio a grande porte.",
    requisitos: [
      "Experiência sólida com React e Next.js App Router",
      "Conhecimento de testes automatizados",
      "Boas práticas de arquitetura front-end"
    ],
    beneficios: ["Plano de saúde nacional", "VR/VA generoso", "Plano de carreira estruturado"],
    publicadoEm: "Há 5 dias"
  }
];

export async function getVagas(): Promise<Vaga[]> {
  // Simular delay de rede (Aula 04 Data Fetching)
  await new Promise((resolve) => setTimeout(resolve, 800));
  return VAGAS_MOCK;
}

export async function getVagaById(id: string): Promise<Vaga | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return VAGAS_MOCK.find((vaga) => vaga.id === id);
}
