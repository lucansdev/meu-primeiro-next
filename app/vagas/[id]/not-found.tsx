import Link from "next/link";

export default function VagaNotFound() {
  return (
    <div className="special-page">
      <p className="eyebrow">Vaga Não Encontrada</p>
      <h1>Esta oportunidade não existe mais</h1>
      <p>A vaga que você procurava pode ter sido encerrada ou o código informado está incorreto.</p>
      <Link href="/vagas" className="button button-primary">
        Ver Todas as Vagas Abertas
      </Link>
    </div>
  );
}
