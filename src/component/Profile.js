import { useNavigate, } from "react-router-dom"
// import { useState } from "react";
import vikas from  "./IMG_6905.JPG"
export function Profile(){
    let follower = 0;
    let following = 0;
    // sessionStorage.setItem('response.data',JSON.stringify(response.data))
    const  userData =JSON.parse( sessionStorage.getItem('response.data'))
//  console.log(userData.user.username)
const name = userData.user.username;
const bio = userData.user.bio;
 console.log(userData.user.bio);

    let navigate = useNavigate();
    // let name = "Vikas_Shriwas";
    let alternatImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s";
    // const {profile,setProfile} = useState();
//     const profileChange =()=>{
//  const data = new FormData()
//  data.append("file",profile)
//  data.append("upload_preset","Anonsphere")
//  data.append("cloud_name","dxe2wgdde")
// await fetch("https://api.cloudinary.com/v1_1/dxe2wgdde/image/upload",{
//   method:"post",
//   body:data
// }).then((res)=>
//   res.json()
// ).then((data)=>{
//   let s=""+data.url
// })

// }
// 
//     }
    return(
        <>
       <div class="home-container d-flex " style={{boxShadow:"5px 2px 2px black"}}>
        <div class="second-home-container" style={{boxShadow:"5px 2px 2px black"}}>
          <nav className="text-white mt-5 text-center">
            <ul id="list-2">
           <li onClick={()=>{navigate("/Home")}}><p class="para">Home</p></li>
           <li onClick={()=>{navigate("/Messages")}}><p class="para">Messages</p></li>
           <li onClick={()=>{navigate("/Notification")}}><p class="para">Notification</p></li>
           <li onClick={()=>{navigate("/profile")}}><p class="para">Profile</p></li>
           <li onClick={()=>{navigate("/Setting")}}><p class="para">Setting</p></li>
           
            
            </ul>

          </nav>
        </div>
        <div class="profile text-dark d-flex container text-center">
               <div class="Profile-picture text-center mt-5" >
                   <img class="border border-5 bg-info " style={{width:"150px",height:"150px",borderRadius:"75px", boxShadow:"2px 3px 4px black"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s" alt=""></img>
                   {/* <p>{name}</p>
                   <p>Bio</p> */}
                   <div className="text-dark fs-2 fw-bold" >
                     {name}
                      <p className="fs-2  fw-bold">Bio : {bio}</p>
                      {/* <input type="file" className="border border-2 border-primary bg-primary text-white" onChange={(e)=>setProfile(e)}/> */}
                      {/* <br></br> */}
                      <button className="bg-primary" onClick={()=>{navigate('/profile/editProfile')}}>Change Profile</button>
                   </div>
                   <br></br>
                   <div >
                   <p className="border border-primary text-white bg-primary "> Follower {follower}</p>
                   <br></br>
                   <p className="border border-primary text-white bg-primary ">Folowing {following} </p>
                   </div> 
               </div>
               <div class="container border border-5 border-white ">
                       
               </div>
               <div className="border  border-dark ">
                

               </div>
               
        </div>
        
      </div>

       
        </>
    )
}