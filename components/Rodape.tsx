import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="footer-inner">
        <p>© 2026 Leque de Vagas — Construído com Next.js App Router</p>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/vagas" style={{ color: "var(--text-secondary)" }}>
            Vagas
          </Link>
          <Link href="/sobre" style={{ color: "var(--text-secondary)" }}>
            Sobre
          </Link>
          <Link href="/contato" style={{ color: "var(--text-secondary)" }}>
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
