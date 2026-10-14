"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import type { Estado } from "@/lib/tipos";

export async function entrar(_estadoAnterior: Estado, dados: FormData): Promise<Estado> {
  try {
    await signIn("credentials", {
      email: String(dados.get("email") ?? ""),
      senha: String(dados.get("senha") ?? ""),
      redirectTo: "/painel",
    });
    return { ok: true, erros: {}, valores: {} };
  } catch (erro) {
    if (erro instanceof AuthError) {
      return {
        ok: false,
        erros: { credenciais: "E-mail ou senha inválidos." },
        valores: { email: String(dados.get("email") ?? "") },
      };
    }

    throw erro;
  }
}