import "../Styles/service.css";
import Hero from "../Components/common/Hero";
import StartProjectButton from "../Components/common/StartProjectButton";
const servicesData = [
  {
    id: 1,
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Our web development ensures seamless design and functionality across devices, prioritizing user experience. In mobile app development, we excel in creating high-performance, scalable solutions for both iOS and Android.",
    image: "../images/softwaredev.png",
  },
  {
    id: 2,
    title: "DATA ANALYTICS",
    description:
      "Unlocking Data Insights: Our expertise spans descriptive, diagnostic, and predictive analytics, transforming raw data into actionable insights. With cutting-edge tools and methodologies, our team empowers you to make informed decisions and seize new opportunities.",
    image: "./images/dataanalytics.png",
  },
  {
    id: 3,
    title: "PROJECT MANAGEMENT",
    description:
      "Our premier project management service excels in Agile, Scrum, and Waterfall methodologies, guaranteeing timely, budget-conscious, and high-quality project delivery. With a versatile approach, we expertly manage diverse projects across industries. Count on our experienced teams to guide your projects to success, surpassing strategic goals and expectations.",
    image: "../images/projectmanagemnet.png",
  },
  {
    id: 4,
    title: "CYBERSECURITY",
    description:
      "Our web development ensures seamless design and functionality across devices, prioritizing user experience. In mobile app development, we excel in creating high-performance, scalable solutions for both iOS and Android.",
    image: "../images/cybersecurity.png",
  },
  {
    id: 5,
    title: "UIUX DESIGN",
    description:
      "Our service revolves around crafting seamless and meaningful user experience. We deeply understand your users' behaviors, needs, and motivations through research, personas, and journey mapping. Our dedicated UI/UX designers blend creativity with usability principles to create visually stunning interfaces that elevate user satisfaction and engagement.",
    image: "../images/uiux.png",
  },
  {
    id: 6,
    title: "CONSULTATION & SUPPORT",
    description:
      "Empower your business with tailored consultation and support services. Our experienced team provides expert advice across various domains, guiding you through today's complexities and positioning you for future success. From strategy implementation to seamless transitions, we're here to ensure your journey is smooth and successful.",
    image: "../images/support.png",
  },
];

const service = () => {
  return (
    <section className=" ">
      <Hero />

      <div className="every px-4 sm:!px-10 ">
        <h1 className="py-10 text-white text-4xl font-[600]">
          WHAT WE <span className="de">DELIVER</span>
        </h1>
        {/* what we deliver */}
        <div className="flex flex-col gap-3 py-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 items-center w-fll py-10">
            <div className="acc flex flex-col px-3 items-center">
              <div>
                <img
                  src="/serviceIcon/accuracy.png"
                  alt="accuracy"
                  className="pho"
                />
                <h2 className="pb-3">ACCURACY</h2>
                <p>
                  We ensure precise and error-free solutions to meet our clients
                  requirements.
                </p>
              </div>
            </div>

            <div className="tim flex flex-col items-center ">
              <div>
                <img
                  src="/serviceIcon/timely.png"
                  alt="timeliness"
                  className="pho"
                />
                <h2>TIMELINESS</h2>
                <p>
                  We prioritize delivering our products/services on schedule
                  meeting deadlines consistently.
                </p>
              </div>
            </div>

            <div className="exc flex flex-col items-center">
              <div>
                <img
                  src="/serviceIcon/rename.png"
                  alt="excellence"
                  className="pho"
                />
                <h2>EXCELLENCE</h2>
                <p>
                  We strive for excellence in all aspects of our work, aiming to
                  exceed our clients expectations with every delivery.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/serviceIcon/Line 3.png"
            alt="line"
            className="h-[4px] w-full  md:w-[50%] mx-auto"
          />
        </div>

        {/* our services section */}
        <div className="our">
          <h1 className="py-10 text-white text-4xl font-[600]">
            OUR <span className="de">SERVICES</span>
          </h1>
          <article className="flex flex-col w-full">
            {servicesData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="py-4 p-3 rounded-lg custom-border "
                >
                  <div className="flex w-full gap-5 lg:!items-center">
                    <h2
                      className="!pt-4 !text-blue-700 hidden sm:flex
              !text-[50px]"
                    >
                      0{item.id}{" "}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:!justify-between w-full gap-2 items-center">
                      <h2 className="pt-3 text-xl font-[600] hidden lg:flex">
                        {item.title}
                      </h2>
                      <div>
                        <img
                          src={item.image}
                          alt="software"
                          className="lg:w-[90px] lg:h-full w-[60px] object-fill pb-4"
                        />
                        <h2 className="pt-3 lg:hidden text-lg pb-3">
                          {item.title}
                        </h2>
                        <p className="text-md">{item.description}</p>
                        <div className="mt-2 mb-5">
                          <StartProjectButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
};

export default service;
