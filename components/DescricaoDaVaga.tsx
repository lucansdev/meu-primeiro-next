"use client";

import { useState } from "react";

const LIMITE = 180;

interface DescricaoDaVagaProps {
  texto: string;
}

export default function DescricaoDaVaga({ texto }: DescricaoDaVagaProps) {
  const [aberta, setAberta] = useState(false);

  // Estado derivado: o texto visível sai de `aberta` e de `texto`, sem um segundo useState.
  const longa = texto.length > LIMITE;
  const textoVisivel = aberta || !longa ? texto : `${texto.slice(0, LIMITE).trimEnd()}…`;

  return (
    <div style={{ marginBottom: "32px" }}>
      <p style={{ lineHeight: 1.7, color: "var(--foreground)", margin: 0 }}>{textoVisivel}</p>
      {longa && (
        <button
          type="button"
          className="botao-ver-mais"
          onClick={() => setAberta((prev) => !prev)}
          aria-expanded={aberta}
        >
          {aberta ? "ver menos" : "ver mais"}
        </button>
      )}
    </div>
  );
}
