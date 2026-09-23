export default function VagaDetalheLoading() {
  return (
    <section className="page-section" aria-label="Carregando vaga">
      <div className="vaga-detail-container">
        <div className="vaga-detail-card">
          <div className="skeleton" style={{ width: "35%", height: "22px", marginBottom: "22px" }} />
          <div className="skeleton" style={{ width: "80%", height: "48px", marginBottom: "18px" }} />
          <div className="skeleton" style={{ width: "50%", height: "20px", marginBottom: "42px" }} />
          <div className="skeleton" style={{ width: "100%", height: "180px" }} />
        </div>
        <aside className="sidebar-box">
          <div className="skeleton" style={{ width: "65%", height: "26px", marginBottom: "14px" }} />
          <div className="skeleton" style={{ width: "100%", height: "90px" }} />
        </aside>
      </div>
    </section>
  );
}
