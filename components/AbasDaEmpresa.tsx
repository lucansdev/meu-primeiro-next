"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { Empresa, Vaga } from "@/lib/tipos";

interface AbasDaEmpresaProps {
  empresa: Empresa;
  vagas: Vaga[];
}

type Aba = "sobre" | "vagas";

export default function AbasDaEmpresa({ empresa, vagas }: AbasDaEmpresaProps) {
  const [abaAtiva, setAbaAtiva] = useState<Aba>("sobre");
  const idBase = useId();
  const sobreId = `${idBase}-sobre`;
  const vagasId = `${idBase}-vagas`;

  return (
    <section aria-label={`Informações sobre ${empresa.nome}`}>
      <div
        role="tablist"
        aria-label="Conteúdo da empresa"
        style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "20px" }}
      >
        <button
          type="button"
          role="tab"
          aria-selected={abaAtiva === "sobre"}
          aria-controls={sobreId}
          id={`${sobreId}-tab`}
          className={`button ${abaAtiva === "sobre" ? "button-primary" : "button-secondary"}`}
          onClick={() => setAbaAtiva("sobre")}
        >
          Sobre a empresa
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={abaAtiva === "vagas"}
          aria-controls={vagasId}
          id={`${vagasId}-tab`}
          className={`button ${abaAtiva === "vagas" ? "button-primary" : "button-secondary"}`}
          onClick={() => setAbaAtiva("vagas")}
        >
          Vagas abertas ({vagas.length})
        </button>
      </div>

      <div
        id={sobreId}
        role="tabpanel"
        aria-labelledby={`${sobreId}-tab`}
        hidden={abaAtiva !== "sobre"}
        className="vaga-detail-card"
      >
        <h2>Sobre a empresa</h2>
        <p>{empresa.descricao}</p>
        <p>
          <strong>Localização:</strong> {empresa.localizacao}
        </p>
        <a href={empresa.site} target="_blank" rel="noreferrer" className="text-link">
          Visitar site da empresa ↗
        </a>
      </div>

      <div
        id={vagasId}
        role="tabpanel"
        aria-labelledby={`${vagasId}-tab`}
        hidden={abaAtiva !== "vagas"}
        className="vaga-detail-card"
      >
        <h2>Vagas abertas</h2>
        {vagas.length > 0 ? (
          <div className="vagas-grid">
            {vagas.map((vaga) => (
              <article className="vaga-card" key={vaga.id}>
                <div className="vaga-main-info">
                  <div className="vaga-header">
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
                  Ver vaga →
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <p>Esta empresa não possui vagas abertas no momento.</p>
        )}
      </div>
    </section>
  );
}
