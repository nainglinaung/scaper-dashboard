import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
<div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link href="/">List</Link></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
  )
}

export default Sidebar