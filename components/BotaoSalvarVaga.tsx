"use client";

import { useState } from "react";

interface BotaoSalvarVagaProps {
  vagaId: string;
}

export default function BotaoSalvarVaga({ vagaId }: BotaoSalvarVagaProps) {
  const [salvo, setSalvo] = useState(false);

  const toggleSalvar = () => {
    setSalvo((prev) => !prev);
  };

  return (
    <button
      type="button"
      onClick={toggleSalvar}
      className={`button ${salvo ? "button-saved" : "button-secondary"}`}
      aria-label={salvo ? "Remover vaga dos salvos" : "Salvar vaga"}
    >
      {salvo ? "✓ Vaga Salva" : "🔖 Salvar Vaga"}
    </button>
  );
}
