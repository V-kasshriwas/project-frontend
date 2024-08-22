import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(email);
        console.log(password);
      const response = await axios.post("http://localhost:3100/user/signIn", {
        email,
        password,
      });
      console.log("Sign-in successful:");
      console.log(response.data)
       sessionStorage.setItem('response.data',JSON.stringify(response.data))
//     const  userData =JSON.parse( sessionStorage.getItem('response.data'))
//  console.log(userData.user.username)
//  console.log(userData.user.bio);
     
      
     
      if(response.data.message){
       
        console.log(response.data.message)
      }
    

      // Display success alert
      Swal.fire({
        title: "Success!",
        text: "You have signed in successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirect to another page if needed
        window.location.href = "/dashboard"; // Example: redirect to dashboard
      });
    } catch (error) {
        console.log(error);
      console.error("Sign-in failed:", error);

      // Display error alert
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
            <label htmlFor="email" className="text-info">
            
            </label>
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

            <label htmlFor="password" className="text-info">
            
            </label>
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
              <button type="submit" id="btn" >
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
