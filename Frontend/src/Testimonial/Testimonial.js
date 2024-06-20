import React from "react";
import "./Testimonial.css";
import authorImage from "../image/author.jpg";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <h2>Testimonials</h2>
      <p>lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

      <button className="navigation prev">&lt;</button>

      <div className="testimonial-card">
        <blockquote>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          vitae officia laborum deleniti eum natus assumenda temporibus in velit
          corrupti."
        </blockquote>
      </div>

      <div className="both">
        <div className="author-info">
          <p className="author">John Smith</p>
          <p className="position">CEO of mayerk inc</p>
        </div>

        <div className="author-image">
          <img src={authorImage} alt="Author" className="im"/>
        </div>
      </div>

      <button className="navigation next">&gt;</button>
    </div>
  );
};
export default Testimonial;
