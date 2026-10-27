import TestimonialCard from "./TestimonialCard";
import Quote from "../../assets/Quote.svg?react";
import Profile from "../../assets/Profil.png";

const testimonialData = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
  name: "May Andersons",
  company: "Workcation, CTO",
};

export default function TestimonialGallery() {
  return (
    <section className="testi-showcase" aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">Testimonials</h2>
      <div className="testimonial-grid">
        <TestimonialCard
          variant="with-pic-horizontal"
          pic={Profile}
          quote={<Quote />}
          text={testimonialData.text}
          name={testimonialData.name}
          company={testimonialData.company}
        />

        <TestimonialCard
          variant="with-pic-vertical"
          pic={Profile}
          quote={<Quote />}
          text={testimonialData.text}
          name={testimonialData.name}
          company={testimonialData.company}
        />

        <TestimonialCard
          variant="no-pic-horizontal"
          quote={<Quote />}
          text={testimonialData.text}
          name={testimonialData.name}
          company={testimonialData.company}
        />

        <TestimonialCard
          variant="no-pic-vertical"
          quote={<Quote />}
          text={testimonialData.text}
          name={testimonialData.name}
          company={testimonialData.company}
        />
      </div>
    </section>
  );
}
