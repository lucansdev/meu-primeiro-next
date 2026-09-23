import type { Candidatura, Empresa, Vaga } from "@/lib/tipos";

const DADOS_URL = (process.env.DADOS_URL ?? "").replace(/\/$/, "");
const REVALIDACAO_EM_SEGUNDOS = 60 * 60;
const criadas: Vaga[] = [];
const arquivadas = new Set<string>();
const candidaturas: Candidatura[] = [];
const empresasEditadas = new Map<string, Empresa>();

async function buscarDados<T>(caminho: string, tag: string): Promise<T> {
  if (!DADOS_URL) {
    throw new Error("Defina DADOS_URL com a URL pública da pasta dados do repositório.");
  }

  const resposta = await fetch(`${DADOS_URL}/${caminho}`, {
    next: {
      revalidate: REVALIDACAO_EM_SEGUNDOS,
      tags: [tag],
    },
  });

  if (!resposta.ok) {
    throw new Error(`Não foi possível carregar ${caminho}: ${resposta.status}`);
  }

  return resposta.json() as Promise<T>;
}

export async function listarVagas() {
  const [vagasBase, empresasBase] = await Promise.all([
    buscarDados<Vaga[]>("vagas.json", "vagas"),
    buscarDados<Empresa[]>("empresas.json", "empresas"),
  ]);
  const nomesAtualizados = new Map(
    empresasBase.map((empresa) => [empresa.nome, empresasEditadas.get(empresa.id)?.nome ?? empresa.nome]),
  );

  return [...criadas, ...vagasBase]
    .filter((vaga) => !arquivadas.has(vaga.id))
    .map((vaga) => ({ ...vaga, empresa: nomesAtualizados.get(vaga.empresa) ?? vaga.empresa }));
}

export async function buscarVaga(id: string) {
  return (await listarVagas()).find((vaga) => vaga.id === id);
}

export const buscarVagaPorId = buscarVaga;

export async function listarEmpresas() {
  const empresas = await buscarDados<Empresa[]>("empresas.json", "empresas");
  return empresas.map((empresa) => empresasEditadas.get(empresa.id) ?? empresa);
}

export async function buscarEmpresa(id: string) {
  return (await listarEmpresas()).find((empresa) => empresa.id === id);
}

export const buscarEmpresaPorId = buscarEmpresa;

export function guardarVaga(vaga: Vaga): void {
  criadas.unshift(vaga);
}

export function arquivarVaga(id: string): void {
  arquivadas.add(id);
}

export function guardarCandidatura(candidatura: Candidatura): void {
  candidaturas.push(candidatura);
}

export function guardarEmpresa(empresa: Empresa): void {
  empresasEditadas.set(empresa.id, empresa);
}
