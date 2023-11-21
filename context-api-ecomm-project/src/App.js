import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <h1>E-Comm Project</h1>
      <Item name="MacBook pro" price={100000}/>
      <Item name="Pen Drive" price={6000}/>
      <Item name="Mobile" price={35000}/>
      <Cart/>
    </div>
  );
}

export default App;
