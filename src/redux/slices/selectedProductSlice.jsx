import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: null,
  quantity: 0,
  additions: [],
  finalPrice: 0,
};

export const selectedProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
    setFinalPrice: (state, action) => {
      state.finalPrice = action.payload;
    },
    SetEdition: (state, action) => {
      if (state.additions.includes(action.payload.Title)) {
        state.additions = state.additions.filter(
          (item) => item !== action.payload.Title
        );
        state.finalPrice = state.finalPrice - action.payload.Price
      } else {
        state.additions.push(action.payload.Title);
        state.finalPrice = state.finalPrice + action.payload.Price
      }
    },
    clearStore : (state) => {
      state.productData = []
      state.quantity = 0
      state.additions = []
      state.finalPrice = 0
    }
  },
});

export const { setProductData, setQuantity, setFinalPrice, SetEdition, clearStore } =
  selectedProductSlice.actions;

export default selectedProductSlice.reducer;
