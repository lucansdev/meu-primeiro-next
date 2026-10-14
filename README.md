# Leque de Vagas

Catálogo de oportunidades construído com Next.js App Router.

# Desenvolvedores
João Victor Araújo de Sales Mendes
Raul Cabral Caxeta
Johann Bezerra de Andrade
Lucas Andrade Nascimento

## Backend e autenticação

O catálogo agora usa PostgreSQL do Supabase por meio do Prisma. Vagas, empresas, usuários e candidaturas são persistidos no banco; as leituras não dependem mais de variáveis em memória.

A autenticação usa credenciais com senha em hash e dois papéis:

- **Pessoa candidata:** pode se candidatar e consultar as próprias candidaturas em `/painel`.
- **Empresa:** possui uma única empresa, pode editar somente seu perfil, publicar vagas, arquivar somente as próprias vagas e acompanhar o total de candidaturas no painel.

As Server Actions repetem as verificações de autorização no servidor; esconder um botão na tela não é a única barreira de acesso.

## Configuração local

1. Crie um projeto no Supabase e obtenha a string de conexão PostgreSQL.
2. Copie `.env.example` para `.env.local` e preencha `DATABASE_URL` e `AUTH_SECRET` localmente. Nunca versione ou compartilhe esses valores.
3. Instale as novas dependências:

   ```bash
   npm ci
   ```

4. Gere o cliente do Prisma, aplique a migração e carregue o catálogo inicial:

   ```bash
   npm run db:generate
   npm run db:deploy
   npm run db:seed
   ```

5. Inicie a aplicação:

   ```bash
   npm run dev
   ```

Depois, crie uma conta em `/cadastro`. Ao selecionar o perfil **Empresa**, uma empresa vinculada à conta é criada automaticamente.

## Deploy

No ambiente de hospedagem, configure `DATABASE_URL` e `AUTH_SECRET` nas variáveis de ambiente. Antes do primeiro deploy que usa o banco, execute `npm run db:deploy` em um ambiente com acesso à base. O banco inicial pode ser preenchido uma única vez com `npm run db:seed`.


O comando `npm run build` gera o cliente Prisma antes de executar o build do Next.js. Os detalhes de vagas e empresas são renderizados por requisição; o build não enumera registros do banco. O `package-lock.json` deve ser versionado junto de qualquer mudança de dependências. O GitHub Actions valida instalação limpa, lint e build em cada PR e em pushes para `main`.

Na Vercel, use o preset Next.js, instalação `npm ci` e build `npm run build`. Configure `AUTH_URL` com a URL HTTPS da aplicação caso ela seja definida explicitamente; não use o endereço local em produção. `DATABASE_URL` e `AUTH_SECRET` precisam estar configuradas no ambiente publicado. Build aprovado não comprova conexão com banco nem funcionamento de login: valide cadastro, login, publicação de vaga e candidatura após aplicar a migração. Não execute seed a cada build.

Veja [a explicação de cada commit e o processo de revisão](docs/HISTORICO.md).
