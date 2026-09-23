import { z } from "zod";

export function errosDeValidacao(erro: z.ZodError): Record<string, string> {
  return Object.fromEntries(
    Object.entries(erro.flatten().fieldErrors).flatMap(([campo, mensagens]) => {
      const primeiraMensagem = (mensagens as string[] | undefined)?.[0];
      return primeiraMensagem ? [[campo, primeiraMensagem]] : [];
    }),
  );
}

const textoObrigatorio = (campo: string) => z.string().trim().min(1, `${campo} é obrigatório.`);

export const EsquemaDaVaga = z.object({
  titulo: textoObrigatorio("Título").min(3, "Título deve ter ao menos 3 caracteres."),
  empresaId: textoObrigatorio("Empresa"),
  area: z.enum(["Front-end", "Back-end", "Full Stack", "Dados", "Design", "Qualidade"], { error: "Selecione uma área válida." }),
  senioridade: z.enum(["Estágio", "Júnior", "Pleno"], { error: "Selecione uma senioridade válida." }),
  localizacao: textoObrigatorio("Localização"),
  modalidade: z.enum(["Remoto", "Híbrido", "Presencial"], { error: "Selecione uma modalidade válida." }),
  aceitaIniciante: z.enum(["sim", "nao"]),
  descricao: textoObrigatorio("Descrição").min(20, "Descrição deve ter ao menos 20 caracteres."),
});

export const EsquemaDaEmpresa = z.object({
  nome: textoObrigatorio("Nome").min(2, "Nome deve ter ao menos 2 caracteres."),
  descricao: textoObrigatorio("Sobre").min(20, "Sobre deve ter ao menos 20 caracteres.").max(500, "Sobre deve ter no máximo 500 caracteres."),
  site: z.url("Site deve ser uma URL válida."),
});

export const EsquemaDaCandidatura = z.object({
  vagaId: textoObrigatorio("Vaga"),
  nome: textoObrigatorio("Nome").min(3, "Nome deve ter ao menos 3 caracteres."),
  email: z.email("Informe um e-mail válido."),
  habilidades: z.array(z.string()).min(1, "Selecione ao menos uma habilidade."),
});

export const EsquemaDeArquivamento = z.object({ id: textoObrigatorio("Vaga") });
