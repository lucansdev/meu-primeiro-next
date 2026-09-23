# Leque de Vagas

Catálogo de oportunidades construído com Next.js App Router.

## Dados externos e atualização

As vagas e empresas ficam nos arquivos `dados/vagas.json` e `dados/empresas.json`.
Publique a pasta `dados` no repositório remoto da equipe e copie a URL **Raw** da
pasta para um arquivo `.env.local`:

```bash
DADOS_URL=https://raw.githubusercontent.com/SUA-EQUIPE/leque-de-vagas/main/dados
```

Use `.env.example` como referência. A aplicação busca essa fonte somente em
`lib/api.ts`; páginas e componentes chamam as funções dessa camada.

Cada consulta permanece em cache por **uma hora** (`revalidate: 3600`). Essa é
uma escolha adequada para um catálogo de vagas: reduz chamadas à fonte externa
e garante que uma vaga nova apareça no site publicado em, no pior caso, **60
minutos**. As tags `vagas` e `empresas` já deixam o catálogo pronto para
revalidação imediata por Server Action em uma próxima aula.

## Escritas da aula 05

Criar, editar, candidatar-se e arquivar funcionam por Server Actions, sem rotas
em `app/api`. Como a fonte base é um JSON Raw somente de leitura, os dados
escritos vivem na memória do processo em `lib/api.ts`. Eles aparecem enquanto o
servidor local continua ligado e somem ao reiniciá-lo; em deploy com múltiplas
instâncias esse comportamento também não é persistente. A próxima aula troca
apenas essa camada por um banco de dados.

## Executar localmente

```bash
npm install
npm run dev
```

Antes de executar `npm run build`, configure `DADOS_URL` com a URL Raw pública;
as páginas de detalhe são pré-geradas a partir dessa fonte.
