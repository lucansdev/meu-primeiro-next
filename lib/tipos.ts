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

export interface Empresa {
  id: string;
  nome: string;
  descricao: string;
  localizacao: string;
  site: string;
}

export interface Candidatura {
  vagaId: string;
  nome: string;
  email: string;
  habilidades: string[];
}

export type Estado = {
  ok: boolean;
  erros: Record<string, string>;
  valores: Record<string, string>;
  mensagem?: string;
};
