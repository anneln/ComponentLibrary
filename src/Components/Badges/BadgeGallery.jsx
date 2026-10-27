import Badge from "./Badge";
import Gallery from "./../Gallery";

export default function BadgeGallery({ children }) {
  const shapes = ["square", "pills"];
  const colors = [
    "grey",
    "error",
    "warning",
    "success",
    "neutral",
    "indigo",
    "purple",
    "pink",
  ];

  return (
    <section className="showcase">
      <h2>Badges</h2>
      {shapes.map((shape) => (
        <div key={shape}>
          <div className="badges-row">
            <h3>{shape}</h3>
            <Gallery
              items={colors}
              renderItem={(color) => (
                <Badge key={`${shape}-${color}`} shape={shape} color={color}>
                  {children}
                </Badge>
              )}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
