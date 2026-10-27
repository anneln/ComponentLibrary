export default function CardIcon({ icon, bgColor }) {
  const BrandIcon = icon;
  return (
    <div
      className="card-icon"
      style={{ backgroundColor: bgColor }}
      aria-hidden="true"
    >
      {BrandIcon && <BrandIcon />}
    </div>
  );
}
