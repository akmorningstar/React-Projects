import { LoginInfo } from "./Models";

const baseURL = "http://localhost:3000"



export async function SignupAPI(signInfo:LoginInfo){
  return fetch(`${baseURL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signInfo),
  });
  
}

export async function LoginAPI(loginInfo:LoginInfo){
  return fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginInfo),
  });
  
}