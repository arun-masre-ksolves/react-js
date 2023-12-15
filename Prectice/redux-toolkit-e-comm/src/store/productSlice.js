import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom';

const params = useParams();

// Async function to fetch products
export const fetchProductsAsync = createAsyncThunk('fetchProducts',async (__, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());

    let result = await fetch("http://127.0.0.1:3004/products");
    result = await result.json();
      dispatch(setProducts(result));
    }
    
    catch (error) {
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    }
  }
);

export const UpdateProductData = createAsyncThunk('UpdateProductData',async (products, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setLoading());

    let result = await fetch(`http://127.0.0.1:3004/products/${params.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
    });
    const response = await result.json();
      dispatch(setProducts(response));
    }
    
    catch (error) {
      dispatch(setError(error.message));
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
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
    }
  },
    extraReducers: (builder) => {
        builder.addCase(UpdateProductData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(UpdateProductData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = state.products.map((ele) =>
            ele.id === action.payload.id ? action.payload : ele 
        )});
        builder.addCase(UpdateProductData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        });
    },
});

// Export actions and reducer
export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
