import Link from "next/link";
import type { Vaga } from "@/lib/tipos";

interface CardDeVagaProps {
  vaga: Vaga;
}

// Sem estado e sem "use client": só desenha o que recebe por prop.
export default function CardDeVaga({ vaga }: CardDeVagaProps) {
  return (
    <article className="vaga-card">
      <div className="vaga-main-info">
        <div className="vaga-header">
          <span className="vaga-empresa">{vaga.empresa}</span>
          <span className="badge">{vaga.area}</span>
          <span className="badge badge-seniority">{vaga.senioridade}</span>
          {vaga.aceitaIniciante && <span className="badge badge-iniciante">Aceita iniciante</span>}
        </div>
        <Link href={`/vagas/${vaga.id}`} className="vaga-title">
          {vaga.titulo}
        </Link>
        <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: 0 }}>
          📍 {vaga.localizacao} • {vaga.modalidade}
        </p>
      </div>

      <Link href={`/vagas/${vaga.id}`} className="button button-primary">
        Ver Vaga →
      </Link>
    </article>
  );
}
