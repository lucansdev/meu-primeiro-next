import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AbasDaEmpresa from "@/components/AbasDaEmpresa";
import { buscarEmpresaPorId, listarEmpresas, listarVagas } from "@/lib/api";
import { podeEditarEmpresa } from "@/lib/autorizacao";

interface EmpresaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (await listarEmpresas()).map((empresa) => ({ slug: empresa.id }));
}

export async function generateMetadata({ params }: EmpresaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const empresa = await buscarEmpresaPorId(slug);
  if (!empresa) return { title: "Empresa não encontrada · Leque de Vagas" };
  return { title: `${empresa.nome} · Leque de Vagas`, description: empresa.descricao };
}

export default async function EmpresaPage({ params }: EmpresaPageProps) {
  const { slug } = await params;
  const empresa = await buscarEmpresaPorId(slug);
  if (!empresa) notFound();

  const [vagas, podeEditar] = await Promise.all([
    listarVagas(),
    podeEditarEmpresa(empresa.id),
  ]);

  return (
    <section className="page-section">
      <Link href="/empresas" className="text-link" style={{ marginBottom: "28px" }}>← Voltar para empresas</Link>
      <div style={{ marginBottom: "32px" }}><p className="eyebrow">Empresa parceira</p><h1>{empresa.nome}</h1><p className="hero-text">{empresa.localizacao}</p>{podeEditar && <Link href={`/empresas/${empresa.id}/editar`} className="button button-secondary">Editar empresa</Link>}</div>
      <AbasDaEmpresa empresa={empresa} vagas={vagas.filter((vaga) => vaga.empresaId === empresa.id)} />
    </section>
  );
}