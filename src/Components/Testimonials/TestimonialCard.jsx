import TestimonialsText from "./TestimonialsText";
import TestimonialsName from "./TestimonialsName";
import TestimonialsCie from "./TestimonialsCie";
import LogoWorkCation from "../../assets/LogoWorkCation.svg?react";
import { Fragment } from "react";

export default function TestimonialCard({
  pic,
  quote,
  companyLogo = <LogoWorkCation />,
  variant = "with-pic-horizontal",
  text,
  company,
  name,
}) {
  const isWithPic = variant.includes("with-pic");
  const renderContent = () => {
    if (variant === "no-pic-horizontal") {
      return (
        <Fragment>
          <TestimonialCard.Text>"{text}"</TestimonialCard.Text>
          <div className="name-company">
            <TestimonialCard.Name>{name}</TestimonialCard.Name>
            <span className="span-cie" aria-hidden="true">
              /
            </span>
            <TestimonialCard.Cie>{company}</TestimonialCard.Cie>
          </div>
        </Fragment>
      );
    }

    return (
      <Fragment>
        <TestimonialCard.Text>"{text}"</TestimonialCard.Text>
        <TestimonialCard.Name>{name}</TestimonialCard.Name>
        <TestimonialCard.Cie>{company}</TestimonialCard.Cie>
      </Fragment>
    );
  };
  return (
    <div className={`testimonial-card ${variant}`}>
      <div className="testimonial-content">
        {isWithPic && pic && (
          <img src={pic} alt={name} className="testimonial-pic" />
        )}
        {!isWithPic && companyLogo && (
          <div className="testimonial-logo" role="img" aria-label={company}>
            {companyLogo}
          </div>
        )}
        <div className="content-container">
          {isWithPic && quote && (
            <div className="testimonial-quote" aria-hidden="true">
              {quote}
            </div>
          )}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

TestimonialCard.Text = TestimonialsText;
TestimonialCard.Name = TestimonialsName;
TestimonialCard.Cie = TestimonialsCie;
