import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { EmpInfo } from '../Models'
import { handleError } from '../utils'
import './component.css'
import Loadericon from './Loadericon'
import UserDisplay from './UserDisplay'
const UserList:React.FC<{isHome:boolean}> = ({isHome = false}) => {
  const [users, setUsers] = useState<EmpInfo[]>([])

  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const url = "http://localhost:3000/users/all-users";
        const headers = {
          Authorization: localStorage.getItem("token") || "",
        };

        const res = await fetch(url, {
          headers,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const result = await res.json();
        setUsers(result.data);
      } catch (error) {
        handleError(String(error));
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const recent = isHome ? users.slice(0, 5) : users;
  // console.log(recent)
  return (
    <div >
      {loading?(<Loadericon loading = {loading}></Loadericon>):(<div className='ShowcaseUser'>
            {recent.map((user) => (
            <UserDisplay userInfo ={user} key={user.id}/>
          ))}
            </div>)
      }
      
      <ToastContainer />
    </div>
  )
}

export default UserList
