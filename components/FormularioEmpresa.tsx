"use client";

import { useActionState } from "react";
import type { Empresa, Estado } from "@/lib/tipos";
import { salvarEmpresa } from "@/app/empresas/[slug]/editar/acoes";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };
export default function FormularioEmpresa({ empresa }: { empresa: Empresa }) {
  const [estado, acao] = useActionState(salvarEmpresa.bind(null, empresa.id), estadoInicial);
  const valor = (campo: string, atual: string) => estado.valores[campo] ?? atual;
  return <form action={acao} className="vaga-detail-card form-stack">
    <div className="input-group"><label htmlFor="nome">Nome</label><input id="nome" name="nome" className="input-control" defaultValue={valor("nome", empresa.nome)} />{estado.erros.nome && <p className="form-error">{estado.erros.nome}</p>}</div>
    <div className="input-group"><label htmlFor="descricao">Sobre</label><textarea id="descricao" name="descricao" className="input-control" rows={7} defaultValue={valor("descricao", empresa.descricao)} />{estado.erros.descricao && <p className="form-error">{estado.erros.descricao}</p>}</div>
    <div className="input-group"><label htmlFor="site">Site</label><input id="site" name="site" type="url" className="input-control" defaultValue={valor("site", empresa.site)} />{estado.erros.site && <p className="form-error">{estado.erros.site}</p>}</div>
    {estado.mensagem && <p className={estado.ok ? "form-success" : "form-error"} role="status">{estado.mensagem}</p>}
    <BotaoDeEnviar texto="Salvar alterações" textoPendente="Salvando…" />
  </form>;
}
