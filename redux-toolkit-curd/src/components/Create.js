import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (Event) => {
    Event.preventDefault();
    dispatch(addUser({id: users[users.length-1].id+1, name, email}))
    navigate('/')
  } 
// console.log(handleSubmit);
  return (
    <div className='d-flex w-100 justify-content-center align-items-center p-5 m-5'>
      <div className='w-50 border bg-secondary text-white p-5'>
        <h3>Add New User</h3>
        <form action={handleSubmit}>
          <div>
            <label htmlFor="name">name:</label>
            <input type="text" name='name' className='form-control' onChange={(e)=>setName(e.target.value)} placeholder='enter name'/>
          </div>
          <div>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control' onChange={(e)=>setEmail(e.target.value)} placeholder='enter email'/>
          </div><br />
        <button className='btn btn-info' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
