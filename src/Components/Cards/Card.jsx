import CardIcon from "./CardIcon";
import CardTitle from "./CardTitle";
import CardText from "./CardText";
import CardContent from "./CardContent";
import Cloudupload from "../../assets/Cloudupload.svg?react";

export default function Card({
  children,
  icon = Cloudupload,
  iconBgColor = "#3f75fe",
}) {
  return (
    <section className="showcase">
      <h2>Cards</h2>
      <div className="card-col">
        <div className="card">
          <Card.Icon icon={icon} bgColor={iconBgColor} />
          {children}
        </div>
        <div className="card card-hover">
          <Card.Icon icon={icon} bgColor={iconBgColor} />
          {children}
          <span className="hover-text">Hover</span>
        </div>
      </div>
    </section>
  );
}

Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Text = CardText;
Card.Content = CardContent;
