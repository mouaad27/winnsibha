import '../contact11.css'
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const ContactUs = () => {
    return ( 


        <div className="contact-box">
            <div className="contact-info">
           <span className="coninfo"><BsTelephone className='callicon'/>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CALL TO US</span>
           <a className='a11'>ddddddddddddddddddddd
            
           </a> 

           <br></br>
           <br></br>
           <br></br>
           <br></br>
           
           <hr></hr>
           <span className="coninfo"><AiOutlineMail  className='callicon'/>     nbsp&;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CALL TO US</span>
           <a className='a11'>ddddddddddddddddddddd
            
           </a> 

           <br></br>
           <br></br>
           <br></br>
           <br></br>

                


            </div>
            
            <div className="contact-form">
               <div> <input type="text"className="forminput"></input>
                <input type="text" className="forminput"></input>
                <input type="text" className="forminput"></input></div>
                <div> 
                <input type="text" className="forminputcom"></input>
                </div>

            </div>







        </div>






     );
}
 
export default ContactUs;