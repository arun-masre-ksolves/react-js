import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/slice/userSlice';


function Displayuser() {

    const dispatch = useDispatch();

    const data = useSelector((state)=> {
        return state.users;
    })
    console.log("new data1",data)

    const deleteUser = (id)=> {
        dispatch(removeUser(id))
    }


  return (
    <div>
      {data.map((item, id)=> 
    //   <li key={id}>{item.name} {"--"} {item.age} {"--"} {item.email}
        <li key={id}> {item.category}
      <button onClick={()=> deleteUser(id)}>delete</button>
      </li>
    )}
    </div>
  );
}

export default Displayuser;
