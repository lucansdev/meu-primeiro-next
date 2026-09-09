import Link from "next/link";

export const metadata = {
  title: "Contato | Leque de Vagas (Alchemy T3)",
  description: "Entre em contato com a equipe do Leque de Vagas.",
};

export default function ContatoPage() {
  return (
    <section className="page-section" aria-labelledby="contact-title">
      <div style={{ maxWidth: "760px" }}>
        <span className="eyebrow eyebrow-dark">Contato & Suporte</span>
        <h1 id="contact-title" style={{ marginBottom: "24px", color: "var(--foreground)" }}>
          Vamos construir <span className="grad-text">conexões</span>.
        </h1>
        <p className="hero-text" style={{ color: "var(--muted)", marginBottom: "40px" }}>
          Se você tem dúvidas sobre o projeto, sugestões ou quer colaborar com a iniciativa, entre em contato conosco.
        </p>

        <div className="benefit-card" style={{ padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "16px", color: "var(--foreground)" }}>Canais Oficiais</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div
              style={{
                padding: "16px",
                background: "#F1F5F9",
                borderRadius: "10px",
                border: "1px solid var(--border-stroke)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#b45309",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                E-mail Institucional
              </span>
              <p style={{ margin: "4px 0 0", fontWeight: 700, color: "var(--foreground)" }}>
                contato@lequedevagas.com.br
              </p>
            </div>
            <div
              style={{
                padding: "16px",
                background: "#F1F5F9",
                borderRadius: "10px",
                border: "1px solid var(--border-stroke)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#0f766e",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Repositório GitHub
              </span>
              <p style={{ margin: "4px 0 0", fontWeight: 700, color: "var(--foreground)" }}>
                github.com/lucansdev/meu-primeiro-next
              </p>
            </div>
          </div>
        </div>

        <Link className="text-link" href="/">
          ← Voltar para a página inicial
        </Link>
      </div>
    </section>
  );
}
