// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import signUpSlice from './signUpSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    signUp: signUpSlice,
  },
});

export default store;
