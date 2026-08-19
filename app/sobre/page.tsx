import Link from "next/link";

export const metadata = { title: "Sobre | Leque de Vagas", description: "Conheça Lucas e sua jornada na tecnologia." };

export default function SobrePage() {
  return <section className="page-section about" aria-labelledby="about-title">
    <div className="page-intro"><p className="eyebrow">Sobre mim</p><h1 id="about-title">Tecnologia é mais interessante quando amplia possibilidades.</h1></div>
    <div className="about-grid">
      <div className="portrait-placeholder" aria-hidden="true"><span>LM</span></div>
      <div className="about-copy">
        <p>Sou Lucas, uma pessoa em construção na área de tecnologia. Tenho interesse especial por dados, inteligência artificial e pelos produtos que aproximam pessoas de novas oportunidades.</p>
        <p>Minha trajetória combina estudo prático, projetos em Python e SQL, machine learning e soluções com IA. Gosto de transformar problemas abertos em experiências simples, úteis e humanas.</p>
        <p>Neste semestre, espero fortalecer meus fundamentos de desenvolvimento web, aprender a construir produtos em equipe e contribuir para que o Leque de Vagas seja uma porta de entrada acolhedora para outras pessoas em transição.</p>
        <Link className="text-link" href="/contato">Entre em contato <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  </section>;
}
