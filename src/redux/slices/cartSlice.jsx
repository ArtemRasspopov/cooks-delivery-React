import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
  personsCount: 1,
};

export const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice += action.payload.finalPrice;
      state.totalQuantity += action.payload.quantity;
    },
    personsCountReduce: (state, action) => {
      const id = action.payload;
      state.products[id].quantity--;
      state.products[id].finalPrice -= state.products[id].productData.Price;
      state.totalPrice -= state.products[id].productData.Price;
      state.totalQuantity--;
    },
    personsCountAdd: (state, action) => {
      const id = action.payload;
      state.products[id].quantity++;
      state.products[id].finalPrice += state.products[id].productData.Price;
      state.totalPrice += state.products[id].productData.Price;
      state.totalQuantity++;
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.productData.Title !== action.payload.title
      );
      console.log(action.payload.price, action.payload.quantity)
      state.totalPrice = state.totalPrice - action.payload.price
      state.totalQuantity = state.totalQuantity - action.payload.quantity
    },
    removeAll: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      state.personsCount = 1;
    },
  },
});

export const {
  setProducts,
  personsCountReduce,
  personsCountAdd,
  removeProduct,
  removeAll
} = cartSlice.actions;

export default cartSlice.reducer;
