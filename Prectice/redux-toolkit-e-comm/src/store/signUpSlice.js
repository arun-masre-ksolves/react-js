// src/store/productSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Async function to fetch products
export const registerUserAsync = createAsyncThunk("signUp/fetchProducts",async (data, { dispatch, rejectWithValue }) => {
    try {
      const result = await fetch("http://127.0.0.1:3004/register", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await result.json();
      console.log("response1", response);

      dispatch(setProducts(response));
    } catch (error) {
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    }
  }
);

// Create a Redux slice
const signUpSlice = createSlice({
  name: 'signUp',
  initialState: {
    data: 'hello',
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions and reducer
export const { setProducts, setLoading, setError } = signUpSlice.actions;
export default signUpSlice.reducer;
