import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export function Profile() {
    const navigate = useNavigate();
    
    // State variables
    const [name, setName] = useState("unknown");
    const [bio, setBio] = useState("content");
    const [follower, setFollower] = useState(0);
    const [following, setFollowing] = useState(0);
    const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s");
    
    // Get user data from sessionStorage
    const storedData = sessionStorage.getItem('userData');
    const userData = JSON.parse(storedData);
    console.log(userData.user.username)
   
    const profileid = userData?.user?.id;
    console.log(profileid)

    useEffect(() => {
        if (profileid) {
            // Fetch profile data using the id
            (async function() {
                try {
                    const response = await axios.post("http://localhost:3100/user/accessProfile", {profileid:profileid });
                    const profileData = response.data;
                    console.log(profileData);
                    setFollower(profileData.follower || 0);
                    setFollowing(profileData.following || 0);
                    setImage(profileData.result.profileURL ||image);
                    setName(userData.user.username || "unknown");
                    setBio( userData.user.bio|| "No bio available");
                } catch (error) {
                    console.error("Error fetching profile data:", error);
                }
            })();
        }
    }, [profileid]);

    // if (!storedData) {
    //     console.log("Data loading...");
    //     return <div>Loading...</div>;  // Optionally, add a loading state
    // }

    return (
        <>
            <div className="home-container d-flex" style={{ boxShadow: "5px 2px 2px black" }}>
                <div className="second-home-container" style={{ boxShadow: "5px 2px 2px black" }}>
                    <nav className="text-white mt-5 text-center">
                        <ul id="list-2">
                            <li onClick={() => navigate("/Home")} style={{cursor:"default"}}><p className="para">Home</p></li>
                            <li onClick={() => navigate("/Messages")}style={{cursor:"default"}}><p className="para">Messages</p></li>
                            <li onClick={() => navigate("/Notification")} style={{cursor:"default"}}><p className="para">Notification</p></li>
                            <li onClick={() => navigate("/profile")} style={{cursor:"default"}} ><p className="para">Profile</p></li>
                            <li onClick={() => navigate("/Setting")} style={{cursor:"default"}}><p className="para">Setting</p></li>
                        </ul>
                    </nav>
                </div>
                <div className="profile text-dark d-flex container text-center">
                    <div className="Profile-picture text-center mt-5">
                        <img className="border border-5 bg-info"
                            style={{ width: "150px", height: "150px", borderRadius: "75px", boxShadow: "2px 3px 4px black" }}
                            src={image}
                            alt={name}
                        />
                        <div className="text-dark fs-2 fw-bold">
                            {name}
                            <p className="fs-2 fw-bold" style={{color:"black"}}>Bio: {bio}</p>
                            <button className="bg-primary" onClick={() => navigate('/profile/editProfile')}>Change Profile</button>
                        </div>
                        <br />
                        <div>
                            <p className="text-white bg-primary p-2">Follower {follower}</p>
                            <br />
                            <p className=" text-white bg-primary p-2">Following {following}</p>
                        </div>
                    </div>
                    <div className="container border border-5 border border-dark ">
                       <h1 className="text-center text-secondary mt-5">No post Yet !</h1> 
                    </div>
                  
                </div>
    
            </div>
        </>
    );
}





// import { useNavigate, } from "react-router-dom"
// import axios from "axios";
// import { useEffect, useState } from "react";
// // import vikas from  "./IMG_6905.JPG"
// export function Profile(){
//     let follower = 0;
//     let following = 0;
  
//    let name = "unknonwn";
//    let bio = "content";
//    let alternatImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s";
//    let [image,setImage] = useState(alternatImage)
   
//     let navigate = useNavigate();
//     const storedData = sessionStorage.getItem('userData');
//     const userData = JSON.parse(storedData);
//     const id = userData.user.id
//     let data = "halta bhalta"
    
//     // Parsing the JSON string back into an object
//     name = userData.user.username;
//     bio = userData.user.bio;
//     (async function(){
//       const response = await axios.post("https://localhost:3100/user/accessProfile",{id})
//       console.log(response)
//     })()
//     if(!data){
//      console.log("data loading")
//     }
       
  

//       return(
//         <>
//        <div class="home-container d-flex " style={{boxShadow:"5px 2px 2px black"}}>
//         <div class="second-home-container" style={{boxShadow:"5px 2px 2px black"}}>
//           <nav className="text-white mt-5 text-center">
//             <ul id="list-2">
//            <li onClick={()=>{navigate("/Home")}}><p class="para">Home</p></li>
//            <li onClick={()=>{navigate("/Messages")}}><p class="para">Messages</p></li>
//            <li onClick={()=>{navigate("/Notification")}}><p class="para">Notification</p></li>
//            <li onClick={()=>{navigate("/profile")}}><p class="para">Profile</p></li>
//            <li onClick={()=>{navigate("/Setting")}}><p class="para">Setting</p></li>
           
            
//             </ul>

//           </nav>
//         </div>
//         <div class="profile text-dark d-flex container text-center">
//                <div class="Profile-picture text-center mt-5" >
//                    <img class="border border-5 bg-info " style={{width:"150px",height:"150px",borderRadius:"75px", boxShadow:"2px 3px 4px black"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s" alt=""></img>
//                    {/* <p>{name}</p>
//                    <p>Bio</p> */}
//                    <div className="text-dark fs-2 fw-bold" >
//                      {name}
//                       <p className="fs-2  fw-bold">Bio : {bio}</p>

//                       <button className="bg-primary" onClick={()=>{navigate('/profile/editProfile')}}>Change Profile</button>
//                    </div>
//                    <br></br>
//                    <div >
//                    <p className="border border-primary text-white bg-primary "> Follower {follower}</p>
//                    <br></br>
//                    <p className="border border-primary text-white bg-primary ">Folowing {following} </p>
//                    </div> 
//                </div>
//                <div class="container border border-5 border-white ">
                       
//                </div>
//                <div className="border  border-dark ">
                

//                </div>
               
//         </div>
        
//       </div>

       
//         </>
//     )
//   }
  // useEffect(()=>{
  //   (async function(){
  //     const response  = await axios.Post("http://localhost:3100/user/accessProfile",{
  //       id
  //     })
  // })()
  // },[id]);