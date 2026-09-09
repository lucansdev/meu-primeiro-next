"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/vagas", label: "Vagas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export default function Cabecalho() {
  const pathname = usePathname();

  return (
    <header className="cabecalho">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Leque de Vagas, ir para o início">
          <span className="brand-mark" aria-hidden="true">
            ⚗
          </span>
          <span>
            Leque <span style={{ color: "var(--primary)" }}>de Vagas</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "active" : ""}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
