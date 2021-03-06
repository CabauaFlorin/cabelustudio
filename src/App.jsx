import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/productList' element={<ProductList/>}/>
        </Routes>
     </BrowserRouter>
  );
};

export default App;