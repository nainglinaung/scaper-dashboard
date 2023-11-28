import React from 'react'

function page() {
  return (
    <div className="m-3">
      <h2 className="mb-5">Add Keyword by Text</h2>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs input-sm" />
      <button className="btn btn-sm ml-3">Add New Keyword</button>
    </div>
  )
}

export default page