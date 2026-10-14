import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import type { Papel } from "@/lib/tipos";

export async function sessaoAtual() {
  return auth();
}

export async function exigirPapel(papel: Papel) {
  const sessao = await auth();

  if (!sessao?.user?.id) {
    throw new Error("Faça login para continuar.");
  }

  if (sessao.user.papel !== papel) {
    throw new Error("Você não tem permissão para executar esta ação.");
  }

  return sessao;
}

export async function empresaDaSessao() {
  const sessao = await exigirPapel("EMPRESA");
  const empresa = await prisma.empresa.findUnique({
    where: { proprietarioId: sessao.user.id },
  });

  if (!empresa) {
    throw new Error("Conclua o cadastro da empresa antes de publicar vagas.");
  }

  return empresa;
}

export async function podeEditarEmpresa(empresaId: string) {
  const sessao = await auth();
  if (sessao?.user?.papel !== "EMPRESA") return false;

  const empresa = await prisma.empresa.findUnique({
    where: { id: empresaId },
    select: { proprietarioId: true },
  });

  return empresa?.proprietarioId === sessao.user.id;
}

export async function podeGerenciarVaga(vagaId: string) {
  const sessao = await auth();
  if (sessao?.user?.papel !== "EMPRESA") return false;

  const vaga = await prisma.vaga.findUnique({
    where: { id: vagaId },
    include: { empresa: { select: { proprietarioId: true } } },
  });

  return vaga?.empresa.proprietarioId === sessao.user.id;
}