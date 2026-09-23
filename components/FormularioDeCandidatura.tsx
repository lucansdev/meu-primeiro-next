"use client";

import { FormEvent, useState } from "react";

export default function FormularioDeCandidatura({ tituloDaVaga }: { tituloDaVaga: string }) {
  const [enviado, setEnviado] = useState(false);

  function enviarCandidatura(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setEnviado(true);
  }

  if (enviado) {
    return (
      <div className="sidebar-box" role="status">
        <h3>Candidatura registrada</h3>
        <p>Recebemos seu interesse em “{tituloDaVaga}”.</p>
      </div>
    );
  }

  return (
    <form className="sidebar-box" onSubmit={enviarCandidatura}>
      <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Candidatar-se</h3>
      <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{tituloDaVaga}</p>
      <div className="input-group" style={{ marginTop: "16px" }}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" className="input-control" required />
      </div>
      <div className="input-group" style={{ marginTop: "12px" }}>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" className="input-control" required />
      </div>
      <button type="submit" className="button button-primary" style={{ width: "100%", marginTop: "16px" }}>
        Enviar candidatura
      </button>
    </form>
  );
}
