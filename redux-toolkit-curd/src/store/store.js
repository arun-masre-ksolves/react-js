import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
// import signUpSlice from './signUpSlice';
import userReducer from './userReducer';

const store = configureStore({
  reducer: {
    users: userReducer, 
  },
});

export default store;
