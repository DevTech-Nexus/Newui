import React from "react";
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { Fade } from "react-awesome-reveal";

import './Styles.css';


export default function Home() {


  return (
    <div>
      <br></br>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh'}}
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-model-unselect-gallery-1-202309?wid=5120&amp;hei=2880&amp;fmt=p-jpg&amp;qlt=80&amp;.v=1692810665888"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Expert Mobile</h5>
            <p>The best place for awesome offers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh'}}
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>New Arrival </h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: '100vh', objectFit: 'fill'}}
            src="https://images.unsplash.com/photo-1585399000684-d2f72660f092?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5></h5>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div><br></br>
        <Image src="https://i.postimg.cc/D0qXJv7v/Screenshot-2023-10-09-120135.png" fluid height={'100%'} width={'100%'} />;

        <br></br>
        <Container>
          <Row>
            <Col sm lg="8" style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.01))' }}><Fade right><Image src="https://images.samsung.com/us/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-kv-a.jpg?imbypass=true" fluid className="img" />
            </Fade></Col>
            <Col sm lg="3 " ><p className="sub1">Galaxy Z Fold5</p><br>
            </br> <p className="sub2">Unfold an immersive entertainment experience with a massive 7.6" screen.
              Get a free storage upgrade with select Galaxy Z Fold5. Enjoy 512GB at the price of 256GB.ΩK Plus, get up to $1,200 instant trade-in credit.θ
              </p>
              <br></br>

            </Col>
          </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container>
          <Row className="justify-content-md-center">
            <Col sm lg="5"><p className="sub1">Designed to be <br></br>durable</p><p className="sub2">
              With Corning® Gorilla® Glass Victus® 2 on the Front and Back glass and a frame forged from the most
              durable Armor Aluminum ever put on a Samsung Galaxy smartphone, this design is as functional as it is fabulous. Plus, Galaxy S23
              and S23+ come with an IP68 rating for dust and water resistance.

              *Back glass does not include camera glass. Frame does not include volume and side keys or SIM tray.
              *Galaxy S23, S23+ and S23 Ultra are rated as IP68. Based on lab test conditions for submersion in up to
              1.5 meters of freshwater for up to 30 minutes. Not advised for beach or pool use. Water and dust resistance of device
              is not permanent and may diminish over time because of normal wear and tear.
            </p></Col>
            <Col sm lg="5">  <Fade right><Image src="https://i.ibb.co/WV5NkQr/htyjyuj.png" fluid /></Fade></Col>
          </Row></Container><br></br>









        <Container>
          <Row>
            <br></br>
            <br></br>
            <center>
                <a href="/shop"><Button variant="primary" size="lg" style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }} className="custom-button">
                  Head to the shop
                </Button>{' '}
                </a></center>
          </Row>

        </Container>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>



  )
}




