import { listarVagas } from "@/lib/api";

export default async function NumerosDoCatalogo() {
  const vagas = await listarVagas();
  const iniciantes = vagas.filter((vaga) => vaga.aceitaIniciante).length;

  return (
    <p aria-live="polite" style={{ color: "var(--muted)", fontWeight: 700, minHeight: "25px", margin: "0 0 24px" }}>
      {vagas.length} vagas · {iniciantes} aceitam quem está começando
    </p>
  );
}
