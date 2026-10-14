import { prisma } from "@/lib/prisma";
import type { Empresa, Vaga } from "@/lib/tipos";

function formatarData(data: Date) {
  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(data);
}

function paraVaga(vaga: {
  id: string;
  empresaId: string;
  titulo: string;
  area: string;
  senioridade: string;
  localizacao: string;
  modalidade: string;
  aceitaIniciante: boolean;
  tecnologias: string[];
  descricao: string;
  requisitos: string[];
  beneficios: string[];
  publicadoEm: Date;
  empresa: { nome: string };
}): Vaga {
  return {
    id: vaga.id,
    empresaId: vaga.empresaId,
    titulo: vaga.titulo,
    empresa: vaga.empresa.nome,
    area: vaga.area as Vaga["area"],
    senioridade: vaga.senioridade as Vaga["senioridade"],
    localizacao: vaga.localizacao,
    modalidade: vaga.modalidade as Vaga["modalidade"],
    aceitaIniciante: vaga.aceitaIniciante,
    tecnologias: vaga.tecnologias,
    descricao: vaga.descricao,
    requisitos: vaga.requisitos,
    beneficios: vaga.beneficios,
    publicadoEm: formatarData(vaga.publicadoEm),
  };
}

function paraEmpresa(empresa: {
  id: string;
  nome: string;
  descricao: string;
  localizacao: string;
  site: string;
}): Empresa {
  return empresa;
}

export async function listarVagas() {
  const vagas = await prisma.vaga.findMany({
    where: { arquivadaEm: null },
    include: { empresa: { select: { nome: true } } },
    orderBy: { publicadoEm: "desc" },
  });

  return vagas.map(paraVaga);
}

export async function buscarVaga(id: string) {
  const vaga = await prisma.vaga.findFirst({
    where: { id, arquivadaEm: null },
    include: { empresa: { select: { nome: true } } },
  });

  return vaga ? paraVaga(vaga) : undefined;
}

export async function listarEmpresas() {
  const empresas = await prisma.empresa.findMany({ orderBy: { nome: "asc" } });
  return empresas.map(paraEmpresa);
}

export async function buscarEmpresaPorId(id: string) {
  const empresa = await prisma.empresa.findUnique({ where: { id } });
  return empresa ? paraEmpresa(empresa) : undefined;
}