import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name:"Narendra",
   age:25,
   value:0
}

const MianSlices = createSlice({
   name:'Main',
   initialState,
   reducers:{
      increment:(state)=>{
         state.value += 1 
      },
      decrement : (state) =>{
         state.value -= 1 
      }
   }
})

export const {increment,decrement} = MianSlices.actions;
export default MianSlices