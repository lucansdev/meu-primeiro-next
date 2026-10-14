"use server";

import { revalidatePath } from "next/cache";
import { podeGerenciarVaga } from "@/lib/autorizacao";
import { prisma } from "@/lib/prisma";
import { errosDeValidacao, EsquemaDeArquivamento } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function arquivar(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDeArquivamento.safeParse(Object.fromEntries(dados));
  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores: {} };
  }

  if (!(await podeGerenciarVaga(validacao.data.id))) {
    return { ok: false, erros: {}, valores: {}, mensagem: "Você não pode arquivar esta vaga." };
  }

  await prisma.vaga.update({
    where: { id: validacao.data.id },
    data: { arquivadaEm: new Date() },
  });

  revalidatePath("/vagas");
  revalidatePath(`/vagas/${validacao.data.id}`);
  revalidatePath("/painel");
  return { ok: true, erros: {}, valores: {}, mensagem: "Vaga arquivada." };
}