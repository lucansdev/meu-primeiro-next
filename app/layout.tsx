import type { Metadata } from "next";
import type { ReactNode } from "react";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leque de Vagas | Tecnologia em movimento",
  description: "Um ponto de partida para pessoas em transição de carreira para tecnologia.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}
