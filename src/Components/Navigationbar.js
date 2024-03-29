import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Logout from './Logout';

import './Styles.css';

export default function Navigationbar() {
  const location = useLocation();
  const name = sessionStorage.getItem("user");
  const [user, setName] = useState(name ? name : null);



  // Hide navbar on the login page and Login page
  if (location.pathname == "/login" || location.pathname == "/register") {
    return null;
  }


  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand style={{ color: '#FFFFFF' }} href="/home" className='logo'>Expert Mobile</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='Links' style={{ color: '#FFFFFF' }} href="/home">Home</Nav.Link>
              <Nav.Link className='Links' style={{ color: '#FFFFFF' }} href="/shop">Shop</Nav.Link>
              <Nav.Link className='Links' style={{ color: '#FFFFFF' }} href="/about">About</Nav.Link>
            </Nav>

            {/* Add user dropdown menu with custom CSS */}
            <Dropdown align="end" style={{ marginLeft: '0px' }}>
              <Dropdown.Toggle variant="secondary" id="user-dropdown">
                {user == null ? (<div>{'User'}</div>) : (<div>{user}</div>)}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {user == null ? (
                  <React.Fragment>
                    <Dropdown.Item href="/login">Login</Dropdown.Item>
                    <Dropdown.Item href="/register">Register</Dropdown.Item>
                  </React.Fragment>
                ) :
                  (
                    <React.Fragment>
                      <Dropdown.Item href="/orderstatus">Check Orders</Dropdown.Item>
                      <Dropdown.Item href="/update">Change Password</Dropdown.Item>
                      <Dropdown.Item href="/logout" onClick={Logout}>Log out</Dropdown.Item>

                    </React.Fragment>)}
              </Dropdown.Menu>
            </Dropdown>

            {user != 'admin'?(
              <a href='/cart'>
                <img
                  className='cart'
                  src="https://th.bing.com/th/id/R.22a468f2a23252fe251834f6fa559645?rik=NMt%2fVFuJ%2fdJV2A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f06%2fshopping-cart-icon-white_235863.png&ehk=iOQPHRjP2Yr4csqVdX6Bs7D8GFTrr2r9icBq9odkO7I%3d&risl=&pid=ImgRaw&r=0"
                  alt="Shopping Cart"
                />
              </a>
            ) :
              (
                <Dropdown align="end" style={{ marginLeft: '10px' }}>
                  <Dropdown.Toggle variant="secondary" id="user-dropdown">
                    <img src='./tool-icon.svg' style={{width: '20px'}}></img>
                       Tools
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                  <Dropdown.Item href="/new">Add new device</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )
            }


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
