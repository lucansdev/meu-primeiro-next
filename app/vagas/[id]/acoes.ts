"use server";

import { revalidatePath } from "next/cache";
import { exigirPapel } from "@/lib/autorizacao";
import { prisma } from "@/lib/prisma";
import { errosDeValidacao, EsquemaDaCandidatura } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function enviarCandidatura(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaCandidatura.safeParse({
    vagaId: dados.get("vagaId"),
    habilidades: dados.getAll("habilidades"),
  });
  const valores = { vagaId: String(dados.get("vagaId") ?? "") };

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  const sessao = await exigirPapel("CANDIDATO");
  const vaga = await prisma.vaga.findFirst({
    where: { id: validacao.data.vagaId, arquivadaEm: null },
    select: { id: true },
  });

  if (!vaga) {
    return { ok: false, erros: { vagaId: "Esta vaga não está mais disponível." }, valores };
  }

  const existente = await prisma.candidatura.findUnique({
    where: { vagaId_candidatoId: { vagaId: vaga.id, candidatoId: sessao.user.id } },
  });
  if (existente) {
    return { ok: false, erros: { vagaId: "Você já se candidatou a esta vaga." }, valores };
  }

  await prisma.candidatura.create({
    data: {
      vagaId: vaga.id,
      candidatoId: sessao.user.id,
      habilidades: validacao.data.habilidades,
    },
  });

  revalidatePath(`/vagas/${vaga.id}`);
  revalidatePath("/painel");
  return { ok: true, erros: {}, valores: {}, mensagem: "Candidatura registrada com sucesso." };
}