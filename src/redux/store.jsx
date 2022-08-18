import { configureStore } from "@reduxjs/toolkit";
import contentSlice from "./slices/contentSlice";
import selectedProductSlice from "./slices/selectedProductSlice";

export const store = configureStore({
  reducer: { contentSlice, selectedProductSlice },
});
