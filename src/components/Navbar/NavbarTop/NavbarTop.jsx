import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { BASE_URL } from '../../../utils/apiURL';
import { removeUser } from '../../../redux/userSlice';

function NavbarTop({itemsCount}) {
    const [isDialogBoxOpen,setIsDialogBoxOpen] = useState(false);
    const [searchValue,setSearchValue] = useState()
    const [searchResult,setSearchResult] = useState([])
    const user = useSelector(state=>state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogoutLoginDialogBox = ()=>{
        setIsDialogBoxOpen(!isDialogBoxOpen);
    }

    const handleLogout = ()=>{
      dispatch(removeUser())
      setIsDialogBoxOpen(false)
    }

    const handleNavigateProduct = (id)=>{
      navigate(`product-details/${id}`);
      setIsDialogBoxOpen(false)
    }

    const handleClearSearchValue = ()=>{
      setSearchValue();
    }

    const handleSearchValue = (e)=>{
      setSearchValue(e.target.value)
      axios.get(`${BASE_URL}products/search?q=${e.target.value}`).then(response=>{
        setSearchResult(response.data.products);
      })
    }

  return (
    <section className="pt-3 bg-white" id="search">
    <div className="max-w-full m-auto flex justify-between items-center px-3">
      <div className="">
        <img
          className="inline"
          src="/shopNewLogo.jpg"
          width="50px"
          alt="Logo"
        />
        <h2 className="inline font-semibold text-3xl">
         <NavLink to="/home"> <span className="text-orange-400 cursor-pointer">
            SHOP<span className="text-blue-900">CART</span>
          </span> </NavLink>
        </h2>
      </div>
      <div className="border-2 rounded-lg hidden sm:flex text-lg p-1 md:w-3/5 flex items-center relative">
        <i className="fa fa-search mx-1 opacity-50 "></i>
        <input
          className=" text-lg p-1  md:w-full outline-none"
          type="text"
          placeholder="Search"
          value={searchValue}
          onBlur={handleClearSearchValue}
          onChange={handleSearchValue}
        />
        <span className="hidden md:inline md:opacity-50 md:text-base">
          All&nbsp;Category
        </span>
        <div className={`absolute h-[30vh] w-[80%] bg-gray-200 top-14 left-10 z-[20] p-2 overflow-y-scroll shadow-lg rounded-md ${searchValue ? "" : "hidden"} `}
              onClick={handleClearSearchValue}
             
        >
          {searchResult.map((product,index)=>{
            return (
              <div className=' p-1 m-1 flex gap-1 bg-gray-100 hover:bg-orange-400 cursor-pointer' onClick={()=>handleNavigateProduct(product.id)} key={index}>
              <img className="object-fill" src={product.thumbnail} width="100px" height="100px"/>
              <div className='flex flex-col'>
                <label>{product.brand}</label>
                <label>{product.title}</label>
                <label className='capitalize'>{product.category}</label>
              </div>
              </div>
        
            )
          })}
        
        </div>
      </div>
      <div className=" flex items-center relative gap-3">
        <i className="fa fa-search inline sm:hidden bg-violet-100 rounded-[100%]
         p-2  w-9 h-9 text-center"
         ></i>
        { user !==undefined ? <img src={user.image} className='w-9 h-9 p-2 cursor-pointer' onClick={handleLogoutLoginDialogBox} /> :
        <i className="fa fa-user icon bg-violet-100 rounded-[100%]
         p-2 w-9 h-9 text-center cursor-pointer"
         onClick={handleLogoutLoginDialogBox} 
         
         
         ></i> }
            <div className={`h-20 w-32 bg-orange-100 absolute top-10 right-0 rounded-md shadow-md lg:text-lg text-center z-[20] p-1 ${isDialogBoxOpen ? "" : "hidden"}`} onMouseLeave={()=>setIsDialogBoxOpen(false)} >
               { user ===undefined ? <NavLink to="/sign-in"><label className=' hover:bg-orange-400 w-full p-2 cursor-pointer'>Login</label></NavLink>
               : <label className=' hover:bg-orange-400 w-full p-2' onClick={handleLogout}>Logout</label> }
            </div>
         
        <div>
          <NavLink to="/cart">
            <i className="fa fa-shopping-bag bg-violet-100
             rounded-[100%] p-2 w-9 h-9 text-center relative hover:scale-110"
             >
               { itemsCount!==0 && <label className="absolute -top-0.5 -right- rounded-[100%]
               bg-orange-400 text-white p-1"
              >
                {itemsCount}
              </label> }
            </i>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NavbarTop