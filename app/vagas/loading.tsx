export default function VagasLoading() {
  return (
    <section className="page-section">
      <div className="page-intro">
        <div className="skeleton" style={{ width: "160px", height: "20px", marginBottom: "16px" }}></div>
        <div className="skeleton" style={{ width: "60%", height: "48px", marginBottom: "40px" }}></div>
      </div>
      <div className="vagas-grid">
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
        <div className="skeleton skeleton-card"></div>
      </div>
    </section>
  );
}
