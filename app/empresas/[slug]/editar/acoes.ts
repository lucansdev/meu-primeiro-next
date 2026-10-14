"use server";

import { revalidatePath } from "next/cache";
import { podeEditarEmpresa } from "@/lib/autorizacao";
import { prisma } from "@/lib/prisma";
import { errosDeValidacao, EsquemaDaEmpresa } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function salvarEmpresa(slug: string, _estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const validacao = EsquemaDaEmpresa.safeParse(Object.fromEntries(dados));
  const valores = Object.fromEntries(
    [...dados.entries()].map(([chave, valor]) => [chave, String(valor)]),
  ) as Record<string, string>;

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  if (!(await podeEditarEmpresa(slug))) {
    return { ok: false, erros: {}, valores, mensagem: "Você não pode editar esta empresa." };
  }

  await prisma.empresa.update({ where: { id: slug }, data: validacao.data });
  revalidatePath("/empresas");
  revalidatePath(`/empresas/${slug}`);
  revalidatePath(`/empresas/${slug}/editar`);
  revalidatePath("/painel");
  return { ok: true, erros: {}, valores: {}, mensagem: "Perfil atualizado." };
}