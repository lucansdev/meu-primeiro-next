import { Suspense } from "react";
import { getVagas } from "@/lib/vagas";
import FiltroVagas from "@/components/FiltroVagas";
import VagasLoading from "./loading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vagas de Tecnologia | Leque de Vagas",
  description: "Explore vagas de tecnologia selecionadas para quem está em transição de carreira ou buscando primeiros desafios.",
};

async function ListaVagasContainer() {
  const vagas = await getVagas();
  return <FiltroVagas vagasIniciais={vagas} />;
}

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

      <Suspense fallback={<VagasLoading />}>
        <ListaVagasContainer />
      </Suspense>
    </section>
  );
}
