import React,{useState} from 'react'
import { NavLink } from 'react-bootstrap'

function Navbar() {
const[isOpen,setIsOpen]= useState()

const handleToggleNavbar=()=>{
    setIsOpen(!isOpen)
}

const Links = [{name:"Home",link:"/home"}]
  return (
    <nav className='sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b shadow-md'>
        <div className='md:flex bg-violet-500 py-3 md:px-10 px-7'>
            <div className=''>
                <img className="inline" src="/shopNewLogo.jpg" width="50px"  alt="Logo"/>
                <h2 className='inline font-semibold text-3xl'><span className='text-orange-400'>SHOP</span> <span className='text-blue-900'>CART</span></h2>
            </div>
            <ul className='md:flex md:items-center'>
                <li>
                    <NavLink to="/"></NavLink>
                </li>
            </ul>
        </div>
        <div className='w-1/3'>
            {/* <div className='flex justify-between'>
            <NavLink to="/about" >Home</NavLink>
            <NavLink to="/about" >Wishlist</NavLink>
            <NavLink to="/about" >Cart</NavLink>
            <NavLink to="/about" >Sign In</NavLink>
            <NavLink to="/about" >Sign Up</NavLink>
            </div>
            <div>
                <button onClick={handleToggleNavbar}>

                </button>
            </div> */}
        </div>
       

    </nav>
  )
}

export default Navbar