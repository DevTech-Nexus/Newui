import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from 'react-bootstrap/Button';
import './Styles.css';
import Cart from '../Models/CartObj.js';

export default function CartCheckout() {

  const [cart, setCart] = useState(sessionStorage.getItem("cart") );

  const [errors, setErrors] = useState({
    address: '',
    city: ''
  });

  console.log(cart);

  const getDeliveryFee = async () => {

  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your Items
                    </MDBTypography>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <MDBTypography tag="h5" className="text-primary">
                          Samsung Galaxy M11 64GB
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Color: white
                        </MDBTypography>

                        <div className="d-flex align-items-center">
                          <p className="fw-bold mb-0 me-5 pe-3">799$</p>

                          <div className="def-number-input number-input safari_only">
                            <button className="minus"></button>
                            <input
                              className="quantity fw-bold text-black"
                              min={0}
                              defaultValue={1}
                              type="number"
                            />
                            <button className="plus"></button>
                          </div>
                        </div>
                      </div>
                    </div>


                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >

                    </MDBTypography>


                    <center>

                      <form onSubmit={getDeliveryFee}>
                        <MDBInput
                          label="Address"
                          id="address"
                          type="text"
                          className="form-control"
                          required
                        />
                        <br />
                        <MDBInput
                          label="City"
                          id="city"
                          type="text"
                          className="form-control"
                          required
                        />

                      </form>

                      <br />
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total: 2261$
                      </MDBTypography>

                      <br />

                      <Button variant="primary" size="lg" style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }} className="custom-button">
                        Checkout With PayPal <img src="./paypal-icon.svg" style={{ width: '20px' }} />
                      </Button>{' '}<br></br><br></br>
                      <Button variant="secondary" size="lg">
                        Keep shopping
                      </Button>{' '}
                    </center>

                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}