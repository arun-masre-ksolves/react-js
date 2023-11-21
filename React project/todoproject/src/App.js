import "./App.css";
import TodoInput from "./Component/TodoInput";
import { useState } from "react";
import TodoList from "./Component/TodoList";

function App() {
  const[listTodo, setListTodo] = useState([]);

  let addlist = (inputValue)=> {
    setListTodo([...listTodo, inputValue])
  }

  let deleteListData = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addlist={addlist} />
        <h1 className="app-heading">TODO</h1><hr />
        {
          listTodo.map((listItem,i)=>{
            return (
              <TodoList key={i} index={i} item={listItem} deleteListData={deleteListData}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
