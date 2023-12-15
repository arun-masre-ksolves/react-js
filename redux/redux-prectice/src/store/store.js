import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";


const store = configureStore ({
    reducer: {
        todo: userSlice,
    }
})


export default store;