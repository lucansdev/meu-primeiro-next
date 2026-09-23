"use server";

import { revalidatePath } from "next/cache";
import { arquivarVaga, buscarVaga } from "@/lib/api";
import { errosDeValidacao, EsquemaDeArquivamento } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function arquivar(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDeArquivamento.safeParse(Object.fromEntries(dados));
  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores: {} };
  }
  if (!(await buscarVaga(validacao.data.id))) {
    return { ok: false, erros: { id: "Esta vaga não está disponível." }, valores: {} };
  }

  arquivarVaga(validacao.data.id);
  revalidatePath("/vagas");
  revalidatePath(`/vagas/${validacao.data.id}`);
  return { ok: true, erros: {}, valores: {}, mensagem: "Vaga arquivada." };
}
