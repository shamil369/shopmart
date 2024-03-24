import {createSlice } from '@reduxjs/toolkit'

const initialState = {
    user:undefined
  };


  const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload;
        },
        removeUser:(state,action)=>{
            state.user = undefined;
        }
    }
  })

export default userSlice.reducer
export const {setUser,removeUser} = userSlice.actions;