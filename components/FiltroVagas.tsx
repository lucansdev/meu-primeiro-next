"use client";

import { useState } from "react";
import Link from "next/link";
import { Vaga } from "@/lib/vagas";
import BotaoSalvarVaga from "./BotaoSalvarVaga";

interface FiltroVagasProps {
  vagasIniciais: Vaga[];
}

export default function FiltroVagas({ vagasIniciais }: FiltroVagasProps) {
  // Estado das entradas (Aula 03)
  const [busca, setBusca] = useState("");
  const [modalidade, setModalidade] = useState("Todas");
  const [senioridade, setSenioridade] = useState("Todas");

  // Estado derivado (Aula 03 - regra para evitar inconsistencia)
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
            <label htmlFor="busca">Buscar vaga ou tecnologia</label>
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
              <option value="Todas">Todas</option>
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
              <option value="Todas">Todas</option>
              <option value="Estágio">Estágio</option>
              <option value="Júnior">Júnior</option>
              <option value="Pleno">Pleno</option>
            </select>
          </div>

          <div className="input-group" style={{ justifyContent: "flex-end", height: "100%" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--muted)", fontWeight: 600 }}>
              {vagasFiltradas.length} {vagasFiltradas.length === 1 ? "vaga encontrada" : "vagas encontradas"}
            </span>
          </div>
        </div>
      </div>

      {vagasFiltradas.length === 0 ? (
        <div className="contact-card" style={{ textAlign: "center", justifyContent: "center" }}>
          <div>
            <h3>Nenhuma vaga encontrada com esses filtros</h3>
            <p>Tente buscar por termos mais genéricos ou limpe os filtros de pesquisa.</p>
          </div>
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
                <p style={{ color: "var(--muted)", fontSize: "0.95rem", margin: "0 0 12px" }}>
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

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
                <Link href={`/vagas/${vaga.id}`} className="button button-primary">
                  Ver Vaga →
                </Link>
                <BotaoSalvarVaga vagaId={vaga.id} />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
