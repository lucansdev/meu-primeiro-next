import Link from "next/link";

export const metadata = { title: "Contato | Leque de Vagas", description: "Entre em contato com o Leque de Vagas." };

export default function ContatoPage() {
  return <section className="page-section contact" aria-labelledby="contact-title">
    <p className="eyebrow">Contato</p><h1 id="contact-title">Uma boa conversa também pode abrir caminhos.</h1>
    <p className="contact-lede">Se você também está estudando, mudando de área ou quer trocar ideias sobre tecnologia, este espaço é para a gente se encontrar.</p>
    <div className="contact-card"><span className="contact-symbol" aria-hidden="true">✦</span><div><h2>Vamos construir conexões</h2><p>Em breve, este espaço reunirá formas de contato e oportunidades da comunidade.</p></div></div>
    <Link className="text-link" href="/">Voltar para o início <span aria-hidden="true">←</span></Link>
  </section>;
}
