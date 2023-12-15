import './App.css';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Nav from './components/Nav';
import Footer from './components/Footer';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Nav/>
      <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/signUp" element={<Register/>}/>
          <Route path='/update' element={<UpdateProduct/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
