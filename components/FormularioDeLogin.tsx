"use client";

import { useActionState } from "react";
import { entrar } from "@/app/entrar/acoes";
import type { Estado } from "@/lib/tipos";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };

export default function FormularioDeLogin() {
  const [estado, acao] = useActionState(entrar, estadoInicial);

  return (
    <form action={acao} className="vaga-detail-card form-stack" style={{ maxWidth: "560px" }}>
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" className="input-control" defaultValue={estado.valores.email} autoComplete="email" required />
      </div>
      <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <input id="senha" name="senha" type="password" className="input-control" autoComplete="current-password" required />
      </div>
      {estado.erros.credenciais && <p className="form-error" role="alert">{estado.erros.credenciais}</p>}
      <BotaoDeEnviar texto="Entrar" textoPendente="Entrando…" />
    </form>
  );
}