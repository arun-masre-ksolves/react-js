import {addToCart, emptyCart} from '../redux/action'
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  console.log("data in main Component in Saga", data)

  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div className="App">
      <button className='empty-cart' onClick={()=>dispatch(emptyCart(data))}>Empty Cart</button>
    <div className='product_container'>
      {
        data.map((item)=><div key={item.id} className='product-item'>
          <img src={item.image} alt="" />
          <div>Name : {item.name} </div>
          <div>Color : {item.color} </div>
          <div>Price : {item.price} </div>
          <div>Category : {item.category} </div>
          <div>Brand : {item.brand} </div>
          <div className='add-to-cart-btn'><button onClick={()=>dispatch(addToCart(item))}>Add To Cart</button>
          </div>
        </div>)
      }
    </div>
    </div>
  );
}

export default Main;
