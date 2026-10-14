import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="footer-inner">
        <p>© 2026 Leque de Vagas — Projetado com T3 Stack & Next.js App Router</p>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href="/vagas" style={{ color: "#94A3B8" }}>
            Vagas
          </Link>
          <Link href="/sobre" style={{ color: "#94A3B8" }}>
            Sobre
          </Link>
          <Link href="/contato" style={{ color: "#94A3B8" }}>
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}
