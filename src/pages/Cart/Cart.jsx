import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCarts,
  removeFromCart,
  clearCart,
  toggleCartQuantity,
} from "../../redux/cartSlice";
import EmptyComponent from "../../components/EmptyComponent/EmptyComponent";
function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount } = useSelector((state) => state.cart);

  const handleDecreaseQuantity = (id) => {
    dispatch(toggleCartQuantity({ id, type: "DECREMENT" }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(toggleCartQuantity({ id, type: "INCREMENT" }));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="text-4xl text-center pt-3">My Cart</h1>
      {carts.length === 0 ? (
        <div className="h-[70vh] p-16">
          <EmptyComponent page={{ key: "Cart" }} />
        </div>
      ) : (
        <div className="p-3 mb-20">
          <div className="flex flex-col lg:flex-row p-3">
            <div className="overflow-scroll mb-5 mt-10 w-3/4">
              <table className="table text-center  mb-0">
                <thead className="">
                  <tr className="text-base lg:text-xl">
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-base lg:text-lg">
                  {carts.map((cartProduct, index) => {
                    return (
                      <tr key={index}>
                        <td className="align-middle flex  ">
                          <img
                            src={cartProduct.thumbnail}
                            alt="img"
                            style={{ width: "50px", height: "50px" }}
                          />
                          <h4>{cartProduct.title}</h4>
                        </td>
                        <td className="align-middle">
                          &#8377; {Math.round(cartProduct.discountedPrice)}
                        </td>
                        <td className="align-middle">
                          <div
                            className="input-group quantity mx-auto"
                            style={{ width: "100px" }}
                          >
                            <div className="flex">
                              <button
                                onClick={() =>
                                  handleDecreaseQuantity(cartProduct.id)
                                }
                                className=" w-7 h-7 bg-gray-200 p-0 border-0 inline-flex items-center 
                                justify-center text-gray-500 ml-1 me-1"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              <span class="ml-auto text-gray-900 me-1 ms-1">
                                {cartProduct.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleIncreaseQuantity(cartProduct.id)
                                }
                                className="w-7 h-7 bg-gray-200 p-0 border-0 inline-flex items-center 
                                justify-center text-gray-500 ml-1"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          {Math.round(cartProduct.totalPrice)}
                        </td>
                        <td className="align-middle">
                          <button
                            onClick={() => handleRemoveFromCart(cartProduct.id)}
                            className="text-base lg:text-2xl rounded-full w-10 h-10 hover:bg-gray-200 p-0 
                            border-0 inline-flex items-center justify-center ml-4"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-3/4 lg:w-96 bg-white ms-1 h-max rounded-lg mt-10 ">
              <div className="pt-2" action="">
                <div className="flex justify-center">
                  <button
                    onClick={handleClearCart}
                    className="border-2 border-red-500 bg-red-400 p-2 rounded-md text-white 
                    font-medium hover:bg-red-500 "
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
              <h5 className=" text-uppercase ms-2 m-3">
                <span className="font-semibold text-md lg:text-xl pr-3">
                  Cart Summary
                </span>
              </h5>
              <div className="bg-white rounded-md ">
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3 p-2">
                    <h6 className="font-medium text-base lg:text-lg">
                      Subtotal
                    </h6>
                    <h6 className="font-medium text-base lg:text-lg">
                      &#8377; {Math.round(totalAmount)}
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <h6 className="font-medium text-base lg:text-lg">
                      Shipping
                    </h6>
                    <h6 className="font-medium text-base lg:text-lg">
                      Free Delivery
                    </h6>
                  </div>
                  <div className="d-flex justify-content-between p-2">
                    <h6 className="font-medium text-base lg:text-lg">
                      Total Items
                    </h6>
                    <h6 className="font-medium text-base lg:text-lg">
                      {itemsCount} Nos
                    </h6>
                  </div>
                </div>
                <div className="p-2">
                  <div className="d-flex justify-content-between mt-2 p-2">
                    <h5 className="font-medium text-base lg:text-lg">Total</h5>
                    <h5 className="font-medium text-base lg:text-lg">
                      &#8377; {Math.round(totalAmount)}
                    </h5>
                  </div>
                  <button className="rounded-lg bg-blue-400 p-3  font-medium
                   text-white hover:bg-blue-500 block m-auto"
                   >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
