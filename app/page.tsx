import Link from "next/link";

const benefits = [
  ["01", "Direção & Foco", "Caminhos mapeados para ingressar em tecnologia sem se perder em excesso de informações."],
  ["02", "Projetos Reais", "Transforme seu aprendizado em repertório prático relevante para recrutadores."],
  ["03", "Conexão Direta", "Encontre vagas de empresas que valorizam pessoas em transição de carreira."],
];

export default function Home() {
  return (
    <>
      {/* Hero Escuro Alchemy (#0A0A12) */}
      <div className="hero-wrapper">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">Plataforma de Carreiras Tech</span>
            <h1 id="hero-title">
              Sua carreira em <span className="grad-text">Tecnologia</span> começa aqui.
            </h1>
            <p className="hero-text">
              O <strong>Leque de Vagas</strong> conecta talentos em transição a oportunidades reais no mercado de software.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/vagas">
                Explorar Vagas <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-outline-dark" href="/sobre">
                Conhecer o Projeto
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Foco em Transição</p>
              </div>
              <div className="stat-item">
                <h3 style={{ color: "var(--primary)" }}>T3 Stack</h3>
                <p>App Router & React 19</p>
              </div>
              <div className="stat-item">
                <h3>Zero</h3>
                <p>Fricção de Cadastro</p>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card-preview">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                <span className="badge badge-modality">Remoto</span>
                <span className="badge badge-seniority">Júnior</span>
              </div>
              <h3 style={{ fontSize: "1.2rem", margin: "0 0 8px", color: "#FFFFFF" }}>Desenvolvedor(a) Front-end</h3>
              <p style={{ fontSize: "0.85rem", color: "#94A3B8", margin: "0 0 16px" }}>
                TechStart Soluções • React, Next.js, TypeScript
              </p>
              <div
                style={{
                  padding: "10px 16px",
                  background: "rgba(255, 214, 66, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 214, 66, 0.25)",
                  fontSize: "0.85rem",
                  color: "var(--primary)",
                  fontWeight: 700,
                }}
              >
                ⚗ Vaga em Destaque Alchemy
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Conteúdo Claro Alchemy (#F8F8F8) */}
      <section className="section steps" aria-labelledby="steps-title">
        <div className="section-heading">
          <span className="eyebrow eyebrow-dark">Metodologia</span>
          <h2 id="steps-title" style={{ color: "var(--foreground)" }}>
            Construção de carreira com clareza e transparência.
          </h2>
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

      {/* Callout Escuro Alchemy */}
      <section className="section callout" aria-labelledby="callout-title">
        <span className="eyebrow">Comunidade Tech</span>
        <h2 id="callout-title">Toda grande jornada em tecnologia começou com uma primeira oportunidade.</h2>
        <Link className="text-link" href="/vagas">
          Ver todas as vagas disponíveis <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </>
  );
}
