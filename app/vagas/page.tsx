import { Suspense } from "react";
import ListagemDeVagas from "@/components/ListagemDeVagas";
import NumerosDoCatalogo from "@/components/NumerosDoCatalogo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vagas de Tecnologia | Leque de Vagas",
  description: "Explore vagas de tecnologia selecionadas para quem está em transição de carreira ou buscando primeiros desafios.",
};

export default function VagasPage() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Oportunidades Abertas</p>
        <h1 id="vagas-title">Encontre seu próximo desafio em tecnologia.</h1>
        <p className="hero-text" style={{ marginBottom: "40px" }}>
          Vagas selecionadas especialmente para pessoas em transição de carreira, iniciantes e níveis júnior/pleno.
        </p>
      </div>

      <Suspense fallback={<div className="skeleton" style={{ width: "310px", height: "25px", marginBottom: "24px" }} />}>
        <NumerosDoCatalogo />
      </Suspense>

      <Suspense
        fallback={
          <div className="vagas-grid" aria-label="Carregando vagas">
            <div className="skeleton skeleton-card" />
            <div className="skeleton skeleton-card" />
            <div className="skeleton skeleton-card" />
          </div>
        }
      >
        <ListagemDeVagas />
      </Suspense>
    </section>
  );
}
