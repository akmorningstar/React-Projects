import { useState } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import logo from "../../assets/logo3.png";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuOff = ()=>{
    setToggle(false);
    console.log("menu off");
  };
  const Menu = ()=>{
    return(
      
        <>
          <p>
            <a href="#Home">Home</a>
          </p>
          <p>
            <a href="#whatgpt3">What is gpt-3 ?</a>
          </p>
          <p>
            <a href="#possibility">Possibility</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#Blog">Blog</a>
          </p>
        </>
      
    )
  }
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="gpt3_navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>
          Sign in 
        </p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar-menu" onBlur= {menuOff}>
        {toggle?<RiCloseLine color="#fff" onClick={()=>setToggle(false)}/>:<RiMenu3Fill color="#fff" onClick={()=>setToggle(true)}/>}
          {
            toggle && (<div className="gpt3_navbar-menu_container scale-up-center"  >
              <div className="gpt3_navbar-menu_container-links">
                <Menu/>
                  <div className="gpt3_navbar-menu_container-links-sign">
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

export default Navbar;
