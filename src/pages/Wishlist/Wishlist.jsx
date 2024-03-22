import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../../redux/wishlistSlice";
import EmptyComponent from "../../components/EmptyComponent/EmptyComponent";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlists);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="mb-20">
      <div className="container">
        <h2 className="text-center m-5 text-lg lg:text-3xl">My Wishlist</h2>
        {wishlist.length !== 0 ? (
          wishlist.map((wishItem) => {
            return (
              <div className="px-3 my-5 bg-light rounded-3" key={wishItem.id}>
                <div className="container py-4">
                  <button
                    onClick={() => handleRemoveFromWishlist(wishItem.id)}
                    className="float-end text-lg lg:text-3xl"
                    aria-label="Close"
                  >
                    <i className="fa fa-close rounded-full w-10 h-10 hover:bg-gray-200
                     flex justify-center items-center"
                     ></i>
                  </button>
                  <div className="flex justify-center gap-20">
                    <div className="w-3/12 bg-red-500">
                      <img
                        src={wishItem.thumbnail}
                        alt={wishItem.title}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="col-md-4">
                      <h3>{wishItem.title}</h3>
                      <p className="lead fw-bold mb-0">
                        Price: &#8377;{wishItem.price * 50}
                      </p>
                      <p className="lead fw-bold ">
                        Description:{" "}
                        <span className="lead text-break">
                          {wishItem.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <EmptyComponent page={{ key: "Wishlist" }} />
        )}
      </div>
    </div>
  );
}

export default Wishlist;
