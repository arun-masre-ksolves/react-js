import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductSearch } from '../redux/productAction';

function Header() {
    const result = useSelector((state)=>state.cartData);
    const dispatch = useDispatch();
    console.log("redux data in header", result)
  return (
    <div className='header'>
      <Link to="/"><i><h1 className='header-logo'>Emart</h1></i></Link>
        <div className="search-box">
          <input type="search" onChange={(event)=>dispatch(ProductSearch(event.target.value))} placeholder='Search Product here......' />
        </div>
      <Link to="/cart" >
      <div className='cart-div'>
        <span className='cout'>{result.length}</span>
        <i className="cart-item"></i>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='cart-item-svg' viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
        {/* <img className='cart-item' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDu4WiffM6fQMbsjLK9XO6m7TWWnRd05vsnCsxSghstQ&s" alt="" /> */}
      </div> </Link>
    </div>
  );
}

export default Header;