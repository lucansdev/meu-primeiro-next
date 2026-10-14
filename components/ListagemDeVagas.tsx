import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { listarVagas } from "@/lib/api";
import FiltroVagas from "./FiltroVagas";

export default async function ListagemDeVagas() {
  const [vagas, sessao] = await Promise.all([listarVagas(), auth()]);
  const empresa = sessao?.user?.papel === "EMPRESA"
    ? await prisma.empresa.findUnique({ where: { proprietarioId: sessao.user.id }, select: { id: true } })
    : null;

  return <FiltroVagas vagasIniciais={vagas} empresaDaSessaoId={empresa?.id} />;
}