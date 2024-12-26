import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { EmpInfo } from '../Models';
import "./component.css";
interface UserDisplayProps {
  userInfo: EmpInfo;
}
const UserDisplay:React.FC<UserDisplayProps> = ({userInfo}) => {
  
  // console.log(userInfo)
  return (
    
        <div className="user-container">
          <div className="img-section">
            <FaUserCircle className="profile-icon" /> 
          </div>
          <div className="user-info">
            <h1>{userInfo.name?userInfo.name:"Username"}</h1>
            <p>{userInfo.id?userInfo.id:"ID"}</p>
            <p>{userInfo.email?userInfo.email:"Email"}</p>

            {/* <div>
              <button onClick={handleChange} className='btn btn-primary'>Edit</button>
            </div> */}
          </div>
        </div>
    
  
      
    
  )
}

export default UserDisplay
