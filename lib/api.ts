import type { Empresa, Vaga } from "@/lib/tipos";

const DADOS_URL = (process.env.DADOS_URL ?? "").replace(/\/$/, "");
const REVALIDACAO_EM_SEGUNDOS = 60 * 60;

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

export function listarVagas() {
  return buscarDados<Vaga[]>("vagas.json", "vagas");
}

export function buscarVaga(id: string) {
  return buscarDados<Vaga[]>("vagas.json", "vagas").then((vagas) =>
    vagas.find((vaga) => vaga.id === id),
  );
}

export const buscarVagaPorId = buscarVaga;

export function listarEmpresas() {
  return buscarDados<Empresa[]>("empresas.json", "empresas");
}

export function buscarEmpresa(id: string) {
  return buscarDados<Empresa[]>("empresas.json", "empresas").then((empresas) =>
    empresas.find((empresa) => empresa.id === id),
  );
}

export const buscarEmpresaPorId = buscarEmpresa;
