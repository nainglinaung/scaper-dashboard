/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';



function NavBar() {

  return (<><nav
    className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
    <div className="flex w-full flex-wrap items-center justify-between px-3">


      <div
        className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContent1"
      >

        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
          <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <Link to="/" className='text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'>Home</Link>
          </li>
        </ul>
      </div>

      <div className="relative flex items-center">


        <div
          className="relative"
          data-te-dropdown-ref
          data-te-dropdown-alignment="end">

          <a
            className="hidden-arrow mr-4 flex items-center text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            href="#"
            id="dropdownMenuButton1"
            role="button"
            data-te-dropdown-toggle-ref
            aria-expanded="false">
            <span className="[&>svg]:w-5">
              <Link id="logout" to="/logout">Logout</Link>  </span>
            <span
              className="absolute -mt-4 ml-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white"
            >1</span
            >
          </a>

        </div>


      </div>
    </div>
  </nav></>

  )
}

export default NavBar