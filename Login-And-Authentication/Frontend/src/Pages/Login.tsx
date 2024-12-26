import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LoginAPI } from '../Connection'
import { LoginInfo } from '../Models'
import { handleError, handleSucess } from '../utils'
import './pages.css'
const Login = () => {
  const [loginInfo,loginSetter] = useState<LoginInfo>({
    email: "",
    password: ""
  })
  
  const Navigate = useNavigate();
  const LoginMec = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const loginButton =  document.querySelector('button');
    loginButton!.setAttribute('disabled', 'true');
    console.log(loginInfo)
    const password = String(loginInfo.password);
    
    if(password.length! < 6){
      handleError("Password must be at least 6 characters")
    }
    
    else{

    
    try {
      const response = await LoginAPI(loginInfo);
      const result = await response.json();
      console.log(result)
      if(result.success){
        handleSucess(result.message);
        localStorage.setItem("token", result.token);
        localStorage.setItem("username", JSON.stringify(result.username));     
        setTimeout(()=>{
          Navigate("/home")
        }, 2000);
      }
      else{
        handleError(result.message)
      }
    }
    catch (error) {
      handleError(String(error));
    }
    finally{
      loginButton!.removeAttribute('disabled');
    }
    }
    
  }

  const handleChange =(name:keyof LoginInfo, value:string)=>{
    loginSetter({
      ...loginInfo,
      [name]: value,
    })
  }

  return (
    <div className="container">
      {/* lets make a form first */}
      <h1>
        Login
      </h1>

      <form onSubmit={LoginMec}>
        <div className="container-fields">
          <label htmlFor='email'>
            <p>
              Email
            </p>
            <input type="email"
            required
            autoFocus
            onChange ={(e)=>handleChange("email", e.target.value)} 
            name='email'
            placeholder='name@gmail.com'/>

          </label>
        </div>
        <div className="container-fields">
          <label htmlFor='email'>
            <p>
              Password
            </p>
            <input type="password"
            required
            autoFocus
            onChange ={(e)=>handleChange("password", e.target.value)} 
            name='password'
            placeholder='must contain a unique, upper&lower-case, and numeric letter'/>
          </label>
        </div>
        <button className='btn btn-outline-info'>
          Login
        </button>
      <span>
        Want to create an account? <a href="/reqres.in/sign-up">Sign-Up</a>
      </span>
      </form>
    <ToastContainer/>
    </div>
  )
}

export default Login
