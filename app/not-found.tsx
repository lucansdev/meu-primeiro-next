import Link from "next/link";

export default function NotFound() {
  return (
    <div className="special-page">
      <p className="eyebrow">Erro 404</p>
      <h1>Página Não Encontrada</h1>
      <p>Desculpe, o caminho que você tentou acessar não existe ou foi movido.</p>
      <Link href="/" className="button button-primary">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
