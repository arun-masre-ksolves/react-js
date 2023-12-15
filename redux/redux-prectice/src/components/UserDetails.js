import React from 'react';
import { fetchApiData } from '../api/Getdata';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slice/userSlice';
import Displayuser from './Displayuser';

function UserDetails() {

  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  };
  console.log(fetchApiData())

  return (
    <div>
      <h1>users details list</h1>
      <ul>
         < Displayuser/>
      </ul> <hr />
      <button onClick={()=> addNewUser(fetchApiData())}>add new user</button>
    </div>
  );
}

export default UserDetails;
