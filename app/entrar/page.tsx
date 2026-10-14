import Link from "next/link";
import FormularioDeLogin from "@/components/FormularioDeLogin";

export const metadata = {
  title: "Entrar | Leque de Vagas",
};

export default function EntrarPage() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <p className="eyebrow">Acesso à plataforma</p>
        <h1>Entre na sua conta.</h1>
        <p className="hero-text">Acompanhe candidaturas ou gerencie as vagas da sua empresa.</p>
      </div>
      <FormularioDeLogin />
      <p style={{ marginTop: "20px", color: "var(--muted)" }}>
        Ainda não tem conta? <Link className="text-link" href="/cadastro">Criar cadastro</Link>
      </p>
    </section>
  );
}