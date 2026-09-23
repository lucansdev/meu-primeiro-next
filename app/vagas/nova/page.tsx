import Link from "next/link";
import { listarEmpresas } from "@/lib/api";
import FormularioNovaVaga from "@/components/FormularioNovaVaga";

export default async function NovaVagaPage() {
  const empresas = await listarEmpresas();
  return <section className="page-section"><Link href="/vagas" className="text-link">← Voltar para vagas</Link><div className="page-intro"><p className="eyebrow">Nova oportunidade</p><h1>Publicar uma vaga</h1><p className="hero-text">Preencha os dados para incluir uma oportunidade no catálogo.</p></div><FormularioNovaVaga empresas={empresas} /></section>;
}
