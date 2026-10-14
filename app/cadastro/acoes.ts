"use server";

import { Prisma } from "@prisma/client";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { errosDeValidacao, EsquemaDeCadastro } from "@/lib/esquemas";
import type { Estado } from "@/lib/tipos";

export async function cadastrar(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  const valores = Object.fromEntries(
    ["nome", "email", "papel", "nomeDaEmpresa"].map((campo) => [campo, String(dados.get(campo) ?? "")]),
  );
  const validacao = EsquemaDeCadastro.safeParse({ ...valores, senha: dados.get("senha") });

  if (!validacao.success) {
    return { ok: false, erros: errosDeValidacao(validacao.error), valores };
  }

  const email = validacao.data.email.toLowerCase();
  const existente = await prisma.usuario.findUnique({ where: { email } });
  if (existente) {
    return { ok: false, erros: { email: "Já existe uma conta com este e-mail." }, valores };
  }

  try {
    await prisma.$transaction(async (transacao) => {
      const usuario = await transacao.usuario.create({
        data: {
          nome: validacao.data.nome,
          email,
          senhaHash: await hash(validacao.data.senha, 12),
          papel: validacao.data.papel,
        },
      });

      if (validacao.data.papel === "EMPRESA") {
        await transacao.empresa.create({
          data: {
            nome: validacao.data.nomeDaEmpresa!,
            proprietarioId: usuario.id,
          },
        });
      }
    });
  } catch (erro) {
    if (erro instanceof Prisma.PrismaClientKnownRequestError && erro.code === "P2002") {
      const campos = erro.meta?.target;
      if (Array.isArray(campos) && campos.includes("email")) {
        return { ok: false, erros: { email: "Já existe uma conta com este e-mail." }, valores };
      }
      if (Array.isArray(campos) && campos.includes("nome")) {
        return { ok: false, erros: { nomeDaEmpresa: "Já existe uma empresa com este nome." }, valores };
      }
    }
    throw erro;
  }

  return {
    ok: true,
    erros: {},
    valores: {},
    mensagem: "Cadastro concluído. Agora entre com sua nova conta.",
  };
}
