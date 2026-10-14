"use server";

import { Prisma } from "@prisma/client";
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
  try {
    const disponivel = await prisma.$transaction(async (transacao) => {
      // O arquivamento atualiza a mesma linha e aguarda este bloqueio.
      const vagas = await transacao.$queryRaw<{ id: string }[]>`
        SELECT "id" FROM "Vaga"
        WHERE "id" = ${validacao.data.vagaId} AND "arquivadaEm" IS NULL
        FOR UPDATE
      `;
      if (vagas.length === 0) return false;

      await transacao.candidatura.create({
        data: {
          vagaId: validacao.data.vagaId,
          candidatoId: sessao.user.id,
          habilidades: validacao.data.habilidades,
        },
      });
      return true;
    });
    if (!disponivel) {
      return { ok: false, erros: { vagaId: "Esta vaga não está mais disponível." }, valores };
    }
  } catch (erro) {
    if (erro instanceof Prisma.PrismaClientKnownRequestError && erro.code === "P2002") {
      return { ok: false, erros: { vagaId: "Você já se candidatou a esta vaga." }, valores };
    }
    throw erro;
  }

  revalidatePath(`/vagas/${validacao.data.vagaId}`);
  revalidatePath("/painel");
  return { ok: true, erros: {}, valores: {}, mensagem: "Candidatura registrada com sucesso." };
}