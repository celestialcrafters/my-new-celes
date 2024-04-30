import "../Components/AboutPageComponents/About.css";
import { listData } from "../data/ListData";
import Team from "../Components/AboutPageComponents/Team/Team";
import Hero from "../Components/common/Hero";
import SDGS from "../Components/AboutPageComponents/SDGS";
import ContactForm from "../Components/common/Form/contactForm";

const mission = [
  {
    topic: "OUR VISION",
    text1:
      "To be the global beacon of innovation and excellence in Technology, empowering businesses to transcend their potential and shape a sustainable, prosperous future.",
    img: "../Assets/BigImages/vision.png",
  },
  {
    topic: "OUR MISSION",
    text1:
      " Our mission is to equip businesses with cutting-edge solutions, unparalleled expertise, and unwavering support, fostering growth and efficiency.",
    img: "../Assets/BigImages/mission.png",
  },
];

const about = [
  {
    topic: "Our Unique Culture.",
    text1:
      "At the heart of Celestial Crafters is a unique culture that celebrates diversity and inclusion. Every individual's voice matters, fostering an environment where creativity flourishes.",
    img: "/Assets/aboutus1.jpg",
  },
  {
    topic: "Empowering Women in Tech.",
    text1:
      "Celestial Crafters is not just a tech company; it's a movement. Our commitment to empowering women in tech goes beyond our projects; it's a part of our core values",
    img: "/Assets/aboutus2.jpg",
  },
  {
    topic: "Beyond the Code.",
    text1:
      "Success for us is measured beyond lines of code. We actively contribute to local economies, provide mentorship, and engage in philanthropy.",
    img: "/Assets/aboutus3.jpg",
  },
];
const lunchData1 = [
  {
    number: "2024",
    proof: "Celestial Crafters was launched",
  },

  {
    number: "50+",
    proof: "Trusted And Satisfied Clients",
  },
];
const launchData2 = [
  {
    number: "3.5",
    proof: "Years of experience",
  },

  {
    number: "1K +",
    proof: "Positive reviews",
  },
];
export default function About() {
  return (
    <section className="overflow-x-hidden 100vw">
      {/* top intro */}
      <Hero />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:!px-10 py-20">
        <h1 className="text-white text-4xl lg:text-5xl font-[600]">
          Our Dream is to <span className="topIntro">IGNITE</span>{" "}
          transformative change.
        </h1>
        <div className="text-white">
          <p className="pb-2">
            Our journey began with a passion for tech and we've evolved into a
            trusted platform for creativity.
          </p>
          <p>
            At Celestial Crafters, we pride ourselves in giving you our unique
            craft. Our team is committed to delivering excellence, ensuring you
            experience.
          </p>
        </div>
      </section>
      {/* about */}
      <section className="py-10 px-4 sm:!px-10 ">
        {about.map((item, index) => {
          return (
            <div
              key={index + "hi"}
              className={`${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } flex flex-col md:flex-row gap-8 text-white pb-20`}
            >
              <div className="flex-1">
                <img
                  src={item.img}
                  alt="women1"
                  className={`rounded-2xl object-cover w-full h-full md:h-[250px] md:w-[400px] lg:w-[600px]`}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-3xl pb-2 lg:pb-5">{item.topic}</h4>
                <p className="leading-7">{item.text1}</p>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <SDGS />
      </section>
      {/* why choose us */}
      <section className="px-4 sm:!px-10 py-10">
        <h3 className="text-5xl text-center text-white pb-20">
          WHY CHOOSE <span className="text-blue-700">US?</span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <img
            src="/Assets/BigImages/clearimage.png"
            alt="why choose us"
            className="hidden lg:flex"
          />
          <div className="flex flex-col">
            {listData.map((item, index) => (
              <div className="text-white pb-5" key={index + "choose"}>
                <h5 className="text-blue-700 pb-3 text-xl font-[600]">
                  {item.topic}
                </h5>
                <p className="text-lg">{item.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* mission */}
      <section className="flex flex-col md:flex-row py-10 px-5 items-center justify-center gap-10 ">
        {mission.map((item, index) => {
          return (
            <div
              key={index + "mission"}
              className="text-white h-[340px] border mission-vision flex flex-col items-center w-[300px] py-5 px-2 rounded-2xl"
            >
              <img
                src={item.img}
                alt="vision"
                className="mx-auto pb-4 w-[50px]"
              />
              <h4>{item.topic}</h4>
              <p className="text-center">{item.text1}</p>
            </div>
          );
        })}
      </section>
      {/* launch celestial crafters */}
      <section className="what-we-do px-4 sm:!px-10 py-10">
        <img
          src="/Assets/BigImages/aboutus-big.jpg"
          alt="what we do"
          className="w-full h-[300px] rounded-2xl mx-auto object-cover"
        />

        <div className="flex lg:flex-row items-center flex-col-reverse lg:!mx-10">
          <div className="done  flex flex-row justify-between gap-3 mx-4 sm:mx-6 md:mx-16 lg:!mx-0 text-white py-10 lg:!py-1">
            <div className="flex flex-col gap-2 justify-between">
              {lunchData1.map((item, index) => {
                return (
                  <div key={index + "lanunch"}>
                    <h5 className="done-items">{item.number}</h5>
                    <p className="text-lg font-medium">{item.proof}.</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 justify-between">
              {launchData2.map((item, index) => {
                return (
                  <div key={index + "data1"}>
                    <h5 className="done-items">{item.number}</h5>
                    <p className="text-lg font-medium">{item.proof}.</p>
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text text-white lg:!px-28 lg:!py-16 -mt-5 lg:-mt-28 mx-2 sm:mx-5 md:!mx-14 lg:!mx-0">
            We are dedicated to providing quality service that redefine industry
            standards.
          </p>
        </div>
      </section>
      {/* team section */}
      <section>
        <Team />
      </section>
      <ContactForm />
    </section>
  );
}
