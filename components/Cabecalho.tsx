import Link from "next/link";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Leque de Vagas, ir para o início">
          <span className="brand-mark" aria-hidden="true">L</span>
          <span>Leque de Vagas</span>
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {navigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
