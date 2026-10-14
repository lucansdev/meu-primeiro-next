import type { Metadata } from "next";
import type { ReactNode } from "react";
import { auth } from "@/auth";
import Cabecalho from "@/components/Cabecalho";
import Rodape from "@/components/Rodape";
import "./globals.css";

export const metadata: Metadata = {
  title: "Leque de Vagas | Tecnologia em movimento",
  description: "Um ponto de partida para pessoas em transição de carreira para tecnologia.",
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const sessao = await auth();

  return (
    <html lang="pt-BR">
      <body>
        <Cabecalho usuario={sessao?.user} />
        <main>{children}</main>
        <Rodape />
      </body>
    </html>
  );
}