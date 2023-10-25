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
function App() {

  return (


    <div>


      <Router>


        <Navigationbar />

        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/Home' element={<Home />}></Route>
          <Route exact path='/Shop' element={<Shop />}></Route>
          <Route exact path='/About' element={<About />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/Cart' element={<Cart />}></Route>
          <Route exact path='/Dashboard' element={<Dashboard />}></Route>
          <Route exact path='/Register' element={<Register />}></Route>
          <Route exact path='/Login' element={<Login />}></Route>
          <Route exact path='/Orderstatus' element={<User />}></Route>
          <Route exact path='/Update' element={<Update />}></Route>


        </Routes>
        <Foot />

      </Router>
    </div>
  );
}

export default App;
