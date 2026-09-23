"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { guardarVaga, buscarEmpresaPorId } from "@/lib/api";
import { errosDeValidacao, EsquemaDaVaga } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function criarVaga(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaVaga.safeParse(Object.fromEntries(dados));
  const valores = Object.entries(Object.fromEntries(dados)).reduce<Record<string, string>>((acc, [chave, valor]) => {
    acc[chave] = String(valor);
    return acc;
  }, {});

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  const empresa = await buscarEmpresaPorId(validacao.data.empresaId);
  if (!empresa) {
    return { ok: false, erros: { empresaId: "Selecione uma empresa existente." }, valores };
  }

  const vaga = {
    id: crypto.randomUUID(),
    titulo: validacao.data.titulo,
    empresa: empresa.nome,
    area: validacao.data.area,
    senioridade: validacao.data.senioridade,
    localizacao: validacao.data.localizacao,
    modalidade: validacao.data.modalidade,
    aceitaIniciante: validacao.data.aceitaIniciante === "sim",
    descricao: validacao.data.descricao,
    tecnologias: [],
    requisitos: [],
    beneficios: [],
    publicadoEm: "agora",
  };

  guardarVaga(vaga);
  revalidatePath("/vagas");
  redirect(`/vagas/${vaga.id}`);
}
