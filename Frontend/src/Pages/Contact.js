/*import { useState } from 'react';
 import { useNavigate } from 'react-router-dom';
 import MainBackground from '../Assets/images/main-image.png';
 import Tele from '../Assets/phone.png';
 import Email from '../Assets/images/Email.png'
 import Location from '../Assets/location.png';
 import '../PagesStyles/Contactstyle.css';
 import { Toast, toast, ToastContainer } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

 export const Contact = () => {
   const navigate = useNavigate()
   const [elments, setElements] = useState(
     {
       name: "",
       email: "",
       message: "",
     }
   );
  
   const OnSubmit = async (e) => {
     e.preventDefault()
     if (elments.name && elments.email && elments.message) {
       console.log("Feedback received successfully")
       toast.success("Feedback received successfully")
       navigate("/feedback")
     } else {
       toast.error("An Input field is Empty")
       console.log("Empty Input Field")
     }
   }
   const HandleChange = (e) => {
     setElements({
       ...elments,
       [e.target.name]: e.target.value,
     });
   }

   return (
     <>
       <ToastContainer />
       <div className="container">
         <img src={MainBackground} alt="" />
         <div>
           <h1 className="centerText">Contact Us</h1>
           <div className="centerDot">
             <span className="dot"></span>
             <span className="dot"></span>
             <span className="dot"></span>
           </div>
         </div>
       </div>
       <main>
         <div className="information">
           <img className="Ellipse" src="imagesEllipse 29.png" alt="" />
           <h3>Contact Information</h3>
           <p>
             Hours of operation: Monday - Friday, 9:00 AM - 5:00 PM <br />(local
             time)
           </p>
           <div className="contact-information">
             <div>
               <img src={Tele} alt="telephone" />
               <p className="tele">+254-7-27-493-854</p>
             </div>
             <div>
               <img src={Email} alt="mail" />
               <p className="mail">inquirecelestialcrafters@gmail.com</p>
             </div>
             <div>
               <img src={Location} alt="location" />
               <section className="separate">
                 <p className="location">Kenya</p>
                 <p>Address: 123 MAi Street, Cityville State, Zip Code</p>
               </section>
             </div>
           </div>
           <img className="Ellipse-2" src="imagesEllipse 29.png" alt="" />
         </div>
         <form id="form" action="" onSubmit={OnSubmit}>
           <h3>Reach out to Us!</h3>
           <div>
             <label htmlFor="name">Full name</label>
             <input
               type="text"
               name='name'
               value={elments.name}
               onChange={HandleChange} />
           </div>
           <div>
             <label htmlFor="name">Email address</label>
             <input
               type="text"
               name='email'
               value={elments.email}
               onChange={HandleChange} />
           </div>
           <div>
             <label htmlFor="name">Message</label>
             <textarea className='message'
               type="text"
               wrap="hard"
               name='message'
               value={elments.message}
               onChange={HandleChange} ></textarea>
           </div>
           <button type='submit'>Send Message</button>
         </form>
       </main>
     </>
   )
 }
export default Contact
*/


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainBackground from '../Assets/images/main-image.png';
import Tele from '../Assets/phone.png';
import Email from '../Assets/images/Email.png';
import Location from '../Assets/location.png';
import '../PagesStyles/Contactstyle.css';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const navigate = useNavigate();
  const [elements, setElements] = useState({
    name: "",
    email: "",
    message: "",
  });

  //To do: Add my exact email on contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/form/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(elements),
      });

      if (response.ok) {
        console.log("Feedback received successfully");
        toast.success("Feedback received successfully");
        navigate("/feedback");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "An error occurred");
        console.error("Error:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form");
    }
  };

  const handleChange = (e) => {
    setElements({
      ...elements,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <img src={MainBackground} alt="" />
        <div>
          <h1 className="centerText">Contact Us</h1>
          <div className="centerDot">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
      <main>
        <div className="information">
          <img className="Ellipse" src="images//Ellipse 29.png" alt="" />
          <h3>Contact Information</h3>
          <p>
            Hours of operation: Monday - Friday, 9:00 AM - 5:00 PM <br />(local
            time)
          </p>
          <div className="contact-information">
            <div>
              <img src={Tele} alt="telephone" />
              <p className="tele">+254-7-27-493-854</p>
            </div>
            <div>
              <img src={Email} alt="mail" />
              <p className="mail">inquirecelestialcrafters@gmail.com</p>
            </div>
            <div>
              <img src={Location} alt="location" />
              <section className="separate">
                <p className="location">Kenya</p>
                <p>Address: 123 MAi Street, Cityville State, Zip Code</p>
              </section>
            </div>
          </div>
          <img className="Ellipse-2" src="images//Ellipse 29.png" alt="" />
        </div>
        <form id="form" action="" onSubmit={handleSubmit}>
          <h3>Reach out to Us!</h3>
          <div>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              name='name'
              value={elements.name}
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              name='email'
              value={elements.email}
              onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea className='message'
              type="text"
              wrap="hard"
              name='message'
              value={elements.message}
              onChange={handleChange} ></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </main>
    </>
  )
}

export default Contact;
