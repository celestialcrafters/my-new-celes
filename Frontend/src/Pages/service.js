import "../Styles/service.css";
import Hero from "../Components/common/Hero";
import StartProjectButton from "../Components/common/StartProjectButton";
const servicesData = [
  {
    id: 1,
    title: "WEBSITE DEVELOPMENT",
    description:
      "We build static websites with fixed content, dynamic websites that update with new information, and e-commerce websites for online shopping. Development also involves writing the code, setting up databases, and integrating third-party tools like payment gateways. Quality assurance is done to ensure the website works correctly on different devices and browsers. After launching the site, developers provide ongoing maintenance, updates, and support to keep it running smoothly and securely. Other services include search engine optimization (SEO) to improve the site's visibility, content management system (CMS) integration for easy updates, and web hosting setup. In essence, website development services cover all aspects of bringing a website to life and ensuring it performs well.",
    image: `${process.env.PUBLIC_URL}/images/softwaredev.png`,
  },
  {
    id: 3,
    title: "MOBILE APP DEVELOPMENT",
    description:
      "Mobile App Development services covers both front-end and back-end development, including native app development for iOS and Android, as well as cross-platform solutions using frameworks like React Native and Flutter. App development services include integration with third-party APIs, ensuring seamless connectivity with other software and services. Rigorous quality assurance and testing are conducted to identify and fix bugs, ensuring a smooth user experience. Deployment services handle the submission and publication of the app on app stores, while post-launch support and maintenance involve regular updates, performance monitoring, and addressing user feedback.",
    image: `${process.env.PUBLIC_URL}/images/projectmanagemnet.png`,
  },
  {
    id: 5,
    title: "UI/UX DESIGN",
    description:
      "Our broad Services includes landing pages, which are designed to capture leads and promote specific products or services, and launch pages, which announce new product releases or events. UI/UX design encompasses the creation of dashboards for data visualization, user profiles for personalized experiences, and e-commerce product pages for online shopping. Other designs include login and registration forms, onboarding screens for new users, settings and preferences pages, and help and support interfaces. Designers also work on creating interactive prototypes, mobile app interfaces, and responsive web designs that adapt to different devices and screen sizes. We also do responsive Website Design and Mobile App Designs. Each of these designs plays a crucial role in ensuring a cohesive and user-friendly digital.",
    image: `${process.env.PUBLIC_URL}/images/uiux.png`,
  },
  {
    id: 6,
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Elevate your online presence with our comprehensive automated AI solutions. From model training, chatbots to customized solutions.",
    image: `${process.env.PUBLIC_URL}/images/digitalmarketing.png`,
  },
  {
    id: 7,
    title: "BLOCKCHAIN",
    description:
      "Harness the unique features of blockchain technology to solve problems and create opportunities. ",
    image: `${process.env.PUBLIC_URL}/images/socialmedia.png`,
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
                   src={`${process.env.PUBLIC_URL}/serviceIcon/accuracy.png`}
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
                  src={`${process.env.PUBLIC_URL}/serviceIcon/timely.png`}
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
                  src={`${process.env.PUBLIC_URL}/serviceIcon/rename.png`} 
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
           src={`${process.env.PUBLIC_URL}/serviceIcon/Line%203.png`}
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
