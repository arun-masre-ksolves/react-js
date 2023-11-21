import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      <table border={1}>
          <tbody>
            <tr>
              <th>Id</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
            {state.todo.data && state.todo.data.map((e, i) => (
              <tr key={i}>
                <td>{e.id}</td>
                <td>{e.userId}</td>
                <td>{e.title}</td>
                <td>{e.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>

   
      
  );
}

export default App;
