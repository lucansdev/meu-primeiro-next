import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarEmpresaPorId } from "@/lib/api";
import FormularioEmpresa from "@/components/FormularioEmpresa";

export default async function EditarEmpresaPage({ params }: { params: Promise<{ slug: string }> }) {
  const empresa = await buscarEmpresaPorId((await params).slug);
  if (!empresa) notFound();
  return <section className="page-section"><Link href={`/empresas/${empresa.id}`} className="text-link">← Voltar para empresa</Link><div className="page-intro"><p className="eyebrow">Perfil da empresa</p><h1>Editar empresa</h1></div><FormularioEmpresa empresa={empresa} /></section>;
}
