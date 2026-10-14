import { afterEach, mock, test } from 'node:test';
import assert from 'node:assert/strict';
import { cadastrar } from '../app/cadastro/acoes';
import { prisma } from '../lib/prisma';
import { EsquemaDaEmpresa, EsquemaDeCadastro } from '../lib/esquemas';
import { Prisma } from '@prisma/client';

const inicial = { ok: false, erros: {}, valores: {} };
const dados = () => new FormData();
const findUniqueOriginal = prisma.usuario.findUnique;
const transacaoOriginal = prisma.$transaction;
afterEach(() => { prisma.usuario.findUnique = findUniqueOriginal; prisma.$transaction = transacaoOriginal; mock.restoreAll(); });

test('cadastro inválido não devolve senha nem campos extras ao cliente', async () => {
  const form = dados(); form.set('senha', 'segredo123'); form.set('extra', 'privado');
  const estado = await cadastrar(inicial, form);
  assert.equal(estado.ok, false);
  assert.equal('senha' in estado.valores, false);
  assert.equal('extra' in estado.valores, false);
});

for (const [campo, esperado] of [['nome', 'nomeDaEmpresa'], ['email', 'email']]) {
  test(`cadastro trata conflito concorrente de ${campo}`, async () => {
    prisma.usuario.findUnique = (async () => null) as unknown as typeof prisma.usuario.findUnique;
    prisma.$transaction = (async () => { throw new Prisma.PrismaClientKnownRequestError('conflito', { code: 'P2002', clientVersion: '6', meta: { target: [campo] } }); }) as unknown as typeof prisma.$transaction;
    const form = dados();
    for (const [k,v] of Object.entries({nome:'Pessoa Teste', email:'teste@example.com', senha:'segredo123', papel:'EMPRESA', nomeDaEmpresa:'Empresa Teste'})) form.set(k,v);
    const estado = await cadastrar(inicial, form);
    assert.equal(estado.ok, false);
    assert.ok(estado.erros[esperado]);
    assert.equal('senha' in estado.valores, false);
  });
}

test('site de empresa aceita apenas HTTP e HTTPS', () => {
  const empresa = { nome: 'Empresa', descricao: 'Descrição válida da empresa de teste.' };
  assert.equal(EsquemaDaEmpresa.safeParse({...empresa, site:'https://example.com'}).success,true);
  assert.equal(EsquemaDaEmpresa.safeParse({...empresa, site:'javascript:alert(1)'}).success,false);
  assert.equal(EsquemaDaEmpresa.safeParse({...empresa, site:'data:text/html,teste'}).success,false);
});

test('cadastro rejeita senha que o bcrypt truncaria em 72 bytes', () => {
  assert.equal(EsquemaDeCadastro.safeParse({nome:'Pessoa Teste', email:'teste@example.com', senha:'á'.repeat(40), papel:'CANDIDATO'}).success,false);
});
