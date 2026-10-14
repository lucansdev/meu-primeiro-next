import { afterEach, mock, test } from 'node:test';
import assert from 'node:assert/strict';
import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma';

mock.module('../lib/autorizacao.ts', { namedExports: { exigirPapel: async () => ({user:{id:'candidato-teste'}}) } });
mock.module('next/cache', { namedExports: { revalidatePath: () => {} } });
const original = prisma.$transaction;
afterEach(() => { prisma.$transaction = original; });
const inicial = {ok:false, erros:{}, valores:{}};
function dados() { const f=new FormData(); f.set('vagaId','vaga-teste');f.append('habilidades','React');return f; }

test('vaga indisponível não recebe candidatura', async () => {
  const {enviarCandidatura}=await import('../app/vagas/[id]/acoes');
  let criada=false;
  prisma.$transaction = (async (executar: (db: unknown) => Promise<unknown>) => executar({
    $queryRaw: async () => [],
    candidatura: {create: async () => {criada=true;}},
  })) as unknown as typeof prisma.$transaction;
  const resultado=await enviarCandidatura(inicial,dados());
  assert.equal(resultado.ok,false);assert.ok(resultado.erros.vagaId);assert.equal(criada,false);
});

test('candidatura duplicada retorna mensagem em vez de lançar erro', async () => {
  const {enviarCandidatura}=await import('../app/vagas/[id]/acoes');
  prisma.$transaction=(async()=>{throw new Prisma.PrismaClientKnownRequestError('duplicada',{code:'P2002',clientVersion:'6'});}) as unknown as typeof prisma.$transaction;
  const resultado=await enviarCandidatura(inicial,dados());
  assert.equal(resultado.ok,false);assert.match(resultado.erros.vagaId,/já se candidatou/);
});

test('candidatura válida usa bloqueio parametrizado e grava o usuário autenticado', async () => {
  const {enviarCandidatura}=await import('../app/vagas/[id]/acoes');
  let gravada: unknown;
  prisma.$transaction = (async (executar: (db: unknown) => Promise<unknown>) => executar({
    $queryRaw: async (sql: TemplateStringsArray, id: string) => {assert.match(sql.join('?'),/FOR UPDATE/);assert.equal(id,'vaga-teste');return [{id}];},
    candidatura: {create: async (entrada: unknown) => {gravada=entrada;}},
  })) as unknown as typeof prisma.$transaction;
  const resultado=await enviarCandidatura(inicial,dados());
  assert.equal(resultado.ok,true);assert.deepEqual(gravada,{data:{vagaId:'vaga-teste',candidatoId:'candidato-teste',habilidades:['React']}});
});
