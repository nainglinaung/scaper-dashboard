"use client"
import React, { useEffect } from 'react'
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormState } from "react-dom";
const config = {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
} as ToastOptions


type Prop = {
    handleSubmit: (prevState: any, formData:FormData) => void
}

  
function AddNewKeyword({handleSubmit} : Prop) {

   const [message, formAction] = useFormState(handleSubmit, null);
   
  useEffect(() => { 
    console.log(message);
    if (message === "success") {
      toast.success("Keyword added successfully", config);
    } else if (message === "error") {
      toast.error("Something went wrong", config);
    }
  }, [message])
  
    return (
        
      <div className="m-3">
      <form action={formAction}><h2 className="mb-5">Add Keyword by Text</h2>
        <input type="text" placeholder="Type here" name="keyword" className="input input-bordered w-full max-w-xs input-sm" />
          <button className="btn btn-sm ml-3">Add New Keyword</button>
        </form>
        <ToastContainer />
    </div>
)
}

export default AddNewKeyword