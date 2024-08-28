import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

// export function SignUp() {
//     const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     Name: "",
//     email: "",
//     password: "",
//     bio:"",
//     gender:""


//   });

//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     console.log(formData);
//   };

//   const handleSubmit = async (e) => { 
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3100/user/signUp",formData
       
//       );
//       console.log("Sign-up successful:", response.data);

     
//       // sessionStorage.setItem("authToken", response.data.token);
//       // console.log(response.data.token)

      
//       Swal.fire({
//         title: "Success!",
//         text: "You have signed up successfully.",
//         icon: "success",
//         confirmButtonText: "OK",
//       }).then(() => {
//         navigate("/")
//       });

//     } catch (error) {
//       console.error("Sign-up failed:", error);
      
     
//       Swal.fire({
//         title: "Error!",
//         text: error.response?.data?.message || "An error occurred",
//         icon: "error",
//         confirmButtonText: "OK",
//       });

//       setErrorMessage(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <>
//     <div className="d-flex">
    
     
//       <div className="container" style={{ marginTop: "30px",
        
//        }}>
        
//         {/* ''Brush Script MT', cursive */}
        
//         <div
        
//           className="container border p-3 border-round text-center mt-5" id="form-body"
//           style={{
//             width: "400px",
//             height: "600px",
//             borderRadius: "25px",
//             boxShadow: "4px 5px 15px 10px black",
           
//           }}
//         >
//           <h1 className="text-white text-center mt-2 fst-italic">
//           <span>Register</span>
//         </h1>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="Name" className="text-center text-info">
             
//             </label>
//             <input
//               type="text"
//               className="form-control text-center"
//               placeholder="User Name"
//               id="Name"
//               name="Name"
//               value={formData.Name}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="email" className="text-center text-info">
           
//             </label>
//             <input
//               type="email"
//               className="form-control text-center"
//               placeholder="user email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <label htmlFor="password" className="text-center text-info">
            
//             </label>
//             <input
//               type="password"
//               className="form-control text-center"
//               placeholder="Password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//              <label htmlFor="Name" className="text-center text-info">
           
//            </label>
//            <input
//              type="text"
//              className="form-control text-center"
//              placeholder="Add bio"
//              id="Bio"
//              name="bio"
//              value={formData.bio}
//              onChange={handleChange}
//              required
//            />
//             <label htmlFor="Name" className="text-center text-info">
           
//            </label>
//            <select
//              type="select"
//              className="form-control text-center"
//              defaultValue="Male"
//              id="gender"
//              name="gender"
//              value={formData.gender}
//              onChange={handleChange}
//              required
//            ><option value='Male'>Male</option><option value='Female'>Female</option></select>
//             <div className="container mt-5">
//               <button type="submit" id="btn">
//                 Submit
//               </button>
//             </div>
//             {errorMessage && <div className="text-danger">{errorMessage}</div>}
//           </form>
//           <div className="container mt-3">
//             <Link to="/" className="text-white">
//               <span>Already have an account?</span> <br />
//               Sign in?
//             </Link>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }
export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "", 
    email: "",
    password: "",
    bio: "",
    gender: "Male"
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3100/user/signUp", formData);
      console.log("Sign-up successful:", response.data);

        if(response&& response.data){
        sessionStorage.setItem("signupdata",JSON.stringify(response.data))
       const data = JSON.parse(sessionStorage.getItem("signupdata"))
       const userId=data.user.id;
       console.log(userId)
       const defaultURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s"

      const response2 = await axios.post("http://localhost:3100/user/InsertProfile",{
        profileURL:defaultURL,
        profileid:userId
      })
        }





        
      Swal.fire({
        title: "Success!",
        text: "You have signed up successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      console.error("Sign-up failed:", error);

      Swal.fire({
        title: "Error!",
        text: error.response?.data?.message || "An error occurred",
        icon: "error",
        confirmButtonText: "OK",
      });

      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="d-flex">
        <div
          className="container border p-3 border-round text-center mt-5 " 
          style={{
            width: "400px",
            height: "600px",
            borderRadius: "25px",
            boxShadow: "4px 5px 15px 10px black",
          }}
        >
          <h1 className="text-white text-center mt-2 fst-italic">
            <span>Register</span>
          </h1>
          <form onSubmit={handleSubmit} className="p-3 " >
            <input
              type="text"
              className="form-control text-center inpt"
              placeholder="Username"
              id="username"
              name="username" 
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              className="form-control text-center inpt"
              placeholder="Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="form-control text-center inpt"
              placeholder="Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              className="form-control text-center inpt"
              placeholder="Add Bio"
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              required
            />
            <select
              className="form-control text-center inpt"
              id="gender"
              name="gender"
              value={formData.gender} 
              onChange={handleChange}
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="container mt-3">
              <button type="submit" id="btn">
                Submit
              </button>
            </div>
            {errorMessage && <div className="text-danger">{errorMessage}</div>}
          </form>
          <div className="container">
            <Link to="/" className="text-white">
              <span>Already have an account?</span> <br />
              Sign in?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}