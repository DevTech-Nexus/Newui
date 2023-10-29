import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



function ProductTile() {

  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const [cart, setCart] = useState(sessionStorage.getItem("cart") || []);

  const [info, setInfo] = useState({
    success: ''
  });

  const getInfo = async () => {
    try {
      const response = await fetch(`http://localhost:8081/products/${id}`);
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  const addToCart = async () => {
    product.stock_Quantity--;

    //update product controller too
    const update = await fetch(`http://localhost:8081/products/decrement/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    });

    let cart = sessionStorage.getItem("cart");
    let uniqId = sessionStorage.getItem("uniqId");
    if (uniqId === null) {
      uniqId = 0;
      sessionStorage.setItem("uniqId", uniqId);
    }
    if (cart === null) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    cart.push({
      uniqId: uniqId,
      id: product.id,
      productName: product.productName,
      brand: product.brand,
      weight: product.weight,
      dimensions: product.dimensions,
      description: product.description,
      imgUrl: product.imgUrl,
      price: product.price,
      stock_Quantity: product.stock_Quantity

    });
    uniqId++;
    sessionStorage.setItem("uniqId", uniqId);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setInfo({ success: 'Added to cart' });
    console.log(cart);


  }

  useEffect(() => {
    getInfo();
  }, []);

  return (

    <MDBContainer fluid><br></br><br></br><br></br>
      <br /><br />
      <MDBRow className="justify-content-center mb-0">
        <MDBCol md="8" className="ps-md-5">
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image rounded hover-zoom hover-overlay"
          >
            <MDBCardImage
              src={product.imgUrl}
              fluid
              className="w-100"
            />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              />
            </a>
          </MDBRipple>
        </MDBCol><br></br>
        <MDBCol md="4" className="pe-md-5">
          <h1>{product.productName}</h1>
          <div className="d-flex flex-row">
          </div>
          <div className="mt-1 mb-0 text-muted medium">
            <span>{product.brand}</span>
            <span className="text-primary"> • </span>
            <span>{product.weight} kg</span>
            <span className="text-primary"> • </span>
            <span>
              {product.dimensions}
              <br />
            </span>
          </div>
          <br />
          <p className="text-truncate mb-4 mb-md-0">
            {product.description}
          </p>
          <div className="d-flex flex-row align-items-center mb-1">
            <h2 className="mb- me-1">{product.price}</h2>
            <span className="text-muted small">USD</span>


          </div>
          <br />
          <h5> Stock: {product.stock_Quantity}</h5>

          <br />
          <div className="d-flex flex-column mt-4">

            {product.stock_Quantity > 0 ? (
              <MDBBtn outline color="primary" size="lg" className="mt-2" onClick={addToCart}>
                Add to cart
              </MDBBtn>
            ) : (
              <MDBBtn outline color="seconcary" size="lg" className="mt-2">
                Out of Stock
              </MDBBtn>

            )
            }
            {info.success && <div style={{ color: "blue", textAlign: "right" }}>{info.success}</div>}
          </div>
        </MDBCol>


      </MDBRow><br></br>
    </MDBContainer>
  );
}

export default ProductTile;
