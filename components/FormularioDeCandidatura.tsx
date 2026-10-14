"use client";

import { useActionState } from "react";
import { enviarCandidatura } from "@/app/vagas/[id]/acoes";
import type { Estado } from "@/lib/tipos";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };

export default function FormularioDeCandidatura({ tituloDaVaga, vagaId, nome }: { tituloDaVaga: string; vagaId: string; nome: string }) {
  const [estado, acao] = useActionState(enviarCandidatura, estadoInicial);

  if (estado.ok) {
    return <div className="sidebar-box" role="status"><h3>Candidatura registrada</h3><p>{estado.mensagem} Recebemos seu interesse em “{tituloDaVaga}”.</p></div>;
  }

  return (
    <form className="sidebar-box form-stack" action={acao}>
      <input type="hidden" name="vagaId" value={vagaId} />
      <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Candidatar-se</h3>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>A candidatura será enviada como {nome}.</p>
      <fieldset className="choice-group"><legend>Habilidades</legend>{["HTML e CSS", "JavaScript", "React", "Dados"].map((habilidade) => <label key={habilidade}><input type="checkbox" name="habilidades" value={habilidade} /> {habilidade}</label>)}</fieldset>
      {estado.erros.habilidades && <p className="form-error">{estado.erros.habilidades}</p>}
      {estado.erros.vagaId && <p className="form-error">{estado.erros.vagaId}</p>}
      <BotaoDeEnviar texto="Enviar candidatura" textoPendente="Enviando…" />
    </form>
  );
}