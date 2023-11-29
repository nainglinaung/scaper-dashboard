"use client"
import React from 'react'
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function AddNewKeyword() {

  
    const submit = () => {
        toast.success('Holla', config);
    }


    return (
    <> <h2 className="mb-5">Add Keyword by Text</h2>
    <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />

        
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
    <button onClick={submit} className="btn btn-sm ml-3">Add New Keyword</button></>
)
}

export default AddNewKeyword