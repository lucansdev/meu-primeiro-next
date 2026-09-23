"use client";

import { useActionState } from "react";
import type { Empresa, Estado } from "@/lib/tipos";
import { criarVaga } from "@/app/vagas/nova/acoes";
import BotaoDeEnviar from "./BotaoDeEnviar";

const estadoInicial: Estado = { ok: false, erros: {}, valores: {} };
const erro = (estado: Estado, campo: string) => estado.erros[campo] && <p className="form-error">{estado.erros[campo]}</p>;

export default function FormularioNovaVaga({ empresas }: { empresas: Empresa[] }) {
  const [estado, acao] = useActionState(criarVaga, estadoInicial);
  return (
    <form action={acao} className="vaga-detail-card form-stack">
      <div className="input-group"><label htmlFor="titulo">Título</label><input id="titulo" name="titulo" className="input-control" defaultValue={estado.valores.titulo} />{erro(estado, "titulo")}</div>
      <div className="input-group"><label htmlFor="empresaId">Empresa</label><select id="empresaId" name="empresaId" className="select-control" defaultValue={estado.valores.empresaId ?? ""}><option value="">Selecione uma empresa</option>{empresas.map((empresa) => <option key={empresa.id} value={empresa.id}>{empresa.nome}</option>)}</select>{erro(estado, "empresaId")}</div>
      <div className="form-grid">
        <div className="input-group"><label htmlFor="area">Área</label><select id="area" name="area" className="select-control" defaultValue={estado.valores.area ?? ""}><option value="">Selecione</option>{["Front-end", "Back-end", "Full Stack", "Dados", "Design", "Qualidade"].map((item) => <option key={item}>{item}</option>)}</select>{erro(estado, "area")}</div>
        <div className="input-group"><label htmlFor="senioridade">Senioridade</label><select id="senioridade" name="senioridade" className="select-control" defaultValue={estado.valores.senioridade ?? ""}><option value="">Selecione</option>{["Estágio", "Júnior", "Pleno"].map((item) => <option key={item}>{item}</option>)}</select>{erro(estado, "senioridade")}</div>
        <div className="input-group"><label htmlFor="modalidade">Modalidade</label><select id="modalidade" name="modalidade" className="select-control" defaultValue={estado.valores.modalidade ?? ""}><option value="">Selecione</option>{["Remoto", "Híbrido", "Presencial"].map((item) => <option key={item}>{item}</option>)}</select>{erro(estado, "modalidade")}</div>
      </div>
      <div className="input-group"><label htmlFor="localizacao">Localização</label><input id="localizacao" name="localizacao" className="input-control" defaultValue={estado.valores.localizacao} placeholder="Ex.: João Pessoa, PB" />{erro(estado, "localizacao")}</div>
      <fieldset className="choice-group"><legend>Aceita iniciante?</legend><label><input type="radio" name="aceitaIniciante" value="sim" defaultChecked={estado.valores.aceitaIniciante !== "nao"} /> Sim</label><label><input type="radio" name="aceitaIniciante" value="nao" defaultChecked={estado.valores.aceitaIniciante === "nao"} /> Não</label></fieldset>
      <div className="input-group"><label htmlFor="descricao">Descrição</label><textarea id="descricao" name="descricao" className="input-control" rows={6} defaultValue={estado.valores.descricao} />{erro(estado, "descricao")}</div>
      <BotaoDeEnviar texto="Publicar vaga" textoPendente="Publicando…" />
    </form>
  );
}
