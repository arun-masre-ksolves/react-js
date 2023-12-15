import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateProductData } from '../store/productSlice';

const UpdateProduct = () => {
/*
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.products);
  console.log("data2", data)

  useEffect(() => {
    dispatch(updateData());
  }, [dispatch]);

*/

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState();

  const products  = useSelector((state) => state.products);
  console.log("state1", products)

  useEffect(() => {
    if (id) {
      const singleUser = products.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(UpdateProductData(updateData));
    navigate("/");
  };
  console.log("updated data", updateData);


  return (
    <div className="product">
            <h1 className="signup-heading">Update Product</h1>
            <form onSubmit={handleUpdate}>
                <input className="inputBox" type="text" placeholder="Enter Product Name" value={updateData && updateData.name} onChange={newData}/>
                <input className="inputBox" type="number" placeholder="Enter Product Price" value={updateData && updateData.price} onChange={newData}/>
                <input className="inputBox" type="text" placeholder="Enter Product Category" value={updateData && updateData.category} onChange={newData}/>
                <input className="inputBox" type="text" placeholder="Enter Product Company" value={updateData && updateData.company} onChange={newData}/>
                <button type='submit' className="Sign-up-btn">Update product</button>
            </form>
        </div>
  );
};

export default UpdateProduct;
