export default function Gallery({ items, renderItem }) {
  return (
    <section className="showcase">
      {items.map((item, i) => renderItem(item, i))}
    </section>
  );
}
