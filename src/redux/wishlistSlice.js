import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlists: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      console.log("wishlist call", action);
      const newItem = action.payload;
      const existingItem = state.wishlists.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        console.log("wishlist call22", action);
        state.wishlists.push(newItem);
      }
    },

    removeFromWishlist(state, action) {
      console.log("remove slice", action);
      const id = action.payload;
      state.wishlists = state.wishlists.filter((item) => item.id !== id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
