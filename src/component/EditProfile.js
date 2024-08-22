
import { useState, useRef } from "react";

export function EditProfile() {
  let alternateImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s";
  let file = useRef();
  const [imageProfile, setImageProfile] = useState(alternateImage);

  const changePhoto =async (e) => {
    e.preventDefault();
    
    const selectedFile = await file.current.files[0];
    const data = new FormData();
    data.append("file",selectedFile)
    data.append("upload_preset","Anonsphere")
    data.append("cloud_name","dxe2wgdde")
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageProfile(reader.result);
        console.log(reader.result); // To verify the data URL
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-5">
        <div
          className="card"
          style={{
            width: "350px",
            height: "454px",
            borderRadius: "50px",
            boxShadow: "20px 20px 60px black",
          }}
        >
          <img
            src={imageProfile}
            alt="Profile"
            className="dp d-flex ml-5 mt-5"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "125px",
              boxShadow: "2px 2px 1px 1px black",
            }}
          />
          <br />
          <input type="file" ref={file} className="ml-5" accept="image/*" />
          <br />
          <button
            className="bg-primary"
            style={{ width: "150px", marginLeft: "5rem" }}
            onClick={changePhoto}
          >
            Change
          </button>
        </div>
      </div>
    </>
  );
}
//first code
// import { useState,useRef } from "react"
// export function EditProfile(){
//     let alternatImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s";
//     let file = useRef();
//     let [imageProfile,setImageProfile]=useState(alternatImage)
//     const changePhoto =(e)=>{
//         imageProfile = file.current.value
//        setImageProfile(imageProfile)
//        console.log(imageProfile);
//     }

   
//     return(<>
//     <div className="container d-flex justify-content-center mt-5">
//       <div class="card" style={{width:"350px",height:"454px",borderRadius:"50px",boxShadow:"20px 20px 60px black"}}>
//         <img src={imageProfile} class="dp d-flex ml-5  mt-5" style={{width:"200px",height:"200px",borderRadius:"125px",boxShadow:"2px 2px 1px 1px black"}}></img>
//         <br></br>
//         <input type="file" useRef={file} className="ml-5"/>
//         <br></br>
//         <button className="bg-primary"style={{width:"150px",marginLeft:"5rem"}} onClick={changePhoto}>Change</button>
//       </div>
      
//       </div>
//     </>)
// }



// ---------------------------------------------------------------
     // let name = "Vikas_Shriwas";
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