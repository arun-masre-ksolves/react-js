import React, { useContext } from 'react';
import { cartContext } from '../Context/Cart';
function Item(props) {
    const cart = useContext(cartContext);
    console.log('cart', cart);
  return (
    <div>
      <h4>{props.name}</h4>
      <p>Price: ${props.price}</p>
      <button onClick={() => cart.setItems([...cart.items, {name: props.name, price: props.price}])}>Add to Cart</button>
    </div>
  );
}

export default Item;
