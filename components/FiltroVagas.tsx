"use client";

import { useState } from "react";
import Link from "next/link";
import { Vaga } from "@/lib/vagas";
import BotaoSalvarVaga from "./BotaoSalvarVaga";

interface FiltroVagasProps {
  vagasIniciais: Vaga[];
}

export default function FiltroVagas({ vagasIniciais }: FiltroVagasProps) {
  const [busca, setBusca] = useState("");
  const [modalidade, setModalidade] = useState("Todas");
  const [senioridade, setSenioridade] = useState("Todas");

  // Estado derivado (Aula 03)
  const vagasFiltradas = vagasIniciais.filter((vaga) => {
    const atendeBusca =
      vaga.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.empresa.toLowerCase().includes(busca.toLowerCase()) ||
      vaga.tecnologias.some((t) => t.toLowerCase().includes(busca.toLowerCase()));

    const atendeModalidade = modalidade === "Todas" || vaga.modalidade === modalidade;
    const atendeSenioridade = senioridade === "Todas" || vaga.senioridade === senioridade;

    return atendeBusca && atendeModalidade && atendeSenioridade;
  });

  return (
    <div>
      <div className="search-filter-box">
        <div className="filter-grid">
          <div className="input-group">
            <label htmlFor="busca">Buscar por vaga ou tecnologia</label>
            <input
              id="busca"
              type="text"
              className="input-control"
              placeholder="Ex: React, Next.js, Júnior..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label htmlFor="modalidade">Modalidade</label>
            <select
              id="modalidade"
              className="select-control"
              value={modalidade}
              onChange={(e) => setModalidade(e.target.value)}
            >
              <option value="Todas">Todas as modalidades</option>
              <option value="Remoto">Remoto</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Presencial">Presencial</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="senioridade">Senioridade</label>
            <select
              id="senioridade"
              className="select-control"
              value={senioridade}
              onChange={(e) => setSenioridade(e.target.value)}
            >
              <option value="Todas">Todas as senioridades</option>
              <option value="Estágio">Estágio</option>
              <option value="Júnior">Júnior</option>
              <option value="Pleno">Pleno</option>
            </select>
          </div>

          <div className="input-group">
            <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, paddingBottom: "10px" }}>
              {vagasFiltradas.length} {vagasFiltradas.length === 1 ? "vaga encontrada" : "vagas encontradas"}
            </span>
          </div>
        </div>
      </div>

      {vagasFiltradas.length === 0 ? (
        <div className="sidebar-box" style={{ textAlign: "center", padding: "48px 24px" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Nenhuma vaga encontrada</h3>
          <p style={{ color: "var(--text-muted)", margin: 0 }}>
            Tente pesquisar com outros termos ou redefinir os seletores de modalidade e senioridade.
          </p>
        </div>
      ) : (
        <div className="vagas-grid">
          {vagasFiltradas.map((vaga) => (
            <article className="vaga-card" key={vaga.id}>
              <div className="vaga-main-info">
                <div className="vaga-header">
                  <span className="vaga-empresa">{vaga.empresa}</span>
                  <span className="badge badge-modality">{vaga.modalidade}</span>
                  <span className="badge badge-seniority">{vaga.senioridade}</span>
                </div>
                <Link href={`/vagas/${vaga.id}`} className="vaga-title">
                  {vaga.titulo}
                </Link>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: "0 0 12px" }}>
                  📍 {vaga.localizacao} • {vaga.publicadoEm}
                </p>
                <div className="vaga-tags">
                  {vaga.tecnologias.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <BotaoSalvarVaga vagaId={vaga.id} />
                <Link href={`/vagas/${vaga.id}`} className="button button-primary">
                  Ver Vaga →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
