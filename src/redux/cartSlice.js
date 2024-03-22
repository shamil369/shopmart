import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQuantity = item.quantity + action.payload.quantity;
            let tempTotalPrices = tempQuantity * item.price;
            return {
              ...item,
              quantity: tempQuantity,
              totalPrice: tempTotalPrices,
            };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
      } else {
        state.carts.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
    },
    clearCart: (state) => {
      state.carts = [];
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);
      state.itemsCount = state.carts.length;
    },
    toggleCartQuantity: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQuantity = item.quantity;
          let tempTotalPrice = item.totalPrice;
          if (action.payload.type === "INCREMENT") {
            tempQuantity++;
            if (tempQuantity === item.stock) {
              tempQuantity = item.stock;
            }
            tempTotalPrice = tempQuantity * item.discountedPrice;
          }
          if (action.payload.type === "DECREMENT") {
            tempQuantity--;
            if (tempQuantity < 1) {
              tempQuantity = 1;
            }
            tempTotalPrice = tempQuantity * item.discountedPrice;
          }
          return {
            ...item,
            quantity: tempQuantity,
            totalPrice: tempTotalPrice,
          };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
    },
    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
  },
});

export const {
  addToCart,
  setCartMessageOn,
  setCartMessageOff,
  getCartTotal,
  removeFromCart,
  clearCart,
  toggleCartQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
export const getCartMessageStatus = (state) => state.cart.isCartMessageOn;
export const getAllCarts = (state) => state.cart.carts;
export const getCartItemsCount = (state) => state.cart.itemsCount;
