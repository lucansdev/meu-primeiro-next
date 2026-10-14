"use client";

import { useFormStatus } from "react-dom";

export default function BotaoDeEnviar({ texto = "Enviar", textoPendente = "Enviando…", className = "button button-primary" }: {
  texto?: string;
  textoPendente?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return <button type="submit" className={className} disabled={pending}>{pending ? textoPendente : texto}</button>;
}
