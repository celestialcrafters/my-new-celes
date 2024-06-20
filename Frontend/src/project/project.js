


import React, { useState } from "react";
import "./project.css";
import OIPImage from "../image/OIP.jpg";
import pcImage from "../image/pc.jpg";
import rightImage from "../image/right.jpg";
import leftImage from "../image/left.jpg";
import downImage from "../image/down.jpg";

function Proj() {
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/form/contact-us" /* replace that our API endpoint with the real API*/,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="Proj">
      <div className="header-content">
        <div className="overlay"></div>
        <img src={OIPImage} alt="Project Header" className="background-image" />
        <h1 className="sat">Start A Project</h1>
      </div>

      <div className="project-outline">
        <div className="left-section">
          <h2>
            Outline your project goals to define Your <br />
            Project Management Task
          </h2>
          <img src={pcImage} alt="Outline" className="collaboration" />
        </div>
        <div className="right-section">
          <h2>Your imagination, our craft.</h2>
          <p>
            start a project with us today and discover more. We take pride in
            our ability to not only create and ideate but also bring ideas to
            life, fueling innovation in the tech industry. From groundbreaking
            projects to transformative solutions, our portfolio reflects our
            commitment.
          </p>
        </div>
      </div>

      <div className="project-cycle">
        <div className="cycle-steps">
          <h2 className="cycle">Our Project Cycle</h2>
          <div className="steps">
            <div className="steps1">
              <div className="step">
                <button className="init">Project Initiation</button>
                <img src={rightImage} alt="right-arrow" className="arrow" />
              </div>

              <div className="step">
                <button className="plan">Project Planning</button>
                <img src={rightImage} alt="right-arrow" className="arrow" />
              </div>

              <div className="step">
                <button className="Exec">Project Execution</button>
              </div>
            </div>

            <div className="steps2">
              <div className="step">
                <button className="clos">Project Closing</button>
                <img src={leftImage} alt="right-arrow" className="arrow" />
              </div>

              <div className="step">
                <button className="rev">Project Reviews</button>
                <img src={leftImage} alt="right-arrow" className="arrow" />
              </div>

              <div className="step">
                <p>
                  <img src={downImage} alt="right-arrow" className="down" />
                </p>
                <button className="moni">Monitoring and Evaluation</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h2 className="your">Plan your project with us</h2>
        <form onSubmit={handleSubmit}>
          <label>Project Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          <label>Company's Name:</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <label>Project Description:</label>
          <textarea className="text1"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          <br />

          
        </form>
        <button 
        className='submit'
          type="submit">Submit </button>
      </div>
    </div>
  );
}

export default Proj;