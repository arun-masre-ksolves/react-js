
import React from 'react';

function TodoList(props) {
  return (
    <div>
        <li className="list-item">
            {props.item}
      <span className='icons'>
      <i onClick={(e)=>{props.deleteListData(props.index)}} className="fa-solid fa-trash-can icon-delete"></i>
      </span>
      </li>
    </div>
  );
}

export default TodoList;
