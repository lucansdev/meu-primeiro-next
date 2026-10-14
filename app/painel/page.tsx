import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Painel | Leque de Vagas",
};

export default async function PainelPage() {
  const sessao = await auth();
  if (!sessao?.user?.id) redirect("/entrar");

  if (sessao.user.papel === "EMPRESA") {
    const empresa = await prisma.empresa.findUnique({
      where: { proprietarioId: sessao.user.id },
      include: {
        vagas: {
          where: { arquivadaEm: null },
          orderBy: { publicadoEm: "desc" },
          select: { id: true, titulo: true, candidaturas: { select: { id: true } } },
        },
      },
    });

    return (
      <section className="page-section">
        <div className="page-intro">
          <p className="eyebrow">Painel da empresa</p>
          <h1>Olá, {sessao.user.name?.split(" ")[0] ?? "empresa"}.</h1>
          <p className="hero-text">Gerencie o perfil e as oportunidades que sua empresa publicou.</p>
        </div>
        <div className="benefit-grid">
          <article className="benefit-card">
            <span>01</span>
            <h3>Perfil</h3>
            <p>{empresa ? empresa.nome : "Finalize o perfil da empresa para publicar vagas."}</p>
            {empresa && <Link className="text-link" href={`/empresas/${empresa.id}/editar`}>Editar empresa →</Link>}
          </article>
          <article className="benefit-card">
            <span>02</span>
            <h3>Vagas abertas</h3>
            <p>{empresa?.vagas.length ?? 0} oportunidade(s) publicada(s).</p>
            <Link className="text-link" href="/vagas/nova">Publicar vaga →</Link>
          </article>
          <article className="benefit-card">
            <span>03</span>
            <h3>Candidaturas</h3>
            <p>{empresa?.vagas.reduce((total, vaga) => total + vaga.candidaturas.length, 0) ?? 0} pessoa(s) interessada(s).</p>
          </article>
        </div>
        {empresa && empresa.vagas.length > 0 && (
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "1.6rem", marginBottom: "20px" }}>Suas vagas</h2>
            <div className="vagas-grid">
              {empresa.vagas.map((vaga) => (
                <article className="vaga-card" key={vaga.id}>
                  <div className="vaga-main-info">
                    <h3 className="vaga-title">{vaga.titulo}</h3>
                    <p style={{ color: "var(--muted)", margin: 0 }}>{vaga.candidaturas.length} candidatura(s)</p>
                  </div>
                  <Link className="button button-primary" href={`/vagas/${vaga.id}`}>Ver vaga →</Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }

  const candidaturas = await prisma.candidatura.findMany({
    where: { candidatoId: sessao.user.id },
    include: { vaga: { include: { empresa: { select: { nome: true } } } } },
    orderBy: { criadaEm: "desc" },
  });

  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Painel da pessoa candidata</p>
        <h1>Olá, {sessao.user.name?.split(" ")[0] ?? "pessoa"}.</h1>
        <p className="hero-text">Acompanhe as oportunidades para as quais você se candidatou.</p>
      </div>
      {candidaturas.length === 0 ? (
        <div className="benefit-card">
          <h3>Nenhuma candidatura ainda</h3>
          <p>Quando você se candidatar a uma vaga, ela aparecerá aqui.</p>
          <Link className="text-link" href="/vagas">Explorar vagas →</Link>
        </div>
      ) : (
        <div className="vagas-grid">
          {candidaturas.map((candidatura) => (
            <article className="vaga-card" key={candidatura.id}>
              <div className="vaga-main-info">
                <span className="vaga-empresa">{candidatura.vaga.empresa.nome}</span>
                <h3 className="vaga-title">{candidatura.vaga.titulo}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>Candidatura enviada</p>
              </div>
              <Link className="button button-primary" href={`/vagas/${candidatura.vaga.id}`}>Ver vaga →</Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}