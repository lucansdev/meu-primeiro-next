import Link from "next/link";
import FormularioDeCadastro from "@/components/FormularioDeCadastro";

export const metadata = {
  title: "Criar conta | Leque de Vagas",
};

export default function CadastroPage() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Primeiro acesso</p>
        <h1>Crie sua conta.</h1>
        <p className="hero-text">Escolha o perfil que representa a sua participação no catálogo.</p>
      </div>
      <FormularioDeCadastro />
      <p style={{ marginTop: "20px", color: "var(--muted)" }}>
        Já possui conta? <Link className="text-link" href="/entrar">Entrar</Link>
      </p>
    </section>
  );
}