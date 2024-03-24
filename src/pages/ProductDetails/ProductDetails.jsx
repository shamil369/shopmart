import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProductSingle,
  getSingleProduct,
} from "../../redux/productSlice";
import {
  addToCart,
  getCartMessageStatus,
  setCartMessageOff,
  setCartMessageOn,
} from "../../redux/cartSlice";
import CartMessage from "../../components/CartMessage/CartMessage";
import { addToWishlist } from "../../redux/wishlistSlice";

function ProductDetails() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const singleProduct = useSelector(getSingleProduct);
  const cartMessageStatus = useSelector(getCartMessageStatus);
  useEffect(() => {
    dispatch(fetchAsyncProductSingle(id));
    if (cartMessageStatus) {
      setTimeout(() => {
        dispatch(setCartMessageOff());
      }, 2000);
    }
  }, [cartMessageStatus,id]);

  let discountedPrice =
    singleProduct?.price -
    singleProduct?.price * (singleProduct?.discountPercentage / 100);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  const handleAddToCart = (product) => {
    let totalPrice = quantity * discountedPrice;
    dispatch(
      addToCart({ ...product, quantity: quantity, totalPrice, discountedPrice })
    );
    dispatch(setCartMessageOn());
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="p-10">
      {cartMessageStatus && <CartMessage />}
      {singleProduct.length !==0 && (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-3 py-5 mx-auto bg-white rounded-lg shadow-3xl">
            <div class="lg:w-4/5 mx-auto flex flex-wrap-reverse ">
              <div class=" lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  {singleProduct.brand}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
                  {singleProduct.title}
                </h1>
                <div class="flex mb-4">
                  <a class="flex-grow text-blue-500 border-b-2 border-blue-500 py-2 text-lg px-1">
                    Description
                  </a>
                </div>
                <p class="leading-relaxed mb-4">{singleProduct.description}</p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Category</span>
                  <span class="ml-auto text-gray-900 capitalize">
                    {singleProduct.category}
                  </span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Rating</span>
                  <span class="ml-auto text-gray-900 capitalize ">
                    {singleProduct.rating}
                    <i className="fa fa-star ms-1"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Discount</span>
                  <span class="ml-auto text-gray-900 bg-orange-400 me-1 px-1 rounded-md">
                    {" "}
                    {singleProduct.discountPercentage}% OFF
                  </span>
                </div>
                <div class="flex justify-between border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-500">Quantity</span>
                  <div>
                    <button
                      onClick={handleDecreaseQuantity}
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex
                       items-center justify-center text-gray-500 ml-4 me-3"
                    >
                      <i className="fa fa-minus"></i>
                    </button>
                    <span class="ml-auto text-gray-900">{quantity}</span>
                    <button
                      onClick={handleIncreaseQuantity}
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex 
                      items-center justify-center text-gray-500 ml-4"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-500 line-through">
                    &#8377; {singleProduct.price}{" "}
                  </span>
                  <span className="ms-2">inclusive of all taxes</span>
                </div>
                <div class="flex justify-between">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    &#8377; {Math.round(discountedPrice)}
                  </span>
                  <div className="flex">
                    <button
                      onClick={() => handleAddToCart(singleProduct)}
                      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6
                       focus:outline-none hover:bg-blue-600 rounded me-2"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleAddToWishlist(singleProduct)}
                      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 
                      focus:outline-none hover:bg-blue-600 rounded"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
              <img
                alt="ecommerce"
                class="lg:w-1/2 bg-red-500 w-full h-[500px] object-fill rounded"
                src={singleProduct.thumbnail}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetails;
