const SDGS = () => {
    const celestialCraftersData = [
        {
          id: "celestial_crafters_1",
          content: "By providing women with access to professional growth opportunities and economic empowerment within the tech industry, Celestial Crafters contributes to poverty alleviation and promotes sustainable development.",
          imageUrl: "SDGs/E-WEB-Goal-01.png"
        },
        {
          id: "celestial_crafters_2",
          content: "Through comprehensive training programs, the company enhances the technical and leadership skills of women, thereby promoting quality education and facilitating their active participation in the tech industry.",
          imageUrl: "SDGs/E-WEB-Goal-04.png"
        },
        {
          id: "celestial_crafters_3",
          content: "Gender Equality: Celestial Crafters promotes equal opportunities for women within the tech industry through unbiased hiring, professional growth support, and mentorship programs, aiming to reduce gender-based discrimination and violence.",
          imageUrl: "SDGs/E-WEB-Goal-05.png"
        },
        {
          id: "celestial_crafters_4",
          content: "The company invests in comprehensive training programs to enhance technical and leadership skills of women, contributing to sustainable economic growth and providing decent work opportunities.",
          imageUrl: "SDGs/E-WEB-Goal-08.png"
        },
        {
          id: "celestial_crafters_5",
          content: "The company's initiatives foster technological advancement within the tech sector, promoting innovation and productivity while creating a more inclusive environment for women.",
          imageUrl: "SDGs/E-WEB-Goal-09.png"
        },
        {
          id: "celestial_crafters_6",
          content: "Celestial Crafters advocates for inclusive industry policies and transparent monitoring, addressing disparities and inequalities within the technology sector by breaking down barriers and ensuring transparent reporting on gender diversity metrics.",
          imageUrl: "SDGs/E-WEB-Goal-10.png"
        },
        {
          id: "celestial_crafters_7",
          content: "The company's commitment to creating a more just and equitable work environment for women in the tech sector contributes to the broader goal of promoting peace, justice, and strong institutions within society.",
          imageUrl: "SDGs/E-WEB-Goal-16.png"
        },
        {
          id: "celestial_crafters_8",
          content: "Celestial Crafters collaborates with various stakeholders to advance its initiatives, fostering collaborative partnerships aimed at achieving gender equality and promoting sustainable development within the tech sector.",
          imageUrl: "SDGs/E-WEB-Goal-17.png"
        }
      ];
      
  return (
    <section className='text-white px-4 sm:px-10'>
    <div>
        <h1 className='text-center pb-4 text-2xl font-[600]'>Celestial Crafters & SDGs</h1>
        <p className='text-center text-gray-200'>At Celestial Crafters (CC), our mission is to integrate the Sustainable Development Goals (SDGs) into our core objectives and initiatives.   Celestial Crafters' commitment to SDGs 1, 4, 5, 8, 9, 10, 16, and 17 aligns with our goals as we aim to make a meaningful impact in the technology sector. Through targeted strategies and collaborative efforts, we aim to empower women within the tech industry, create opportunities for economic growth, foster inclusive policies, and contribute to a more just and equitable society.</p>
    </div>
    <div className="grid sm:grid-cols-2 justify-between py-16  gap-y-8 !gap-x-10">
        {celestialCraftersData.map((item)=>{
            return(
                <div key={item.id}>
                <div className="pb-3">
                    <img src={item.imageUrl} alt="sdg" className="w-28"/>
                </div>
                <p>{item.content}</p>
                
            </div>)
        })}
    </div>

    </section>
  )
}

export default SDGS