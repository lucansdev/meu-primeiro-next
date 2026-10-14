CREATE TYPE "Papel" AS ENUM ('CANDIDATO', 'EMPRESA');

CREATE TABLE "Usuario" (
  "id" TEXT NOT NULL,
  "nome" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "senhaHash" TEXT NOT NULL,
  "papel" "Papel" NOT NULL,
  "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "atualizadoEm" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Empresa" (
  "id" TEXT NOT NULL,
  "nome" TEXT NOT NULL,
  "descricao" TEXT NOT NULL DEFAULT '',
  "localizacao" TEXT NOT NULL DEFAULT '',
  "site" TEXT NOT NULL DEFAULT '',
  "proprietarioId" TEXT,
  "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "atualizadoEm" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Vaga" (
  "id" TEXT NOT NULL,
  "titulo" TEXT NOT NULL,
  "empresaId" TEXT NOT NULL,
  "area" TEXT NOT NULL,
  "senioridade" TEXT NOT NULL,
  "localizacao" TEXT NOT NULL,
  "modalidade" TEXT NOT NULL,
  "aceitaIniciante" BOOLEAN NOT NULL DEFAULT false,
  "tecnologias" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "descricao" TEXT NOT NULL,
  "requisitos" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "beneficios" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "publicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "arquivadaEm" TIMESTAMP(3),
  "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "atualizadoEm" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Vaga_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Candidatura" (
  "id" TEXT NOT NULL,
  "vagaId" TEXT NOT NULL,
  "candidatoId" TEXT NOT NULL,
  "habilidades" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  "criadaEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Candidatura_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
CREATE UNIQUE INDEX "Empresa_nome_key" ON "Empresa"("nome");
CREATE UNIQUE INDEX "Empresa_proprietarioId_key" ON "Empresa"("proprietarioId");
CREATE UNIQUE INDEX "Candidatura_vagaId_candidatoId_key" ON "Candidatura"("vagaId", "candidatoId");
CREATE INDEX "Vaga_empresaId_idx" ON "Vaga"("empresaId");
CREATE INDEX "Vaga_arquivadaEm_publicadoEm_idx" ON "Vaga"("arquivadaEm", "publicadoEm");
CREATE INDEX "Candidatura_candidatoId_idx" ON "Candidatura"("candidatoId");

ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_proprietarioId_fkey"
  FOREIGN KEY ("proprietarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Vaga" ADD CONSTRAINT "Vaga_empresaId_fkey"
  FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Candidatura" ADD CONSTRAINT "Candidatura_vagaId_fkey"
  FOREIGN KEY ("vagaId") REFERENCES "Vaga"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Candidatura" ADD CONSTRAINT "Candidatura_candidatoId_fkey"
  FOREIGN KEY ("candidatoId") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;