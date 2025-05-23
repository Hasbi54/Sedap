import { useEffect, useRef } from "react";
import testimonials from "../assets/Data/testimonials.json";
import "../assets/css/Testimonial.css";

export default function Testimonial() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".testimonial-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section id="testimonials" className="testimonial-section">
      <h1 className="testimonial-title">
        Apa Iyaa <br /> Seenak Itu?
      </h1>

      <div ref={containerRef} className="testimonial-container">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <p className="testimonial-review">"{t.review}"</p>
            <strong className="testimonial-name">{t.name}</strong>

            <div className="testimonial-rating">
              {Array(5).fill(0).map((_, idx) => (
                <span
                  key={idx}
                  className={`star ${idx < (t.rating || 4) ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
