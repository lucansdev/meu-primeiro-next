import Link from "next/link";

export const metadata = {
  title: "Contato | Leque de Vagas",
  description: "Entre em contato com a equipe do Leque de Vagas.",
};

export default function ContatoPage() {
  return (
    <section className="page-section" aria-labelledby="contact-title">
      <div style={{ maxWidth: "760px" }}>
        <span className="eyebrow">Contato & Suporte</span>
        <h1 id="contact-title" style={{ marginBottom: "24px" }}>
          Vamos construir <span className="grad-text">conexões</span>.
        </h1>
        <p className="hero-text" style={{ marginBottom: "40px" }}>
          Se você tem dúvidas sobre o projeto, sugestões ou quer colaborar com a iniciativa, entre em contato conosco.
        </p>

        <div className="sidebar-box" style={{ padding: "36px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "12px" }}>Canais de Atendimento</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "24px" }}>
            Estamos disponíveis para trocar ideias com estudantes, desenvolvedores e empresas parceiras.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ padding: "16px", background: "var(--bg-main)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-primary)", fontWeight: 700, textTransform: "uppercase" }}>E-mail Institucional</span>
              <p style={{ margin: "4px 0 0", fontWeight: 700, color: "var(--text-primary)" }}>contato@lequedevagas.com.br</p>
            </div>
            <div style={{ padding: "16px", background: "var(--bg-main)", borderRadius: "10px", border: "1px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontWeight: 700, textTransform: "uppercase" }}>Repositório Oficial</span>
              <p style={{ margin: "4px 0 0", fontWeight: 700, color: "var(--text-primary)" }}>github.com/lucansdev/meu-primeiro-next</p>
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
