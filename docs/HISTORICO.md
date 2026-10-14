# Histórico explicado

Este documento registra as mudanças existentes antes da correção do deploy, na ordem dos commits. As descrições foram conferidas nos diffs. Revisão retroativa significa revisar agora trabalho que já estava na main; não significa que houve PR ou aprovação antes da integração.

| Commit | Explicação |
| --- | --- |
| `e632d8b` | Cria a aplicação Next.js com TypeScript, configuração de lint, páginas inicial/sobre/contato, cabeçalho, rodapé e arquivos públicos. É a base do projeto. |
| `6622f9e` | Esvazia o README inicial. A mensagem “papo” não descreve a mudança; nenhum comportamento da aplicação é alterado. |
| `2d22f99` | Expande os estilos globais com cores, componentes visuais e regras de layout. |
| `2146f4d` | Prepara o catálogo de vagas, seus tipos e dados simulados, navegação e telas de carregamento, erro e página não encontrada. As páginas de listagem/detalhe chegam depois. |
| `79ccac1` | Cria os componentes interativos de busca/filtros e o botão de salvar vaga com estado local do React. |
| `0eb2265` | Conecta listagem e detalhe aos dados assíncronos simulados; gera parâmetros estáticos e metadados específicos das vagas. |
| `736e2ff` | Ajusta o detalhe da vaga e seu CSS ao escopo da aula 4. |
| `bab3ed7` | Redesenha estilos globais, cabeçalho e rodapé com tema escuro. |
| `58b1653` | Reorganiza o conteúdo de home, sobre e contato e a apresentação do filtro de vagas. |
| `297cf72` | Aplica os tokens visuais Alchemy T3 aos estilos e à navegação. |
| `9a674bc` | Atualiza as páginas com hero escuro, conteúdo claro e destaques amarelo/ciano. |
| `68683d7` | Reorganiza os dados de vagas e extrai card e descrição em componentes; adiciona botão para copiar o link e amplia o detalhe. |
| `42228f4` | Introduz a camada de API/tipos, dados JSON, páginas de empresas, abas e carregamento de vagas com Suspense; prepara candidatura. |
| `6e68141` | Adiciona Server Actions e validação com Zod para candidatura, publicação, arquivamento e edição de empresa. Nesta etapa, a persistência ainda não é a do backend posterior. |
| `b03634a` | Faz a camada de dados usar os JSON locais quando DADOS_URL não está configurada. Esse mecanismo foi substituído pela integração com banco. |
| `82164cb` | Adiciona PostgreSQL via Prisma, migração, seed, login/cadastro com NextAuth e bcrypt, autorização por papel e painel. Declara dependências novas sem atualizar o lockfile e não automatiza a geração do Prisma no build. |
| `f354d92` | Restaura a folha de estilos completa preservando o visual existente após a integração do backend. |
| `82faf96` | Documenta banco, variáveis de ambiente, geração do Prisma, migração, seed e acesso. |

## Correções desta entrega

- **fix(build): sincronizar dependências e gerar cliente Prisma**: atualiza o lockfile para incluir as dependências do backend e faz cada build gerar o cliente a partir do schema, inclusive quando a hospedagem reutiliza cache. Remove também a enumeração de vagas/empresas durante o build; os detalhes são resolvidos por requisição, e `connection()` adia as leituras até uma requisição real, sem exigir consulta ao banco para compilar.
- **ci: validar instalação e build em pull requests**: executa instalação limpa, lint e build no GitHub Actions para identificar falhas antes da integração.
- **docs: explicar commits e revisão retroativa**: registra este histórico e os passos de deploy e revisão, mantendo hashes e autores originais.

## Revisão e aprovação

Os commits já publicados não ganham uma aprovação passada ao editar mensagens ou refazer merges. Um PR retroativo permite revisão atual e deve ser identificado como tal. O commit inicial é a base da comparação; os demais commits podem ser revisados na aba Commits do PR retroativo. Não integrar esse PR de comparação na main: as mudanças já existem nela.

Para mudanças novas, criar uma branch a partir da main, abrir PR para main, aguardar CI e revisão real e só então integrar. Regras obrigatórias de aprovação dependem de alguém com permissão administrativa no repositório.
