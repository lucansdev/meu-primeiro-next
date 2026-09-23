import { vagas, type Vaga } from "@/data/vagas";

export async function getVagas(): Promise<Vaga[]> {
  // Simular delay de rede (Aula 04 Data Fetching)
  await new Promise((resolve) => setTimeout(resolve, 800));
  return vagas;
}

export async function getVagaById(id: string): Promise<Vaga | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return vagas.find((vaga) => vaga.id === id);
}
