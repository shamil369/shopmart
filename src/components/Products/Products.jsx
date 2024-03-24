import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getAllProducts } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../redux/cartSlice";
import { getSelectedCategory } from "../../redux/categorySlice";
import CartMessage from "../CartMessage/CartMessage";

function Products() {
    
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const selectedCategory = useSelector(getSelectedCategory);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

  let randomProducts = [];
  if (products.length > 0) {
    for (let i in products) {
      let randomIndex = Math.floor(Math.random() * products.length);
      while (randomProducts.includes(products[randomIndex])) {
        randomIndex = Math.floor(Math.random() * products.length);
      }
      randomProducts[i] = products[randomIndex];
    }
  }

  const handleNavigate = (id) => {
    navigate(`/product-details/${id}`);
  };

  const handleAddToCart = (product) => {
    let discountedPrice =
      product?.price - product?.price * (product?.discountPercentage / 100);
    let totalPrice = 1 * discountedPrice;
    dispatch(
      addToCart({ ...product, quantity: 1, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn());
    setTimeout(() => {
      dispatch(setCartMessageOff());
    }, 2000);
  };

  return (
    <div id="products" className="p-5">
      {cartMessageStatus && <CartMessage />}
      <h1 className="text-4xl font-semibold ">Our Products</h1>
      <div className="p-3  grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap">
        {randomProducts.map((product, index) => {
          
          if(product.category===selectedCategory || selectedCategory==="All"){
          return (
            <div
              className="box 2xl:p-8 w-64 md:w-96 transition-all duration-400 hover:scale-110"
              key={index}
            >
              <div className=" bg-white p-5 relative rounded-md shadow-3xl m-2 cursor-pointer ">
                <div
                  className="img"
                  onMouseDown={() => handleNavigate(product.id)}
                >
                  <span className="absolute top-0 left-0 bg-orange-500 py-1 px-3 
                  text-sm rounded-md text-white m-2"
                  >
                    {product.discountPercentage}% Off
                  </span>
                  <img
                    src={product.thumbnail}
                    className="w-full h-64 rounded-md object-contain"
                    alt=""
                  />
                  <div
                    className="absolute top-0 right-0 m-2 transition duration-300 opacity-0 "
                    id="love"
                  >
                    <label>0</label>
                    <br />
                    <i className="fa fa-heart"></i>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="font-normal text-lg capitalize truncate">
                    {product.title}
                  </h3>
                  <h3 className="font-normal text-lg capitalize">
                    {product.category}
                  </h3>
                  <div className="rate text-lg">
                    <span>{product.rating}</span>
                    <i className="fa fa-star ms-1"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="flex justify-between text-blue-950">
                    <h4 className="text-lg">&#8377; {product.price}.00</h4>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="outline-none border-1 border-blue-950 rounded-md
                       hover:bg-blue-950 transition duration-300 text-blue-950 hover:text-white px-2"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
          }
        })}
      </div>
    </div>
  );
}

export default Products;
