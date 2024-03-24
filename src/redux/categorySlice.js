import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";
import { category } from "../data/data";

const initialState = {
    categories:category,
    categoriesStatus:STATUS.IDLE,
    categorySelection:"All",
    showCategory:true,
}

export const fetchAsyncCategories = createAsyncThunk("categories/fetch",async()=>{
    const response = await fetch(`${BASE_URL}products/categories`)
    const data = await response.json();
    return data;
})

const categorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        setCategorySelection:(state,action)=>{
            state.categorySelection=action.payload;
        },
        toggleShowCategory:(state)=>{
            state.showCategory=!state.showCategory
        }
    },
    extraReducers:builder=>{
        builder.addCase(fetchAsyncCategories.pending,(state,action)=>{
            state.categoriesStatus = STATUS.LOADING
        }),
        builder.addCase(fetchAsyncCategories.fulfilled,(state,action)=>{
            state.categories = action.payload;
            state.categoriesStatus = STATUS.SUCCEEDED;
        }),
        builder.addCase(fetchAsyncCategories.rejected,(state,action)=>{
            state.categoriesStatus = STATUS.FAILED;
        })
    }
})


export default categorySlice.reducer
export const getAllCategories = (state)=>state.category.categories;
export const getSelectedCategory = (state)=>state.category.categorySelection;
export const getShowCategory = (state)=>state.category.showCategory;
export const {setCategorySelection , toggleShowCategory} = categorySlice.actions 

// categoryProducts:[],
// categoryProductsStatus:STATUS.IDLE