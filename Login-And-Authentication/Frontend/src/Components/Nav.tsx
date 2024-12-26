import { useEffect, useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import "./component.css";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const menuOff = ()=>{
    setToggle(false);
    console.log("menu off");
  };
  const [loggedinUser,setLoggedinInfo] = useState<string>("")


  useEffect(()=>{
    setLoggedinInfo(localStorage.getItem('username') || "")
    console.log(loggedinUser)
  },[])
  const Navigate = useNavigate();
 

  const Menu = ()=>{
    return(
      
        <>
          <p>
            <Link to="/home">Home</Link>
          </p>
          <p>
            <Link to="/">Users List</Link>
          </p>
          <p>
            <Link to="/">Edit Info</Link>
          </p>
        </>
      
    )
  }
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          {/* <img src={lolt="" /> */}
          <h1>
            Logo
          </h1>
        </div>
        <div className="navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="navbar-sign">

      {
  localStorage.getItem('token') ? (
    <button
      type="button"
      onClick={() => {
        localStorage.removeItem('token'); // Remove token from localStorage
        localStorage.removeItem('username'); // Remove username from localStorage
        Navigate("/login"); // Navigate to SignIn page
      }}
    >
      Logout
    </button>
  ) : (
    <button
      type="button"
      onClick={() => {
        Navigate("/login"); // Navigate to SignIn page
      }}
    >
      SignIn
    </button>
  )
}
    
      </div>
      <div className="navbar-menu" onBlur= {menuOff}>
        {toggle?<RiCloseLine color="#fff" onClick={()=>setToggle(false)}/>:<RiMenu3Fill color="#fff" onClick={()=>setToggle(true)}/>}
          {
            toggle && (<div className="navbar-menu_container scale-up-center"  >
              <div className="navbar-menu_container-links">
                <div onClick={()=>{
                  setToggle(false)
                  
                }}>
                <Menu/>
                </div>
                
                  <div className="navbar-menu_container-links-sign">
                    <p>
                      Sign in 
                    </p>
                  <button type="button">Sign up</button>
                </div>
              </div>
              </div> )
          }
      </div>
    </div>
  );
};

export default Nav;


