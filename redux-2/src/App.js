import './App.css';
import Counter from './Components/count';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>React Redux</h1><hr />
      <button onClick={(e)=>dispatch({type: "INCREMENT"})}>Increament</button>
      <Counter/>
      <button onClick={(e)=>dispatch({type: "DECREMENT"})}>Decreament</button>
    </div>
  );
}

export default App;
