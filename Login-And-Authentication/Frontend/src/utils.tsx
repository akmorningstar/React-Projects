import { toast } from "react-toastify";


export const handleSucess =(msg: string)=>{
    toast.success(msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

}

export const handleError = (msg:string)=>{
    toast.error(msg,{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}






