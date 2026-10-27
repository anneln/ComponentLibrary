import BannerIcon from "./BannerIcon";
import BannerTitle from "./BannerTitle";
import BannerText from "./BannerText";

const statusLabels = {
  success: "Succes :",
  warning: "warning :",
  error: "Error :",
  neutral: "Information :",
};

export default function Banner({
  type,
  icon,
  title,
  text,
  children,
  live = false,
}) {
  if (children) return <div className={`banner ${type}`}>{children}</div>;

  const bannerClass = `banner ${type} ${!text ? "single" : "multi"}`;
  return (
    <div className={bannerClass} role={live ? "alert" : undefined}>
      <span className="sr-only">{statusLabels[type]}</span>
      <div className="banner-content">
        {icon && <Banner.Icon>{icon}</Banner.Icon>}
        {title && <Banner.Title>{title}</Banner.Title>}
        {text && <Banner.Text>{text}</Banner.Text>}
      </div>
    </div>
  );
}
Banner.Icon = BannerIcon;
Banner.Title = BannerTitle;
Banner.Text = BannerText;
