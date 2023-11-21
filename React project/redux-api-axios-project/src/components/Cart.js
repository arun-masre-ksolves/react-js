import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {removeFromCart} from '../redux/action'
import { useDispatch } from 'react-redux';
import { emptyCart} from '../redux/action'


function Cart() {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.productData);
  let amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next, 0);
  console.log("amount is ", amount);
  console.log("cart data ", cartData);
  return (
    <div>
        <button className='empty-cart' onClick={()=>dispatch(emptyCart(data))}>Empty Cart</button>
        <Link className="cart-page" to="/">
            <h1 className="cart-page list" >Product List</h1>
        </Link>
      <h1>cart page</h1>
      <div className="cart-page-container">
        <table className="cart-table">
          <thead className="t-head">
            <tr> 
              <th>Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Remove item</th>
            </tr>
          </thead>
          <tbody className="t-body">
            {cartData.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td className="remove-to-cart-btn"><button onClick={()=>dispatch(removeFromCart(item.id))}>Remove To Cart</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount:</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount/10}</span>
          </div>
          {/* <div className="adjust-price">
            <span>Tax</span>
            <span>0</span>
          </div> */}
          <hr/>
          <div className="adjust-price">
            <span>Total:</span>
            <span> &#x20B9; {amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
