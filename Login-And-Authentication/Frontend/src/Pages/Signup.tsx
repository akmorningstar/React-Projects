import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { SignupAPI } from "../Connection";
import { LoginInfo } from "../Models";
import { handleError, handleSucess } from "../utils";
import "./pages.css";




const Signup:React.FC = () => {

  const Navigate = useNavigate();

  const [signInfo, setLoginInfo] = useState<LoginInfo>({
    name: "",
    email: "",
    password: ""
  })
  const SignupMec = async (e:React.FormEvent<HTMLFormElement>)=>{
    const password = String(signInfo.password);
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    e.preventDefault()//so as to prevent the page from reloading
    console.log(signInfo)
    if(password.length! < 6){
      handleError("Password must be at least 6 characters")
    }
    else if(!passwordPattern.test(password)){
      handleError("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character")
    }
    

    try {
      const response = await SignupAPI(signInfo);
      const result = await response.json();
      if(response.ok){
        handleSucess(result.message)
        setTimeout(()=>{
          Navigate("/login")
        }, 1000)
      }
      else{
        handleError(result.message)
      }
    } catch (error) {
      handleError(String(error));
    }

  }

  const handleChange =(name:keyof LoginInfo, value:string)=>{
    
    
      setLoginInfo({
        ...signInfo,
        [name]: value,
      });

    
    
  }
  console.log(signInfo)
  return (
    <div className="container">
      <h1>
        Sign-Up
      </h1>
      <form onSubmit={SignupMec} >
        <div className="container-fields">
          <label htmlFor="name">
            <p>
              Name
            </p>
            <input 
            onChange={(e)=>handleChange("name",e.target.value)}
            type="text" name="name" autoFocus placeholder="Enter your name..."
            required
            />
          </label>
        </div>
        <div className="container-fields">
          <label htmlFor="email">
            <p>
              Email
            </p>
            <input
            onChange={(e)=>handleChange("email",e.target.value)}
             type="email" name="email" autoFocus placeholder="Enter your email..."
            required
            />
          </label>
        </div>
        <div className="container-fields">
          <label htmlFor="name">
            <p>
              Password
            </p>
            <input
            onChange={(e)=>handleChange("password",e.target.value)}
             type="password" name="password" autoFocus placeholder="Enter  password..."
            required
            />
          </label>
        </div>
        <button className="btn btn-outline-info">Sign-up</button>
        <span>Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default Signup
