import { listarVagas } from "@/lib/api";
import FiltroVagas from "./FiltroVagas";

export default async function ListagemDeVagas() {
  const vagas = await listarVagas();

  return <FiltroVagas vagasIniciais={vagas} />;
}
