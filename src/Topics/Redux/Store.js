import { configureStore } from "@reduxjs/toolkit";
import MianSlices from "./Slices";

export const MyStore = configureStore({
   reducer:{
      MainStore : MianSlices.reducer
   }
})