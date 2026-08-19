import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="footer-inner">
        <p>Leque de Vagas <span aria-hidden="true">✦</span> Um projeto para futuros em movimento.</p>
        <Link href="/contato">Contato</Link>
      </div>
    </footer>
  );
}
