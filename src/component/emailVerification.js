import react from "react";
import Swal from "sweetalert2";

export function SendOtp(){
 
    setTimeout(()=>{
         Swal.fire({
            title:"success",
            text:"OTP has been sent",
            icon:"success"
            
         })
    },10000)
   
    return(<>

    <div  class="upper-container  container">
    <h2 className="text-info text-center"> O T P</h2>
         <div  id="otp" className=" d-flex m-3">
        
             <input className="OTP"/>
             <input className="OTP"/>
             <input className="OTP"/>
             <input className="OTP"/>
          
         
         </div>
         <button className="" id="otpbtn">verifyemail</button>
    </div>
   
    </>)
}