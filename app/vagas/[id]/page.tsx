import { notFound } from "next/navigation";
import Link from "next/link";
import { buscarVaga, listarVagas } from "@/lib/api";
import BotaoSalvarVaga from "@/components/BotaoSalvarVaga";
import BotaoCopiarLink from "@/components/BotaoCopiarLink";
import CardDeVaga from "@/components/CardDeVaga";
import DescricaoDaVaga from "@/components/DescricaoDaVaga";
import FormularioDeCandidatura from "@/components/FormularioDeCandidatura";
import type { Metadata } from "next";

interface VagaPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: VagaPageProps): Promise<Metadata> {
  const { id } = await params;
  const vaga = await buscarVaga(id);

  if (!vaga) {
    return { title: "Vaga não encontrada | Leque de Vagas" };
  }

  return {
    title: `${vaga.titulo} na ${vaga.empresa} | Leque de Vagas`,
    description: vaga.descricao,
  };
}

export async function generateStaticParams() {
  const vagas = await listarVagas();

  return vagas.map((vaga) => ({
    id: vaga.id,
  }));
}

export default async function VagaDetalhePage({ params }: VagaPageProps) {
  const { id } = await params;
  const vaga = await buscarVaga(id);

  if (!vaga) {
    notFound();
  }

  const vagas = await listarVagas();
  const outrasDaArea = vagas.filter((v) => v.area === vaga.area && v.id !== vaga.id);

  return (
    <section className="page-section">
      <div style={{ marginBottom: "24px" }}>
        <Link href="/vagas" className="text-link">
          ← Voltar para a lista de vagas
        </Link>
      </div>

      <div className="vaga-detail-container">
        <div className="vaga-detail-card">
          <div className="vaga-header">
            <span className="vaga-empresa">{vaga.empresa}</span>
            <span className="badge">{vaga.area}</span>
            <span className="badge badge-modality">{vaga.modalidade}</span>
            <span className="badge badge-seniority">{vaga.senioridade}</span>
            {vaga.aceitaIniciante && <span className="badge badge-iniciante">Aceita iniciante</span>}
          </div>
          <h1 style={{ fontSize: "2.2rem", marginBottom: "16px" }}>{vaga.titulo}</h1>
          <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: "24px" }}>
            📍 {vaga.localizacao} • Publicado {vaga.publicadoEm}
          </p>

          <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
            <BotaoSalvarVaga vagaId={vaga.id} />
            <BotaoCopiarLink />
          </div>

          <hr style={{ border: "none", borderTop: "1px solid var(--line)", margin: "32px 0" }} />

          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Sobre a vaga</h2>
          <DescricaoDaVaga texto={vaga.descricao} />

          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Requisitos</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "32px", lineHeight: 1.8 }}>
            {vaga.requisitos.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Benefícios</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "32px", lineHeight: 1.8 }}>
            {vaga.beneficios.map((ben, i) => (
              <li key={i}>{ben}</li>
            ))}
          </ul>

          <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>Tecnologias envolvidas</h2>
          <div className="vaga-tags">
            {vaga.tecnologias.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <aside className="vaga-sidebar">
          <div className="sidebar-box">
            <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Gostou da Oportunidade?</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "16px" }}>
              Esta vaga foi publicada recentemente pela empresa {vaga.empresa}.
            </p>
            <Link href="/contato" className="button button-primary" style={{ width: "100%" }}>
              Entrar em Contato
            </Link>
          </div>
          <FormularioDeCandidatura tituloDaVaga={vaga.titulo} />
        </aside>
      </div>

      {outrasDaArea.length > 0 && (
        <div style={{ marginTop: "56px" }}>
          <h2 style={{ fontSize: "1.4rem", marginBottom: "20px" }}>Outras vagas de {vaga.area}</h2>
          <div className="vagas-grid">
            {outrasDaArea.map((outra) => (
              <CardDeVaga key={outra.id} vaga={outra} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
