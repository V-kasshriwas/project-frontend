import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios
  //       .post("http://localhost:3100/user/signIn", {
  //         email,
  //         password,
  //       })
  //       .then((response) => {
  //         sessionStorage.setItem("userData", JSON.stringify(response.data));
  //       })
  //       .then(async () => {
  //         const selectedFile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s"
  //         const data = new FormData();
  //         data.append("file", selectedFile);
  //         data.append("upload_preset", "Anonsphere");
  //         data.append("cloud_name", "dxe2wgdde");
  //         try {
  //           const cloudinaryResponse = await fetch(
  //             "https://api.cloudinary.com/v1_1/dxe2wgdde/image/upload",
  //             {
  //               method: "POST",
  //               body: data,
  //             }
  //           );

  //           const cloudinaryData = await cloudinaryResponse.json();
  //           const profileURL = cloudinaryData.url;

  //           console.log(profileURL);
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       })
  //       .then(async () => {
  //         const userData = JSON.parse(sessionStorage.getItem("userData"));
  //         const id = userData.user.id;
  //         const response2 = await axios.post("http://localhost:3100/user/", {
  //           id,
  //         });
  //       });

  //     const userId = userData.user.id;
  //     console.log(userData.user.username);
  //     console.log(userId);

  //     console.log("Sign-in successful:", response.data);

  //     if (response.data.message) {
  //       console.log(response.data.message);
  //     }

  //     // Display success alert
  //     Swal.fire({
  //       title: "Success!",
  //       text: "You have signed in successfully.",
  //       icon: "success",
  //       confirmButtonText: "OK",
  //     }).then(() => {
  //       window.location.href = "/dashboard";
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     console.error("Sign-in failed:", error);

  //     Swal.fire({
  //       title: "Error!",
  //       text: error.response?.data?.error || "An error occurred",
  //       icon: "error",
  //       confirmButtonText: "OK",
  //     });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
   
      const response = await axios.post("http://localhost:3100/user/signIn", {
        email,
        password,
      });
  
     
      sessionStorage.setItem("userData", JSON.stringify(response.data));
      
      
      // const selectedFile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM6uJNFja3fvFcmq976LVMKJ06-dGVPpqKug&s";
      // const data = new FormData();
      // data.append("file", selectedFile);
      // data.append("upload_preset", "Anonsphere");
      // data.append("cloud_name", "dxe2wgdde");
  
      // const cloudinaryResponse = await fetch(
        // const id = userData.user.id;
      //   "https://api.cloudinary.com/v1_1/dxe2wgdde/image/upload",
      //   {
        //     method: "POST",
        //     body: data,
      //   }
      // );
  
      // const cloudinaryData = await cloudinaryResponse.json();
      // const profileURL = cloudinaryData.url;
      // console.log("Uploaded image URL:", profileURL);
  
      
      // const userData = JSON.parse(sessionStorage.getItem("userData"));
      // console.log(id)
  
      // const response2 = await axios.post("http://localhost:3100/user/InsertProfile", {
      //   id,
      //   profileURL
    
      // });
  
      // console.log("Profile data retrieved successfully:", response2.data);
  
      
      
      // if (response.data.message) {
        //   console.log(response.data.message);
        // }
        
        Swal.fire({
        title: "Success!",
        text: "You have signed in successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.href = "/dashboard";
      });
      console.log("Sign-in successful:", response.data);
      
    } catch (error) {
      console.error("Sign-in failed:", error);
  
      Swal.fire({
        title: "Error!",
        text: error.response?.data?.error || "An error occurred",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <h1 className="text-white text-center mt-2 fst-italic">
          <span>A</span>nonsphere
        </h1>
        <div
          className="container border p-5 text-center"
          style={{
            width: "400px",
            height: "450px",
            borderRadius: "25px",
            boxShadow: "4px 5px 15px  10px black",
            backgroundColor: "",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="text-info"></label>
            <input
              type="email"
              className="form-control text-center"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p className="text-secondary">Please enter a valid email</p>

            <label htmlFor="password" className="text-info"></label>
            <input
              type="password"
              className="form-control text-center"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-secondary">Please enter a valid password</p>

            <div className="container mt-5">
              <button type="submit" id="btn">
                Submit
              </button>
            </div>
          </form>

          <div className="container mt-5">
            <Link to="/signUp" className="text-white">
              <span>Create account</span> <br />
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

//
