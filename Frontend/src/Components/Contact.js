import React  from 'react'
import main from "../Assets/main.png"
import Tele from "../Assets/Tele.png"
import Email from "../Assets/Email.png"
import Loaction from "../Assets/Loaction.png"
import "../Contactstyle.css"
import Nav from './Nav'


function Contact(){

  

   return(
       <>
   <div className="container" >
   <Nav />
     <img src={main} alt="" />
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
       <img className="Ellipse" src="images//Ellipse 29.png" alt=""/>
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
           <img src={Loaction} alt="location" />
           <section className="seperate">
             <p className="location">Kenya</p>
             <p>Address: 123 MAi Street, Cityville State, Zip Code</p>
           </section>
         </div>
       </div>
       <img className="Ellipse-2" src="images//Ellipse 29.png" alt=""/>
     </div>
     <form >
            <h3>Reach out to Us!</h3>
            <section className="firstpart">
                <div>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name"  />
                </div>
                <div>
                    <label htmlFor="email">Email address</label>
                    <input type="text" id="email" name="email"  />
                </div>
            </section>

            <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject"  />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Write your message here" id="message" name="message" ></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
   </main>
       </>
   )
}
export default Contact