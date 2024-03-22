import React from "react";
import Slider from "react-slick";
import { productItems } from "../../../data/data.js";
import { addToWishlist } from "../../../redux/wishlistSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  setCartMessageOn,
  setCartMessageOff,
} from "../../../redux/cartSlice.js";

function FlashCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  const NextArrowFlashCard = ({ onClick }) => {
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="absolute top-[40%] w-12 h-12 bg-blue-500 rounded-[50%] 
        transition duartion-400 -right-5 z-[5] text-lg hover:bg-blue-950 hover:text-white"
        >
          <i className="fa fa-long-arrow-right"></i>
        </button>
      </div>
    );
  };

  const PrevArrowFlashCard = ({ onClick }) => {
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="absolute top-[40%] w-12 h-12 bg-blue-500 rounded-[50%] 
        transition duartion-400 -left-5 z-[5] text-lg hover:bg-blue-950 hover:text-white"
        >
          <i className="fa fa-long-arrow-left"></i>
        </button>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrowFlashCard />,
    prevArrow: <PrevArrowFlashCard />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem, index) => {
          return (
            <div className="box 2xl:p-8" key={index}>
              <div className=" bg-white p-5 relative rounded-md shadow-3xl m-2 
              transition-all duration-500 hover:scale-110 ">
                <div className="img">
                  <span className="absolute top-0 left-0 bg-orange-500 py-1 px-3 
                  text-sm rounded-md text-white m-2">
                    {" "}
                    {productItem.discountPercentage}% Off
                  </span>
                  <div className="middle-img-background w-full h-full">
                    <img
                      src={productItem.thumbnail}
                      className="w-full h-64 rounded-md object-contain"
                      alt=""
                    />
                    <div className="middle-img w-full h-full">
                      <div className="text bg-[#5c5b5b50] w-full h-full">
                        <div className=" flex flex-col gap-2 p-1 justify-center h-full  ">
                          <button
                            onMouseDown={() => handleNavigate(productItem.id)}
                            className=" rounded-md bg-orange-500 transition duration-300
                             text-blue-950 hover:text-white py-1"
                          >
                            View Product
                          </button>
                          <button
                            onClick={() => handleAddToCart(productItem)}
                            className=" rounded-md bg-orange-500 transition duration-300
                             text-blue-950 hover:text-white py-1"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute top-1 right-2 m-2 transition duration-300 bg-"
                    id="love"
                  >
                    <i
                      onClick={() => handleAddToWishlist(productItem)}
                      className="fa fa-heart rounded-full w-10 h-10 hover:bg-gray-200 
                      flex justify-center items-center"
                    ></i>
                  </div>
                </div>
                <div className="product-detail">
                  <h3 className="font-normal text-lg truncate">
                    {productItem.title}
                  </h3>
                  <div className="rate text-lg">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="flex justify-between text-blue-950">
                    <h4 className="text-lg">{productItem.price}.00</h4>
                    <button
                      onClick={() => handleAddToCart(productItem)}
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
        })}
      </Slider>
    </>
  );
}

export default FlashCard;
