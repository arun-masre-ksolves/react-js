import React, {useContext} from 'react';
import { cartContext } from '../Context/Cart'; 

function Cart() {
    const cart = useContext(cartContext);
    const total = cart.items.reduce((a, b)=> a + b.price, 0)
  return (
    <div className='cart'>
        <h2>Cart</h2>
      {
        cart && cart.items.map((item, i) => <li key={i}>{item.name} - {item.price}</li>)
      }

      <h5>Total Bill: $ {total}</h5>
    </div>
  );
}

export default Cart;
