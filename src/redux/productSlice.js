import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
import axios from "axios";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    }),
      builder.addCase(fetchAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsStatus = STATUS.SUCCEEDED;
      }),
      builder.addCase(fetchAsyncProducts.rejected, (state, action) => {
        state.productsStatus = STATUS.FAILED;
      }),
      builder.addCase(fetchAsyncProductSingle.pending, (state, action) => {
        state.productSingleStatus = STATUS.LOADING;
      }),
      builder.addCase(fetchAsyncProductSingle.fulfilled, (state, action) => {
        state.productSingle = action.payload;
        state.productSingleStatus = STATUS.SUCCEEDED;
      }),
      builder.addCase(fetchAsyncProductSingle.rejected, (state, action) => {
        state.productSingleStatus = STATUS.FAILED;
      });
  },
});

export const getAllProducts = (state) => state.product.products;
export const getSingleProduct = (state) => state.product.productSingle;
export default productSlice.reducer;

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const response = await axios.get(`${BASE_URL}products`);
    return response.data.products;
  }
);

export const fetchAsyncProductSingle = createAsyncThunk(
  "product-single/fetch",
  async (id) => {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    console.log("single product fetch", response);
    return response.data;
  }
);
