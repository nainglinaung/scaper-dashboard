"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

function Navbar() {

  const { status, data: session } = useSession();
  
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Scaper Dashboard</a>
      </div>
      <div className="flex-none">
        {status === "authenticated" && <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost">
          <div>
              {session.user?.name}
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/api/auth/signout">Logout</a></li>
        </ul>
        </div>}
      </div>
    </div>

  )
}

export default Navbar

 
