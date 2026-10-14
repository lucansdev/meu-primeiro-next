"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { empresaDaSessao } from "@/lib/autorizacao";
import { errosDeValidacao, EsquemaDaVaga } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function criarVaga(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaVaga.safeParse(Object.fromEntries(dados));
  const valores = Object.fromEntries(
    [...dados.entries()].map(([chave, valor]) => [chave, String(valor)]),
  ) as Record<string, string>;

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  const empresa = await empresaDaSessao();
  const vaga = await prisma.vaga.create({
    data: {
      ...validacao.data,
      aceitaIniciante: validacao.data.aceitaIniciante === "sim",
      empresaId: empresa.id,
      tecnologias: [],
      requisitos: [],
      beneficios: [],
    },
  });

  revalidatePath("/vagas");
  revalidatePath("/painel");
  redirect(`/vagas/${vaga.id}`);
}