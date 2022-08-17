import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "locations/fetchProducts",
  async (property) => {
    console.log(property)
    const res = await axios.get(
      `https://629703cc14e756fe3b26fb80.mockapi.io/products?sortBy=${property.activeSort}&Category=${property.category}&order=desc`
    );
    return res.data;
  }
);

const initialState = {
  productsList: [],
  status: "loading", // loading | success | error
  filter: 'Price',
  category: 'Все'
};

export const contentSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.status = "loading";
      state.productsList = [];
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "success";
      state.productsList = action.payload;
    },
    [fetchProducts.rejected]: (state) => {
      state.status = "error";
      state.productsList = [];
    },
  },
});

export const {setFilter, setCategory} = contentSlice.actions;

export default contentSlice.reducer;
