import { createStore, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import productSaga from "./productSaga";

const sagaMiddleware = createSagaMiddleware();

// For using createStore with middleware
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// If you want to use configureStore from @reduxjs/toolkit
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware]
// });

sagaMiddleware.run(productSaga);

export default store;




// import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import rootReducer from "./rootReducer";
// import productSaga from "./productSaga";
// import createSagaMiddleware from "redux-saga";

// const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(productSaga);
// export default store;
