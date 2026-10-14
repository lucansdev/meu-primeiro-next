import Link from "next/link";

export const metadata = {
  title: "Sobre | Leque de Vagas (Alchemy T3)",
  description: "Conheça a iniciativa Leque de Vagas e a arquitetura do projeto.",
};

export default function SobrePage() {
  return (
    <section className="page-section" aria-labelledby="about-title">
      <div style={{ maxWidth: "840px" }}>
        <span className="eyebrow eyebrow-dark">Sobre o Projeto</span>
        <h1 id="about-title" style={{ marginBottom: "32px", color: "var(--foreground)" }}>
          Tecnologia ganha força quando <span className="grad-text">conecta talentos</span>.
        </h1>

        <div className="benefit-card" style={{ padding: "36px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "16px", color: "var(--foreground)" }}>Nossa Visão</h2>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "16px" }}>
            O <strong>Leque de Vagas</strong> foi planejado para oferecer direcionamento e visibilidade para quem está construindo seu caminho em tecnologia ou migrando de área.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            Inspirado nas convenções de arquitetura do <strong>Alchemy T3</strong> e nas boas práticas do Next.js 16, o projeto demonstra uma aplicação moderna construída em etapas com App Router, Server Components e React 19.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          <div className="benefit-card">
            <span>01</span>
            <h3>Estética Alchemy</h3>
            <p>Visual marcado por tom escuro profundo, cartões claros e acentos vibrantes em Amarelo e Ciano.</p>
          </div>
          <div className="benefit-card">
            <span>02</span>
            <h3>T3 Stack Standard</h3>
            <p>Padrões de componentização inspirados na T3 Stack com TypeScript rigoroso.</p>
          </div>
          <div className="benefit-card">
            <span>03</span>
            <h3>Acessível</h3>
            <p>Curadoria com foco em vagas para níveis iniciante, estágio e júnior.</p>
          </div>
        </div>

        <Link className="text-link" href="/vagas">
          Explorar Oportunidades <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
