"use client"
import React, { useContext } from "react";
import { Credentials } from "../types/credentials";
import { Link } from "react-router-dom";
import { useAlert } from "../hooks/useAlert";
import AlertComponent from "../layouts/Alert";
import { AppContext } from "../context/AppContext";

export default function LoginComponent() {
  const [credentials, setCredentials] = React.useState<Credentials>({ email: '', password: '' });
  const { handleClose, alert, setAlert } = useAlert();
   
  const { handleLogin } = useContext(AppContext);
 
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleLogin(credentials).catch((error: { message: any; }) => {
        setAlert({showError:true, message:error.message})
    })
  }


  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Login
            </button>
          </div>
        </form>
        {alert.showError && <AlertComponent message={alert.message} handleClose={handleClose} />}
        <p className="mt-4 text-sm text-center text-gray-700"> Do not have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
      </div>
  );
}