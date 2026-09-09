"use client";

import { useEffect } from "react";

export default function VagasError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Erro ao carregar vagas:", error);
  }, [error]);

  return (
    <div className="special-page">
      <p className="eyebrow">Ocorreu um Erro</p>
      <h1>Não foi possível carregar as vagas</h1>
      <p>{error.message || "Tivemos um problema ao conectar com o serviço de vagas."}</p>
      <button onClick={() => reset()} className="button button-primary">
        Tentar Novamente
      </button>
    </div>
  );
}
