import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, PRODUCT_SEARCH, SET_PRODUCT_LIST } from "./constant";

function* getProducts(){
    let data = yield fetch ("http://localhost:3500/product");
    data = yield data.json();
    // console.log("action called", data);
    yield put({type:SET_PRODUCT_LIST, data})
}

function* searchProduct(data){
    let result = yield fetch (`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    // console.log("action called for search", data);
    yield put({type:SET_PRODUCT_LIST, data:result})
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(PRODUCT_SEARCH, searchProduct)
}

export default productSaga;