import Link from "next/link";

export const metadata = {
  title: "Sobre | Leque de Vagas",
  description: "Conheça mais sobre a iniciativa e nossa visão sobre a área de tecnologia.",
};

export default function SobrePage() {
  return (
    <section className="page-section" aria-labelledby="about-title">
      <div style={{ maxWidth: "840px" }}>
        <span className="eyebrow">Sobre o Projeto</span>
        <h1 id="about-title" style={{ marginBottom: "32px" }}>
          Tecnologia é mais poderosa quando <span className="grad-text">conecta caminhos</span>.
        </h1>

        <div className="sidebar-box" style={{ padding: "36px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "16px" }}>Nossa Visão</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "16px" }}>
            O <strong>Leque de Vagas</strong> nasceu da percepção de que a transição de carreira para a área de tecnologia exige clareza, direcionamento e oportunidades acessíveis.
          </p>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            Desenvolvido como projeto prático no curso de Next.js, a aplicação combina arquitetura moderna com o App Router, Server Components e design centrado na experiência do usuário.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          <div className="benefit-card">
            <span style={{ color: "var(--accent-cyan)", background: "rgba(6,182,212,0.1)" }}>01</span>
            <h3 style={{ fontSize: "1.1rem" }}>Design Moderno</h3>
            <p>Foco na usabilidade, legibilidade e alto desempenho visual.</p>
          </div>
          <div className="benefit-card">
            <span style={{ color: "var(--accent-primary)", background: "rgba(99,102,241,0.1)" }}>02</span>
            <h3 style={{ fontSize: "1.1rem" }}>Next.js 16</h3>
            <p>Arquitetura em Server Components com rotas dinâmicas e streaming.</p>
          </div>
          <div className="benefit-card">
            <span style={{ color: "var(--accent-emerald)", background: "rgba(16,185,129,0.1)" }}>03</span>
            <h3 style={{ fontSize: "1.1rem" }}>Inclusivo</h3>
            <p>Vagas direcionadas para quem está iniciando ou migrando de área.</p>
          </div>
        </div>

        <Link className="text-link" href="/vagas">
          Explorar Vagas Abertas <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
