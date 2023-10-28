import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';
import Foot from './Components/Foot';
import Home from './Components/Home';
import Login from './Components/Login';
import Navigationbar from './Components/Navigationbar';
import User from './Components/Orderstatus';
import Register from './Components/Register';
import Shop from './Components/Shop';
import './Components/Styles.css';
import Update from './Components/Update';
import Logout from './Components/Logout';
import ProductTile from './Components/ProductTile';
import ProductAddPage from './Components/AddProduct';
function App() {

  return (


    <div>


      <Router>


        <Navigationbar />

        <Routes>
          <Route  path='/' element={<Home />}></Route>
          <Route  path='/home' element={<Home />}></Route>
          <Route  path='/shop' element={<Shop />}></Route>
          <Route  path='/about' element={<About />}></Route>
          <Route  path='/login' element={<Login />}></Route>
          <Route  path='/cart' element={<Cart />}></Route>
          <Route  path='/dashboard' element={<Dashboard />}></Route>
          <Route  path='/register' element={<Register />}></Route>
          <Route  path='/login' element={<Login />}></Route>
          <Route  path='/orderstatus' element={<User />}></Route>
          <Route  path='/update' element={<Update />}></Route>
          <Route  path='/logout' element={<Logout />}></Route>
          <Route  path='/product/:id' element={<ProductTile />}></Route>
          <Route  path='/new' element={<ProductAddPage />}></Route>
          <Route  path='/edit/:id' element={<ProductTile />}></Route>
          <Route  path='/delete/:id' element={<ProductTile />}></Route>
        </Routes>
        <Foot />

      </Router>
    </div>
  );
}

export default App;
