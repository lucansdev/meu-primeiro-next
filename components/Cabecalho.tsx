"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { encerrarSessao } from "@/app/acoes-sessao";
import type { Papel } from "@/lib/tipos";

const navigation = [
  { href: "/", label: "Início" },
  { href: "/vagas", label: "Vagas" },
  { href: "/empresas", label: "Empresas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

interface CabecalhoProps {
  usuario?: { nome?: string | null; papel: Papel } | null;
}

export default function Cabecalho({ usuario }: CabecalhoProps) {
  const pathname = usePathname();

  return (
    <header className="cabecalho">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Leque de Vagas, ir para o início">
          <span className="brand-mark" aria-hidden="true">⚗</span>
          <span>Leque <span style={{ color: "var(--primary)" }}>de Vagas</span></span>
        </Link>
        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return <li key={item.href}><Link href={item.href} className={isActive ? "active" : ""}>{item.label}</Link></li>;
            })}
            {usuario ? (
              <>
                <li><Link href="/painel" className={pathname.startsWith("/painel") ? "active" : ""}>Meu painel</Link></li>
                <li><form action={encerrarSessao}><button type="submit" className="nav-action">Sair</button></form></li>
              </>
            ) : (
              <li><Link href="/entrar" className={pathname.startsWith("/entrar") ? "active" : ""}>Entrar</Link></li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}