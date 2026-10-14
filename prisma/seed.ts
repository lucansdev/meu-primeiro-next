import { PrismaClient } from "@prisma/client";
import empresas from "../dados/empresas.json";
import vagas from "../dados/vagas.json";

const prisma = new PrismaClient();

async function main() {
  for (const empresa of empresas) {
    await prisma.empresa.upsert({
      where: { id: empresa.id },
      update: {
        nome: empresa.nome,
        descricao: empresa.descricao,
        localizacao: empresa.localizacao,
        site: empresa.site,
      },
      create: empresa,
    });
  }

  const empresasPorNome = new Map(
    (await prisma.empresa.findMany({ select: { id: true, nome: true } })).map((empresa) => [empresa.nome, empresa.id]),
  );

  for (const vaga of vagas) {
    const empresaId = empresasPorNome.get(vaga.empresa);
    if (!empresaId) continue;

    const { empresa: _empresa, publicadoEm: _publicadoEm, ...dadosDaVaga } = vaga;
    await prisma.vaga.upsert({
      where: { id: vaga.id },
      update: { ...dadosDaVaga, empresaId },
      create: { ...dadosDaVaga, empresaId },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (erro) => {
    console.error(erro);
    await prisma.$disconnect();
    process.exit(1);
  });