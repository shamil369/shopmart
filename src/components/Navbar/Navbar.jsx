import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  getAllCarts,
  getCartItemsCount,
  getCartTotal,
} from "../../redux/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowCategory } from "../../redux/categorySlice";
import NavbarTop from "./NavbarTop/NavbarTop";


function Navbar() {
  const [isOpen, setIsOpen] = useState();
  const carts = useSelector(getAllCarts);
  const itemsCount = useSelector(getCartItemsCount);
  const dispatch = useDispatch();
  
  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleToggleShowCategory = ()=>{
    dispatch(toggleShowCategory());
  }

  useEffect(() => {
    dispatch(getCartTotal());
  }, [carts]);
  window.addEventListener("scroll", () => {
    const search = document.getElementById("search");
    search.classList.toggle("scroll", window.scrollY > 100);
  });
 
  return (
    <>
     <NavbarTop itemsCount={itemsCount}/>

      <header className=" h-[6vh] bg-white shadow-md p-2">
        <div className=" max-w-full m-auto flex justify-between px-5">
          <div onClick={handleToggleShowCategory} className="p-1 bg-blue-50 flex justify-between rounded-md cursor-pointer ">
            <span className="fa fa-th-large me-2 text-lg "></span>
            <h4 className="inline  text-lg">
              Categories <i className="fa fa-chevron-down ms-2"></i>
            </h4>
          </div>
          <div className="flex items-center ">
            <ul
              className={
                isOpen
                  ? `absolute block top-0 left-0  w-3/4 h-[100vh] bg-violet-100 z-20 
                  flex flex-col items-center gap-3 p-1`
                  : "hidden md:flex text-lg pages"
              }
            >
              <li
                className={
                  isOpen
                    ? " rounded-xl text-2xl w-full text-right me-1"
                    : "hidden"
                }
              >
                <i
                  onMouseDown={handleToggleNavbar}
                  className="fa fa-times cursor-pointer rounded-[100%] p-2 shadow-md"
                ></i>
              </li>
              <li
                className={
                  isOpen
                    ? "border-2 rounded-xl p-3 w-full text-center "
                    : "me-10 hover-underline-animation hover:text-orange-400"
                }
              >
                <NavLink to="/">Home</NavLink>
              </li>
              <li
                className={
                  isOpen
                    ? "border-2 rounded-xl p-3 w-full text-center "
                    : "me-10 hover-underline-animation hover:text-orange-400"
                }
              >
                <NavLink to="/wishlist">
                  WishList <i className="fa fa-heart"></i>
                </NavLink>
              </li>
              <li
                className={
                  isOpen
                    ? "border-2 rounded-xl p-3 w-full text-center "
                    : "me-10 hover-underline-animation hover:text-orange-400"
                }
              >
                <NavLink to="/cart">
                  Cart <i className="fa fa-shopping-cart"></i>
                </NavLink>
              </li>
              <li
                className={
                  isOpen
                    ? "border-2 rounded-xl p-3 w-full text-center "
                    : "me-10 hover-underline-animation hover:text-orange-400"
                }
              >
                <NavLink to="/sign-in">Sign In</NavLink>
              </li>
              <li
                className={
                  isOpen
                    ? "border-2 rounded-xl p-3 w-full text-center "
                    : "me-10 hover-underline-animation hover:text-orange-400"
                }
              >
                <NavLink to="/sign-up">Sign Up</NavLink>
              </li>
            </ul>
            <button className="text-xl h-[30px]" onClick={handleToggleNavbar}>
              {!isOpen && (
                <i className="fa fa-bars active:bg-violet-100 rounded-[100%] 
                p-2 active:shadow-md md:hidden"
                ></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
