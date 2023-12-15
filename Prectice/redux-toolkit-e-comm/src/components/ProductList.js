import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../store/productSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  console.log("data1", data)

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

<>
            <h1 className='pr-heading'>Products</h1>
        <div className='products-list'>
            <input className='search-product' type="search" placeholder='Search Product here....'  /><span></span>
            <ul>
                <li>S.NO.</li>
                <li>NAME</li>
                <li>PRICE</li>
                <li>CATEGORY</li>
                <li>COMPANY</li>
                <li>OPRATION</li>
            </ul><hr />
            {
            data.length>0 ? data.map((item, index) => (
                <ul key={item._id}>
                <li>{index + 1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><span><Link to={`/update/${item._id}`}>Edit</Link>
                <Link to={`/delete/${item._id}`}>Delete</Link></span>
                </li>
                {/* <li>
                    <button onClick={() => deleteProduct(item._id)}>Delete</button>
                    <span><Link to={"/update/"+item._id}>Update</Link>
                    <Link to={"/view/"+item._id}>View</Link></span>
                </li> */}
                </ul>
            ))
            : <h1>No result found</h1>
            }
        </div>
    </>


  );
};

export default ProductList;
