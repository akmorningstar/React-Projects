import { ToastContainer } from "react-toastify"

import Header from "../Components/Header"
import UserList from "../Components/UserList"

const Home:React.FC = () => {
    const loggedinUser = localStorage.getItem("username") || ""
  
  return (
    <div>
      
        
          <div>
            <Header username = {loggedinUser}  />
            <UserList isHome = {true}/>
          </div>
        
      
    
      <ToastContainer/>
    </div>
  )
}

export default Home
