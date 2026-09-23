"use server";

import { revalidatePath } from "next/cache";
import { buscarVaga, guardarCandidatura } from "@/lib/api";
import { errosDeValidacao, EsquemaDaCandidatura } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function enviarCandidatura(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaCandidatura.safeParse({
    vagaId: dados.get("vagaId"),
    nome: dados.get("nome"),
    email: dados.get("email"),
    habilidades: dados.getAll("habilidades"),
  });
  const valores = {
    vagaId: String(dados.get("vagaId") ?? ""),
    nome: String(dados.get("nome") ?? ""),
    email: String(dados.get("email") ?? ""),
  };

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }
  if (!(await buscarVaga(validacao.data.vagaId))) {
    return { ok: false, erros: { vagaId: "Esta vaga não está mais disponível." }, valores };
  }

  guardarCandidatura(validacao.data);
  revalidatePath(`/vagas/${validacao.data.vagaId}`);
  return { ok: true, erros: {}, valores: {}, mensagem: "Candidatura registrada com sucesso." };
}
