import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Styles.css';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function Shop() {

  var [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://expertmobile-productservice.azurewebsites.net/products/');
      products = await response.json();
      console.log(products);
      setProducts(products);
    }
    catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {

    //get confirmation
    var result = window.confirm("Are you sure you want to delete this product?");
    if (result) {
      try {
        const response = await fetch(`https://expertmobile-productservice.azurewebsites.net/products/${id}`, {
          method: 'DELETE'
        });
        products = await response.json();
        console.log(products);
        setProducts(products);
      }
      catch (err) {
        console.log(err);
      }
      window.location.reload();
    }

    
    
  }

  useEffect(() => {
    getProducts(); // Call the function inside useEffect
  }, []);

  return (
    <div><br></br><br></br>
      <center>


        <MDBCarousel className='sizechanges' showIndicators showControls fade>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src='https://images.samsung.com/is/image/samsung/assets/in/2307/pcd/Galaxy-Z_Curation-KV_PCD_1440x640_pc.jpg?$1440_640_JPG$'
            alt='...'
          >
            <h2 className='responsive-text4' >Galaxy Z Fold5</h2>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src='//images.samsung.com/is/image/samsung/assets/in/2302/pcd/smartphones/PCD_Galaxy-S_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$'
            alt='...'
          >
            <h2 className='responsive-text5' >Galaxy S23 Ultra</h2>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src='https://images.samsung.com/is/image/samsung/assets/in/lime1440x640.jpg?imwidth=2560'
            alt='...'>
            <h2 className='responsive-text3' >Galaxy S23 in Lime</h2>

          </MDBCarouselItem>
        </MDBCarousel></center>
      <center><Image src="https://i.postimg.cc/QNqVvnYW/Screenshot-2023-10-09-102810.png" fluid /></center><br></br>


      <Container>
        <h2>Offers</h2><hr />
        <center><Row>

          {products.map(product => (

            <Card style={{ width: '15rem', margin: '20px' }}>
              <Card.Img variant="top" src={product.imgUrl} height={'320rem'} />
              <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                  USD {product.price}
                </Card.Text>

                <a href={'product/' + product.id}>
                  <Button variant="primary" size="lg" style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }} className="custom-button">
                    More Info
                  </Button>{' '}</a>

                {sessionStorage.getItem('user') == 'admin' &&
                  (
                    <React.Fragment>
                      <br />
                      <br />
                      {/* <a href={'edit/' + product.id}>
                        <Button variant="secondary" size="sm" >
                          Edit
                        </Button>{' '}</a> */}

                      <Button variant="secondary" size="sm" onClick={() => handleDelete(product.id)}>
                        Delete
                      </Button>
                    </React.Fragment>
                  )}
              </Card.Body>
            </Card>

          ))}
        </Row>
        </center>


      </Container>

    </div>

  );
}
