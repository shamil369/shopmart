import React,{useState} from 'react'
import { NavLink } from 'react-bootstrap'

function Navbar() {
const[isOpen,setIsOpen]= useState()

const handleToggleNavbar=()=>{
    setIsOpen(!isOpen)
}

window.addEventListener("scroll",()=>{
    const search = document.getElementById("search");
    search.classList.toggle("scroll",window.scrollY>100)
})
const Links = [{name:"Home",link:"/home"},
{name:"Wishlist",link:"/home"},
{name:"C",link:"/home"},
]
  return (
    // <nav className='sticky top-0 z-20 mx-auto flex w-full items-center justify-between border-b shadow-md'>
    //     <div className='md:flex bg-violet-500 py-3 md:px-10 px-7'>
    //         <div className=''>
    //             <img className="inline" src="/shopNewLogo.jpg" width="50px"  alt="Logo"/>
    //             <h2 className='inline font-semibold text-3xl'><span className='text-orange-400'>SHOP</span> <span className='text-blue-900'>CART</span></h2>
    //         </div>
    //         <ul className='md:flex md:items-center'>
    //             <li>
    //                 <NavLink to="/"></NavLink>
    //             </li>
    //         </ul>
    //     </div>l   

    // </nav>
    <>

    <section className='pt-3 bg-white' id="search">
        <div className='max-w-full m-auto flex justify-between items-center px-3'>
            <div className=''>
                <img className="inline" src="/shopNewLogo.jpg" width="50px"  alt="Logo"/>
                <h2 className='inline font-semibold text-3xl'><span className='text-orange-400'>SHOP<span className='text-blue-900'>CART</span></span></h2>
            </div>
            <div className='border-2 rounded-lg hidden sm:flex text-lg p-1 md:w-3/5 flex items-center'>
                <i className='fa fa-search mx-1 opacity-50 '></i>
                <input className=' text-lg p-1  md:w-full outline-none' type="text" placeholder="Search"/>
                <span className='hidden md:inline md:opacity-50 md:text-base'>All&nbsp;Category</span>
            </div>
            <div className=' flex items-center gap-3'>
                <i className='fa fa-search inline sm:hidden bg-violet-100 rounded-[100%] p-2 p-2 w-9 h-9 text-center'></i>
                <i className='fa fa-user icon bg-violet-100 rounded-[100%] p-2 p-2 w-9 h-9 text-center'></i>
                <div>
                    <NavLink ><i className="fa fa-shopping-bag bg-violet-100 rounded-[100%] p-2 w-9 h-9 text-center"></i></NavLink>
                </div>
            </div>
        </div>
    </section>


    <header className=' h-[6vh] bg-white shadow-md p-2'>
        <div className=' max-w-full m-auto flex justify-between px-5'>
                <div className='p-1 bg-blue-50 flex justify-between  rounded-md  '>
                <span className='fa fa-th-large me-2 text-lg '></span>
                <h4 className='inline  text-lg'>Categories <i className='fa fa-chevron-down ms-2'></i></h4>
                </div>
                <div className='flex items-center'>
                    <ul className={isOpen ? `absolute block top-0 left-0  w-3/4 h-[100vh] bg-violet-100 z-20 flex flex-col items-center gap-3 p-1` : "hidden md:flex text-lg"}>
                        <li className={isOpen ? " rounded-xl text-2xl w-full text-right me-1":'hidden'}>
                             <i onMouseDown={()=>setIsOpen(!isOpen)} className='fa fa-times cursor-pointer rounded-[100%] p-2 shadow-md' ></i>
                        </li>
                        <li className={isOpen ? "border-2 rounded-xl p-3 w-full text-center ":'me-2'}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={isOpen ? "border-2 rounded-xl p-3 w-full text-center ":'me-2'}>
                            <NavLink to="/">WishList</NavLink>
                        </li>
                        <li className={isOpen ? "border-2 rounded-xl p-3 w-full text-center ":'me-2'}>
                            <NavLink to="/">Cart</NavLink>
                        </li>
                        <li className={isOpen ? "border-2 rounded-xl p-3 w-full text-center ":'me-2'}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                    <button className="text-xl h-[30px]" onClick={()=>setIsOpen(!isOpen)}>
                        {
                             !isOpen && <i className='fa fa-bars active:bg-violet-100 rounded-[100%] p-2 active:shadow-md md:hidden'></i>
                        }
                    </button>
                </div>
            
        </div>
    </header>
    </>
  )
}

export default Navbar