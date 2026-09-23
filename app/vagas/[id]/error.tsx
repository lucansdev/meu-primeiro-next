"use client";

export default function VagaDetalheError({ retry }: { retry: () => void }) {
  return (
    <section className="page-section">
      <div className="special-page">
        <p className="eyebrow">Não foi possível carregar</p>
        <h1>Houve uma falha ao buscar esta vaga</h1>
        <p>Verifique sua conexão e tente novamente. Se o problema continuar, volte para a lista de vagas.</p>
        <button type="button" onClick={retry} className="button button-primary">
          Tentar novamente
        </button>
      </div>
    </section>
  );
}
