"use server";

import { revalidatePath } from "next/cache";
import { buscarEmpresaPorId, guardarEmpresa } from "@/lib/api";
import { errosDeValidacao, EsquemaDaEmpresa } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function salvarEmpresa(slug: string, _estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaEmpresa.safeParse(Object.fromEntries(dados));
  const valores = Object.entries(Object.fromEntries(dados)).reduce<Record<string, string>>((acc, [chave, valor]) => {
    acc[chave] = String(valor);
    return acc;
  }, {});

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  const empresa = await buscarEmpresaPorId(slug);
  if (!empresa) {
    return { ok: false, erros: {}, valores, mensagem: "Empresa não encontrada." };
  }

  guardarEmpresa({ ...empresa, ...validacao.data });
  // A lista e o perfil são rotas distintas; atualizar só uma manteria a outra desatualizada.
  revalidatePath("/empresas");
  revalidatePath(`/empresas/${slug}`);
  revalidatePath(`/empresas/${slug}/editar`);
  return { ok: true, erros: {}, valores: {}, mensagem: "Perfil atualizado." };
}
