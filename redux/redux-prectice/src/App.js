import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/slice/userSlice';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state.todo.data);

if (state.isLoading) {
  return <h1>Loading...</h1>
}

  return (
    <div className="App">
      <button onClick={(e)=> dispatch(fetchUsers())}>Fetch Users</button>
      {
        state.todo.data && state.todo.data.map((e) => (
        <li>{e.name}</li>))
      }
      
    </div>
  );
}

export default App;
