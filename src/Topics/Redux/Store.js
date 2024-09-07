import { configureStore } from "@reduxjs/toolkit";
import MainSlices from "./Slices"; // Corrected 'MianSlices' to 'MainSlices'
import { newApi } from "../Rtk/Service";

export const MyStore = configureStore({
   reducer: {
      MainStore: MainSlices.reducer, // Corrected 'MianSlices' to 'MainSlices'
      [newApi.reducerPath]: newApi.reducer
   },
   middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(newApi.middleware),
});
