"use client";

import { useActionState } from "react";
import { arquivar } from "@/app/vagas/acoes";
import type { Estado } from "@/lib/tipos";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };
export default function AcaoArquivarVaga({ vagaId }: { vagaId: string }) {
  const [estado, acao] = useActionState(arquivar, estadoInicial);
  return <form action={acao}><input type="hidden" name="id" value={vagaId} /><BotaoDeEnviar texto="Arquivar" textoPendente="Arquivando…" className="button button-danger" />{estado.mensagem && <p className="form-error">{estado.mensagem}</p>}</form>;
}
