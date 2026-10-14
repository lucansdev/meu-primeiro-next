import Link from "next/link";
import type { Metadata } from "next";
import { listarEmpresas } from "@/lib/api";

export const metadata: Metadata = {
  title: "Empresas parceiras · Leque de Vagas",
  description: "Conheça as empresas que publicam oportunidades no Leque de Vagas.",
};

export default async function EmpresasPage() {
  const empresas = await listarEmpresas();

  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Empresas</p>
        <h1>Conheça quem está contratando.</h1>
        <p className="hero-text" style={{ marginBottom: "40px" }}>
          Explore as empresas parceiras e encontre as oportunidades abertas em cada uma delas.
        </p>
      </div>

      <div className="benefit-grid">
        {empresas.map((empresa) => (
          <article className="benefit-card" key={empresa.id}>
            <p className="eyebrow" style={{ marginBottom: "12px" }}>
              {empresa.localizacao}
            </p>
            <h2>{empresa.nome}</h2>
            <p>{empresa.descricao}</p>
            <Link href={`/empresas/${empresa.id}`} className="text-link">
              Ver empresa e vagas →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
