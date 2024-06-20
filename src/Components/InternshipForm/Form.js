import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [collegeUniversity, setCollegeUniversity] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [preferredInternship, setPreferredInternship] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [anyInquiry, setAnyInquiry] = useState("");
  const [transactionCode, setTransactionCode] = useState("");
  const [paymentName, setPaymentName] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !fullName ||
      !email ||
      !gender ||
      !contactNumber ||
      !country ||
      !education ||
      !collegeUniversity ||
      !currentYear ||
      !preferredInternship ||
      !skillLevel ||
      !hearAbout ||
      !anyInquiry ||
      !transactionCode ||
      !paymentName ||
      !terms
    ) {
      console.log("Please fill in all required fields.");
      return;
    }

    const formData = {
      fullName,
      email,
      gender,
      contactNumber,
      country,
      education,
      collegeUniversity,
      currentYear,
      preferredInternship,
      skillLevel,
      hearAbout,
      anyInquiry,
      transactionCode,
      paymentName,
      terms,
    };

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Form submitted successfully!");
        console.log("Form submitted successfully:", data);
      } else {
        console.error("Form submission failed.");
        throw new Error("Form submission failed.");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.error("Error submitting the form:", error);
    }

    setFullName("");
    setEmail("");
    setGender("");
    setContactNumber("");
    setCountry("");
    setEducation("");
    setCollegeUniversity("");
    setCurrentYear("");
    setPreferredInternship("");
    setSkillLevel("");
    setHearAbout("");
    setAnyInquiry("");
    setTransactionCode("");
    setPaymentName("");
    setTerms(false);
  };

  return (
    <div className="container-fluid p-0 m-auto">
      <section className="intro-form m-auto d-block p-3 pt-4 pb-5">
        <h1 className="text-center header">
          Celestial Crafters Internship Program
        </h1>
        <div className="intro m-auto">
          <h2 className="mb-4">
            This is a 6-week Virtual Internship Program opportunity.
          </h2>
          <p className="mb-3">This Internship offers the following perks:</p>
          <ol className="list-unstyled">
            <li className="mb-3">
              <p>
                An opportunity to experience a touch of women in Technology,
                feel what it is like to work in a fast-paced youth-led
                organization and gain firsthand insights into the challenges and
                opportunities within the field.
              </p>
            </li>
            <li>
              Work on real-time projects, allowing interns to apply their skills
              and knowledge in real-world settings. The internship program also
              serves as a platform for professional development and skill
              enhancement.
            </li>
            <li>
              Networking Opportunities Get to understand how to collaborate,
              work and connect with Celestial Crafters members and interns from
              around the world experiencing a multicultural and rare diverse
              working environment.
            </li>
            <li>
              Learning Opportunities As an intern at Celestial Crafters you'll
              dive into a collaborative, intellectually stimulating environment,
              gaining hands-on experience with cutting-edge projects at the
              forefront of technological advancement.
            </li>
            <li>
              Job Opportunities For the outstanding candidate per cohort there
              will be an inter-competition to determine their employability. All
              outstanding candidates will be posted on our social media accounts
              for visibility and endorse their LinkedIn account.
            </li>
            <li>Get personalized guidance and 24/7 support.</li>
            <li>Offer letter from Celestial Crafters.</li>
            <li>
              Internship Certificate - A verifiable completion certificate is
              provided after the successful completion of the internship.
            </li>
            <li>
              Letter of recommendation - A verifiable recommendation letter is
              provided to top-performing interns based on various assessment
              parameters.
            </li>
          </ol>
          <p className="slots">
            *Limited slots available. Apply before the 29th of September.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              className="form-control"
              id="full-name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group flex-wrap">
            <label htmlFor="gender">Gender:</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender("female")}
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="nonBinary"
                value="nonBinary"
                checked={gender === "nonBinary"}
                onChange={() => setGender("nonBinary")}
              />
              <label className="form-check-label" htmlFor="nonBinary">
                Non-Binary
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender("male")}
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="other"
                value="other"
                checked={gender === "other"}
                onChange={() => setGender("other")}
              />
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="contact-number">
              Contact Number (include country code):
            </label>
            <input
              type="tel"
              className="form-control"
              id="contact-number"
              value={contactNumber}
              onChange={(event) => setContactNumber(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              className="form-control"
              id="country"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="education">Highest academic qualification:</label>
            <ul className="qualifications d-flex">
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="education"
                  id="college"
                  value="college"
                  checked={education === "college"}
                  onChange={() => setEducation("college")}
                />
                <label className="form-check-label" htmlFor="college">
                  College
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="education"
                  id="university"
                  value="university"
                  checked={education === "university"}
                  onChange={() => setEducation("university")}
                />
                <label className="form-check-label" htmlFor="university">
                  University
                </label>
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="college-university">
              Name of College/University/High School:
            </label>
            <input
              type="text"
              className="form-control"
              id="college-university"
              value={collegeUniversity}
              onChange={(event) => setCollegeUniversity(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="current-year">
              Current Year (e.g., First Year, Second Year):
            </label>
            <input
              type="text"
              className="form-control"
              id="current-year"
              value={currentYear}
              onChange={(event) => setCurrentYear(event.target.value)}
              required
            />
          </div>
          <div className="form-group d-block">
            <label htmlFor="preferredInternship">Preferred Internship:</label>
            <ul className="internship d-flex w-100 flex-wrap">
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dataAnalytics"
                  id="dataAnalytics"
                  checked={preferredInternship === "dataAnalytics"}
                  onChange={() => setPreferredInternship("dataAnalytics")}
                />
                <label className="form-check-label" htmlFor="dataAnalytics">
                  Data Analytics
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="uiUxDesign"
                  id="uiUxDesign"
                  checked={preferredInternship === "uiUxDesign"}
                  onChange={() => setPreferredInternship("uiUxDesign")}
                />
                <label className="form-check-label" htmlFor="uiUxDesign">
                  UI/UX Design
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="productManagement"
                  id="productManagement"
                  checked={preferredInternship === "productManagement"}
                  onChange={() => setPreferredInternship("productManagement")}
                />
                <label className="form-check-label" htmlFor="productManagement">
                  Product Management
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="frontendDevelopment"
                  id="frontendDevelopment"
                  checked={preferredInternship === "frontendDevelopment"}
                  onChange={() => setPreferredInternship("frontendDevelopment")}
                />
                <label
                  className="form-check-label"
                  htmlFor="frontendDevelopment"
                >
                  Frontend Web Development
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="fullstackDevelopment"
                  id="fullstackDevelopment"
                  checked={preferredInternship === "fullstackDevelopment"}
                  onChange={() =>
                    setPreferredInternship("fullstackDevelopment")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="fullstackDevelopment"
                >
                  Fullstack Development
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="graphicDesign"
                  id="graphicDesign"
                  checked={preferredInternship === "graphicDesign"}
                  onChange={() => setPreferredInternship("graphicDesign")}
                />
                <label className="form-check-label" htmlFor="graphicDesign">
                  Graphic Designer
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="finance"
                  id="finance"
                  checked={preferredInternship === "finance"}
                  onChange={() => setPreferredInternship("finance")}
                />
                <label className="form-check-label" htmlFor="finance">
                  Finance
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="humanResource"
                  id="humanResource"
                  checked={preferredInternship === "humanResource"}
                  onChange={() => setPreferredInternship("humanResource")}
                />
                <label className="form-check-label" htmlFor="humanResource">
                  Human Resource
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="mobileDevelopment"
                  id="mobileDevelopment"
                  checked={preferredInternship === "mobileDevelopment"}
                  onChange={() => setPreferredInternship("mobileDevelopment")}
                />
                <label className="form-check-label" htmlFor="mobileDevelopment">
                  Mobile Development
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="backendDevelopment"
                  id="backendDevelopment"
                  checked={preferredInternship === "backendDevelopment"}
                  onChange={() => setPreferredInternship("backendDevelopment")}
                />
                <label
                  className="form-check-label"
                  htmlFor="backendDevelopment"
                >
                  Backend Web Development
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="socialMediaManagement"
                  id="socialMediaManagement"
                  checked={preferredInternship === "socialMediaManagement"}
                  onChange={() =>
                    setPreferredInternship("socialMediaManagement")
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor="socialMediaManagement"
                >
                  Social Media Manager
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="technicalWriter"
                  id="technicalWriter"
                  checked={preferredInternship === "technicalWriter"}
                  onChange={() => setPreferredInternship("technicalWriter")}
                />
                <label className="form-check-label" htmlFor="technicalWriter">
                  Technical Writer
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="databaseManagement"
                  id="databaseManagement"
                  checked={preferredInternship === "databaseManagement"}
                  onChange={() => setPreferredInternship("databaseManagement")}
                />
                <label
                  className="form-check-label"
                  htmlFor="databaseManagement"
                >
                  Database Management
                </label>
              </li>
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cyberSecurity"
                  id="cyberSecurity"
                  checked={preferredInternship === "cyberSecurity"}
                  onChange={() => setPreferredInternship("cyberSecurity")}
                />
                <label className="form-check-label" htmlFor="cyberSecurity">
                  Cyber Security
                </label>
              </li>
            </ul>
          </div>

          <div className="form-group">
            <label htmlFor="skill-level">
              What is your skill level in this field?:
            </label>
            <ul className="skills">
              <li className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skill-level"
                  id="beginner"
                  value="beginner"
                  checked={skillLevel === "beginner"}
                  onChange={() => setSkillLevel("beginner")}
                />
                <label className="form-check-label" htmlFor="beginner">
                  Beginner
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skill-level"
                  id="intermediate"
                  value="intermediate"
                  checked={skillLevel === "intermediate"}
                  onChange={() => setSkillLevel("intermediate")}
                />
                <label className="form-check-label" htmlFor="intermediate">
                  Intermediate
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="skill-level"
                  id="expert"
                  value="expert"
                  checked={skillLevel === "expert"}
                  onChange={() => setSkillLevel("expert")}
                />
                <label className="form-check-label" htmlFor="expert">
                  Expert
                </label>
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="hear-about">How did you hear about us?:</label>
            <ul className="sources d-flex">
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hear-about"
                  id="linkedin"
                  value="linkedin"
                  checked={hearAbout === "linkedin"}
                  onChange={() => setHearAbout("linkedin")}
                />
                <label className="form-check-label" htmlFor="linkedin">
                  LinkedIn
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hear-about"
                  id="instagram"
                  value="instagram"
                  checked={hearAbout === "instagram"}
                  onChange={() => setHearAbout("instagram")}
                />
                <label className="form-check-label" htmlFor="instagram">
                  Instagram
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hear-about"
                  id="twitter"
                  value="twitter"
                  checked={hearAbout === "twitter"}
                  onChange={() => setHearAbout("twitter")}
                />
                <label className="form-check-label" htmlFor="twitter">
                  Twitter
                </label>
              </li>
              <li className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="hear-about"
                  id="otherSource"
                  value="otherSource"
                  checked={hearAbout === "otherSource"}
                  onChange={() => setHearAbout("otherSource")}
                />
                <label className="form-check-label" htmlFor="otherSource">
                  Other
                </label>
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="any-inquiry">Do you have any inquiry?:</label>
            <input
              type="text"
              className="form-control"
              id="any-inquiry"
              value={anyInquiry}
              onChange={(event) => setAnyInquiry(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="transaction-code">
              Transaction Code for your application fee:
            </label>
            <input
              type="text"
              className="form-control"
              id="transaction-code"
              value={transactionCode}
              onChange={(event) => setTransactionCode(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="payment-name">
              Full Name of your Payment method:
            </label>
            <input
              type="text"
              className="form-control"
              id="payment-name"
              value={paymentName}
              onChange={(event) => setPaymentName(event.target.value)}
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={terms}
              onChange={(event) => setTerms(event.target.checked)}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I have read and agreed to the <a href="#">terms and conditions</a>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
