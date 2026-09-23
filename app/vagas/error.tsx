"use client";

export default function VagasError({ retry }: { retry: () => void }) {

  return (
    <div className="special-page">
      <p className="eyebrow">Ocorreu um Erro</p>
      <h1>Não foi possível carregar as vagas</h1>
      <p>Tivemos um problema ao conectar com o serviço de vagas.</p>
      <button type="button" onClick={retry} className="button button-primary">
        Tentar Novamente
      </button>
    </div>
  );
}
