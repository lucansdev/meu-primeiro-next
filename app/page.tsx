import Link from "next/link";

const benefits = [
  ["01", "Comece com direção", "Conheça caminhos reais para entrar em tecnologia sem precisar ter todas as respostas agora."],
  ["02", "Construa repertório", "Transforme estudo, projetos e curiosidade em experiências que contam a sua história."],
  ["03", "Encontre oportunidades", "Prepare-se para enxergar vagas compatíveis com a fase em que você está vivendo."],
];

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Tecnologia para quem está em movimento</p>
          <h1 id="hero-title">Seu próximo passo na tecnologia começa aqui.</h1>
          <p className="hero-text">O Leque de Vagas é um ponto de partida para quem está em transição de carreira e quer construir um caminho mais claro rumo ao mercado de tecnologia.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/sobre">Conheça minha jornada <span aria-hidden="true">→</span></Link>
            <Link className="button button-quiet" href="/contato">Vamos conversar</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun" /><div className="arc arc-one" /><div className="arc arc-two" /><div className="arc arc-three" />
          <p>futuro<br />em aberto</p>
        </div>
      </section>
      <section className="section steps" aria-labelledby="steps-title">
        <div className="section-heading"><p className="eyebrow">Um caminho possível</p><h2 id="steps-title">Transição não é salto no escuro.</h2></div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text]) => <article className="benefit-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section callout" aria-labelledby="callout-title">
        <p className="eyebrow">Não precisa caminhar sozinho</p><h2 id="callout-title">Toda carreira grande começa com uma primeira versão.</h2>
        <Link className="text-link" href="/contato">Abrir uma conversa <span aria-hidden="true">↗</span></Link>
      </section>
    </>
  );
}
