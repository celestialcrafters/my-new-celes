import "../Components/Donate/Donate.css";
import { useState } from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { RiRedPacketLine } from "react-icons/ri";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [donationAmount, setDonationAmount] = useState();
  const [customAmount, setCustomAmount] = useState("");
  const handleDonationTypeChange = (e) => {
    setDonationType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setDonationAmount(parseInt(e.target.value));
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };
  const handleDonationAmountChange = (amount) => {
    setDonationAmount(amount);
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ContactInfo = [
    {
      icon: <FaPhone />,
      info: "+254-114395617",
      page: "tel:+254-114395617",
    },
    {
      icon: <FaWhatsapp />,
      info: "+254-727493854  ",
      page: "https://wa.me/254727493854",
    },
    {
      icon: <RiRedPacketLine />,
      info: "ceo@celestialcrafters.co.ke ",
      page: "mailto:ceo@celestialcrafters.co.ke",
    },
  ];

  return (
    <div>
      <section className=" bg text-white flex flex-col gap-10 !rounded-none backdrop-filter min-h-[100vh] backdrop-blur-2xl !py-10  !w-[90%] mx-auto px-3 sm:px-10 my-14 ">
        <article className="grid lg:grid-cols-2 gap-24 justify-between">
          <div className="flex flex-col gap-6">
            <h1 className="font-600 text-5xl">Welcome to Celestial Crafters</h1>
            <div className="bg-[#000033] p-5 ">
              <h2 className="text-[#0337CB] font-600 text-2xl pb-2">
                Our Impact{" "}
              </h2>
              <p>
                Your donation to Celestial Crafters isn't just financial
                support; it's an investment in empowering women in tech and
                young girls to discover the tech industry. It's a tangible step
                towards breaking down barriers and creating a more inclusive and
                equitable future where every woman can thrive.
              </p>
            </div>
            <div className="bg-[#000033] p-5 ">
              <h2 className="text-[#0337CB] font-600 text-2xl pb-2">
                Our mission{" "}
              </h2>
              <p>
                At Celestial Crafters, we're committed to driving innovation and
                fostering diversity in the tech industry. Our mission is to
                empower women to become leaders in technology and break the
                gender barriers that have long existed in the field.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/donate/child.png"
              alt="child"
              className="h-full object-cover w-full"
            />
          </div>
        </article>
        <article className="bg-[#000033] p-5 sm:p-10 ">
          <div className="flex flex-col gap-4">
            <p className="pb-3">
              As a Social Impact Company, with 99% of our team originating from
              Third World Countries, we are dedicated to addressing the
              significant under-representation of women in the tech sector. Our
              mission is to narrow this gender gap by gradually introducing
              young girls to the technology field from an early age,
              particularly here in Kenya.
            </p>
            <h3 className="text-[#0337CB] font-600 text-2xl pb-2">
              The donations will directly support:
            </h3>
            <ol className="flex flex-col gap-10 list-disc ">
              <li>
                Introducing young girls to the technology industry: We plan to
                visit various primary and secondary schools across Kenya to
                inspire young girls and women about the tech industry. During
                these mentorship tours, we will distribute sanitary towels,
                stationery, refreshments, and Celestial Crafters printed
                T-shirts. Our goal is to create a lasting impact by driving
                positive change and narrowing the gender gap in tech, paving the
                way for future generations of female leaders.
              </li>
              <li>
                Continuous growth and building of our women at Celestial
                Crafters: We aim to elevate the women at Celestial Crafters by
                up-skilling them, keeping them up to date with the technology
                trends, enrolling them to training and mentorship programs and
                providing stipends as a token of appreciation for the good work
                that they do at Celestial Crafters.
              </li>
              <li>
                Mentoring young women studying tech-related courses: We aim to
                support young women currently pursuing tech education by
                offering mentorship and creating a sense of community. This
                initiative will provide hope and foster a sense of belonging as
                we navigate the challenges together. We will also offer sanitary
                towels, refreshments, Celestial Crafters printed T-shirts,
                stationery, and valuable networking opportunities with our women
                team at Celestial Crafters and other partners and collaborators.
              </li>
              <li>
                The dedicated women at Celestial Crafters, work voluntarily to
                drive the change. Your contributions will enable us to provide
                essential resources and opportunities for women to excel in
                tech. Support our movement to eliminate gender stereotypes in
                the technology sector. DONATE TODAY!
              </li>
            </ol>
          </div>
        </article>
      </section>
      {/* <article className="text-white"> */}
      {/* <div className="border-b border-[#544E4E]">
          // <div className="  px-4 sm:!px-10 md:!px-20 py-4"> */}
      {/* <h3 className="text-xl font-500 pb-12 ">
              Transform a life for as little as $25 monthly
            </h3> */}
      {/* <p className="pb-4">Choose your donation amount</p> */}
      {/* </div>
        </div> */}
      {/* <div className="border-b border-[#544E4E]">
          <div className=" px-4 sm:!px-10 md:!px-20 py-16">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 lg:gap-10 ">
              {[1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50, 25].map(
                (amount) => (
                  <div key={amount} className="flex gap-2 ">
                    <input
                      type="checkbox"
                      value={amount}
                      className="mr-2]"
                      checked={donationAmount === amount}
                      onChange={() => handleDonationAmountChange(amount)}
                    />
                    <label>${amount}</label>
                  </div>
                )
              )}
            </div>
          </div>
        </div> */}
      {/* end */}
      {/* <div className="border-b border-[#544E4E]">
          <div className="px-4 sm:!px-10 md:!px-20 py-10 flex flex-col sm:flex-row gap-3 justify-center sm:justify-between items-center">
            <div> */}
      {/* <div className="flex gap-3 items-center  flex-col sm:flex-row pb-10">
                <label>Amount Of Choice </label>
                <input
                  type="number"
                  className="bg-white py-3 w-full border-[2px] text-gray-500 px-2  outline-none"
                />
              </div> */}
      {/* <div>
                <input
                  type="checkbox"
                  value={true}
                  className="mr-2"
                  checked={false}
                />
                <label>
                  Dedicate my donation in honor or in memory of someone
                </label>
              </div> */}
      {/* </div> */}
      {/* <div className="flex flex-center">
              <img src="/donate/hands.png" alt="hands" />
            </div> */}
      {/* </div> */}
      {/* <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center md:justify-between gap-6 lg:gap-16 mt-3">
              {[
                "donate monthly",
                "donate once",
                "auto renew",
                "more ways to give",
              ].map((item) => {
                return (
                  <button className="text-white uppercase w-[250px] lg:w-[200px] text-md py-3 px-2  bg-blue-700 rounded-md flex justify-center items-center ">
                    {item}
                  </button>
                );
              })}
            </div> */}
      {/* </div> */}
      {/* </article> */}
      <article className="text-white  p-5 sm:p-10 ">
        <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center lg:items-start">
          <div className="px-4 sm:!px-10 md:!px-20 py-4">
            <div className="flex justify-center">
              <button
                className="text-white text-sm uppercase font-semibold py-4 px-10 bg-blue-700 rounded-sm flex items-center justify-center gap-1"
                onClick={openModal}
              >
                <img src="/donate/heart.png" alt="heart" className="w-7" />
                <p>Donate</p>
              </button>

              {modalOpen && (
                <div className="fixed inset-0 bg-blue-950 bg-opacity-1 flex items-center justify-center">
                  <div className="payment">
                    <p
                      className=""
                      style={{ fontWeight: "bold", fontSize: "32px" }}
                    >
                      Payment Options:
                    </p>
                    <ol>
                      <li className="mb-8">
                        <div style={{ color: "green", fontSize: "24px" }}>
                          <strong>Mpesa</strong>
                        </div>
                        <br />
                        Pay bill Number - <strong>400200 </strong>
                        <br />
                        Account Number - <strong>628497</strong> <br />
                        Business Name -{" "}
                        <span
                          style={{
                            marginTop: "8px",
                            color: "#0D6EFD",
                            fontSize: "18px",
                          }}
                        >
                          Celestial Crafters
                        </span>
                      </li>
                      <li>
                        <div style={{ color: "green", fontSize: "24px" }}>
                          <strong>Bank</strong>
                        </div>
                        <br />
                        <strong>Cooperative Bank </strong>
                        <br />
                        Name -{" "}
                        <span style={{ color: "#0D6EFD" }}>
                          CELESTIAL CRAFTERS{" "}
                        </span>
                        <br />
                        Account Number - <strong>01100707184001</strong>
                      </li>
                    </ol>
                    <br />

                    <button
                      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-5 mt-4">
            <div className="border rounded-lg bg-blue-950 text-white border-gray-200 w-full lg:w-auto ">
              <button
                onClick={() => toggleAccordion(0)}
                className="w-full text-left px-5 py-2 flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold">For more ways to give </span>
                <span>
                  {openIndex === 0 ? (
                    <FaChevronUp className="h-6 w-6" />
                  ) : (
                    <FaChevronDown className="h-6 w-6" />
                  )}
                </span>
              </button>
              {openIndex === 0 && (
                <div className="px-4 py-2">
                  <ol className="flex flex-col gap-2 list-decimal pl-5">
                    <li>Donate Sanitary Towels</li>
                    <li>Donate Stationary</li>
                    <li>Donate Laptops</li>
                    <li>Donate refreshments</li>
                    <li> Donate Celestial Crafters printed T-shirts</li>
                    <li>Donate Softwares</li>
                    <li>
                      Donate Transportation for movement in schools around Kenya
                    </li>
                    <li>Donate Fuel</li>
                    <li>Volunteer for Mentorship</li>
                  </ol>

                  <h3 className="text-lg mt-2">
                    For this type of donations or partnership towards the goal
                    of women empowerment contact:{" "}
                  </h3>
                  <div className="mt-3 ">
                    <div className="flex flex-col gap-1 pb-20">
                      {ContactInfo.map((item, index) => {
                        return (
                          <a
                            href={item.page}
                            className="flex gap-4 overflow-x-auto no-scrollbar"
                            target="_blank"
                            rel="noreferrer"
                            key={index + item.info}
                          >
                            <div className="text-blue-700 text-2xl">
                              {item.icon}
                            </div>
                            <span className="text-white group-hover:text-accent duration-500">
                              {item.info}
                            </span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <img
          src="/serviceIcon/Line 3.png"
          alt="line"
          className="h-[4px] w-full  md:w-[50%] mx-auto"
        />
      </article>
    </div>
  );
};

export default Donate;
