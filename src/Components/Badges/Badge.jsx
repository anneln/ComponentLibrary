export default function Badge({ children, shape, color }) {
  return (
    <section className="badges-section">
      <div className={`badge ${shape} ${color}`}>{children}</div>
    </section>
  );
}
