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

export default function CartCheckout() {

  const [products, setProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [errors, setErrors] = useState({
    address: '',
    city: ''
  });

  const [address, setAddress] = useState('');

  const cart = JSON.parse(sessionStorage.getItem("cart"));
  console.log(cart);

  //calculate total price
  var totalPrice = 0;

  if (cart !== null) {
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
  }

  useEffect(() => {
  setTotal(totalPrice.toFixed(2));
  }, []);

  var extractedProducts = [];
  if (cart != null) {
    //separate each item into an array
    extractedProducts = cart.map(product => {
      return ({
        uniqId: product.uniqId,
        number: product.id,
        productName: product.productName,
        stockQuantity: product.stock_Quantity,
        imgUrl: product.imgUrl,
        price: product.price
      });
    });
  }

  const removeFromCart = (id) => {
    //find item and then remove it
    console.log("id:" + id)
    console.log("hit");
    let newCart = cart.filter(product => product.uniqId !== id);
    sessionStorage.setItem("cart", JSON.stringify(newCart));
    console.log(newCart);

    setProducts(newCart);

    window.location.reload();
    
  }

  const getDeliveryFee = async () => {
      //talk to delivery and get distance to location
      const response = await fetch("http://localhost:8083/deliveries/route?" + {address})
  }

  const checkout = async () => {
      //only allow  if logged in
      if(sessionStorage.getItem("user") != null) {
        
      }
      else {
        window.location.href = '/login';

      }
  }

  const handleInputChange = () => {
    
  }

  useEffect(() => {
    setProducts(extractedProducts);
    setTotal(totalPrice);
    console.log("products" + products);
    console.log("total:" + totalPrice);

  }, []);


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


                    {extractedProducts && extractedProducts.map(product => (
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            src={product.imgUrl}
                            fluid
                            style={{ width: "150px" }}
                            alt="Generic placeholder image"
                          />
                        </div>


                        <div className="flex-grow-1 ms-3">

                          <MDBTypography tag="h5" className="text-primary">
                            {product.productName}
                          </MDBTypography>
                          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                            {product.brand}
                          </MDBTypography>

                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">{product.price}</p>
                          </div>

                          <Button variant="tertiary" onClick={() => removeFromCart(product.uniqId)}> remove </Button>

                        </div>
                      </div>
                    ))}

                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>


                    <center>

                      <form>
                      <MDBTypography
                      tag="h5"
                      className="mb-5 pt-2 text-center"
                    >
                      Delivery information
                    </MDBTypography>

                        <MDBInput
                          label="Address"
                          id="address"
                          type="text"
                          className="form-control"
                          value={address}
                          onChange={handleInputChange}
                          required
                        />
                      </form>

                      <br />
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total: USD {total} with delivery
                      </MDBTypography>
                      <br/>

                      <MDBTypography tag="h6" className="fw-muted mb-0">
                        Deliveries take 3 - 5 business days
                      </MDBTypography>
                      <br />


                      <Button variant="primary" size="lg" 
                      style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }} 
                      className="custom-button">
                        Checkout With PayPal <img src="./paypal-icon.svg" style={{ width: '20px' }} />
                      </Button>{' '}<br></br><br></br>
                      <a href="/shop">
                      <Button variant="secondary" size="lg">
                        Keep shopping
                      </Button>{' '}</a>
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
                    