"use client";

import { useState } from "react";

export default function BotaoCopiarLink() {
  const [copiado, setCopiado] = useState(false);

  // navigator.clipboard só existe no navegador — por isso este componente é "use client".
  const copiarLink = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopiado(true);
  };

  return (
    <button
      type="button"
      onClick={copiarLink}
      className={`button ${copiado ? "button-saved" : "button-secondary"}`}
    >
      {copiado ? "✓ Link copiado" : "🔗 Copiar link"}
    </button>
  );
}
