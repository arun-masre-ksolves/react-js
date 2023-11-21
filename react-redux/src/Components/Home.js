import React from 'react';

function Home() {
  return (
    <div >
        <img className='img-add-cart' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT334f4FXHxNX-2ekYY_X6W_tr5gpKIluZPQg&usqp=CAU" alt="" />
      <h1>home component</h1>
      <div className="cart-wrapper componenet-wrapper new">
        <div className="img-wrapper item">
            <img src="https://website-static.testsigma.com/assets/mobile-testing/mobile-testing-testsigma.png" alt="" />
        </div>
        <div className="text-wrapper item">
            <span>I phone</span>
            <span>Price : ₹100000</span>
        </div>
        <div className="btn-wrapper item">
            <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
