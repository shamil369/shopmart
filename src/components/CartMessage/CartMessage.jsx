import React from "react";

function CartMessage() {
  return (
    <div className="fixed bg-black top-36 z-30 right-6 flex justify-center items-center">
      <div className="p-7 rounded-md flex justify-center items-center h-8 
      bg-green-200 border-2 border-green-600 text-green-600 text-lg"
      >
        Item Added to the Cart<i className="fa fa-check-circle ms-1"></i>
      </div>
    </div>
  );
}

export default CartMessage;
