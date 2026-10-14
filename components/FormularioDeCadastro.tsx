"use client";

import { useActionState, useState } from "react";
import { cadastrar } from "@/app/cadastro/acoes";
import type { Estado } from "@/lib/tipos";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };

export default function FormularioDeCadastro() {
  const [estado, acao] = useActionState(cadastrar, estadoInicial);
  const [papel, setPapel] = useState(estado.valores.papel ?? "CANDIDATO");

  if (estado.ok) {
    return <p className="form-success" role="status">{estado.mensagem}</p>;
  }

  return (
    <form action={acao} className="vaga-detail-card form-stack" style={{ maxWidth: "620px" }}>
      <div className="input-group">
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" className="input-control" defaultValue={estado.valores.nome} autoComplete="name" required />
        {estado.erros.nome && <p className="form-error">{estado.erros.nome}</p>}
      </div>
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" className="input-control" defaultValue={estado.valores.email} autoComplete="email" required />
        {estado.erros.email && <p className="form-error">{estado.erros.email}</p>}
      </div>
      <div className="input-group">
        <label htmlFor="senha">Senha</label>
        <input id="senha" name="senha" type="password" className="input-control" autoComplete="new-password" required />
        {estado.erros.senha && <p className="form-error">{estado.erros.senha}</p>}
      </div>
      <fieldset className="choice-group">
        <legend>Tipo de conta</legend>
        <label><input type="radio" name="papel" value="CANDIDATO" checked={papel === "CANDIDATO"} onChange={() => setPapel("CANDIDATO")} /> Pessoa candidata</label>
        <label><input type="radio" name="papel" value="EMPRESA" checked={papel === "EMPRESA"} onChange={() => setPapel("EMPRESA")} /> Empresa</label>
      </fieldset>
      {papel === "EMPRESA" && (
        <div className="input-group">
          <label htmlFor="nomeDaEmpresa">Nome da empresa</label>
          <input id="nomeDaEmpresa" name="nomeDaEmpresa" className="input-control" defaultValue={estado.valores.nomeDaEmpresa} required />
          {estado.erros.nomeDaEmpresa && <p className="form-error">{estado.erros.nomeDaEmpresa}</p>}
        </div>
      )}
      <BotaoDeEnviar texto="Criar conta" textoPendente="Criando conta…" />
    </form>
  );
}