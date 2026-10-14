import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { buscarEmpresaPorId } from "@/lib/api";
import { podeEditarEmpresa, sessaoAtual } from "@/lib/autorizacao";
import FormularioEmpresa from "@/components/FormularioEmpresa";

export default async function EditarEmpresaPage({ params }: { params: Promise<{ slug: string }> }) {
  const empresa = await buscarEmpresaPorId((await params).slug);
  if (!empresa) notFound();

  const sessao = await sessaoAtual();
  if (!sessao) redirect("/entrar");
  if (!(await podeEditarEmpresa(empresa.id))) redirect("/painel");

  return <section className="page-section"><Link href={`/empresas/${empresa.id}`} className="text-link">← Voltar para empresa</Link><div className="page-intro"><p className="eyebrow">Perfil da empresa</p><h1>Editar empresa</h1></div><FormularioEmpresa empresa={empresa} /></section>;
}