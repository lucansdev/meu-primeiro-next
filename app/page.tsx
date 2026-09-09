import Link from "next/link";

const benefits = [
  ["01", "Direção & Clareza", "Conheça caminhos reais para ingressar na área de tecnologia com foco e objetividade."],
  ["02", "Construção de Repertório", "Transforme estudos, projetos e curiosidade técnica em portfólio relevante."],
  ["03", "Conexão com Oportunidades", "Encontre vagas alinhadas com o seu momento de aprendizado e evolução profissional."],
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="eyebrow">Plataforma de Carreira Tech</span>
          <h1 id="hero-title">
            Seu próximo passo em <span className="grad-text">Tecnologia</span> começa aqui.
          </h1>
          <p className="hero-text">
            O <strong>Leque de Vagas</strong> conecta talentos em transição de carreira a oportunidades reais de trabalho no mercado de tecnologia.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/vagas">
              Explorar Vagas Abertas <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/sobre">
              Conhecer a Jornada
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h3>100%</h3>
              <p>Foco em Transição</p>
            </div>
            <div className="stat-item">
              <h3>Remoto</h3>
              <p>& Híbrido Flexível</p>
            </div>
            <div className="stat-item">
              <h3>Next.js 16</h3>
              <p>App Router & React 19</p>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-glow-circle" />
          <div className="hero-card-preview">
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
              <span className="badge badge-modality">Remoto</span>
              <span className="badge badge-seniority">Júnior</span>
            </div>
            <h3 style={{ fontSize: "1.2rem", margin: "0 0 8px" }}>Desenvolvedor(a) Front-end</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 16px" }}>
              TechStart Soluções • React, Next.js, TypeScript
            </p>
            <div style={{ padding: "10px 16px", background: "rgba(99, 102, 241, 0.1)", borderRadius: "8px", border: "1px solid rgba(99, 102, 241, 0.2)", fontSize: "0.85rem", color: "var(--accent-primary)" }}>
              ✦ Vaga em destaque nesta semana
            </div>
          </div>
        </div>
      </section>

      <section className="section steps" aria-labelledby="steps-title">
        <div className="section-heading">
          <span className="eyebrow">Metodologia</span>
          <h2 id="steps-title">Transição de carreira com método e transparência.</h2>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text]) => (
            <article className="benefit-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section callout" aria-labelledby="callout-title">
        <span className="eyebrow">Comunidade & Conexões</span>
        <h2 id="callout-title">Toda grande trajetória na tecnologia começou com a primeira oportunidade.</h2>
        <Link className="text-link" href="/vagas">
          Ver todas as vagas disponíveis <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
