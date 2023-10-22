import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Styles.css';


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function Shop (){
return(
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
        <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button6">
          Buy Now
        </Button>{' '}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='//images.samsung.com/is/image/samsung/assets/in/2302/pcd/smartphones/PCD_Galaxy-S_Curation-KV_1440x640_pc.jpg?$1440_640_JPG$'
        alt='...'
      >
        <h2 className='responsive-text5' >Galaxy S23 Ultra</h2>
        <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button6">
          Buy Now
        </Button>{' '}
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.samsung.com/is/image/samsung/assets/in/lime1440x640.jpg?imwidth=2560'
        alt='...'>
        <h2 className='responsive-text3' >Galaxy S23 in Lime</h2>
        <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button5">
          Buy Now
        </Button>{' '}
        
      </MDBCarouselItem>
    </MDBCarousel></center>
    <center><Image src="https://i.postimg.cc/QNqVvnYW/Screenshot-2023-10-09-102810.png" fluid />;</center><br></br>
    <Container><center>
      <Row>
        <Col auto={{ order: 'last' }}><Card style={{ width: '15rem'}}>
      <Card.Img variant="top" src="https://i.postimg.cc/43pb87x4/Screenshot-2023-10-09-111418.png" height={'320rem'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col auto><Card style={{ width: '15rem',height:'20rem' }}>
      <Card.Img fluid="top" src="https://i.postimg.cc/3w4zWRRg/ergete5.png"height={'320rem'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col auto={{ order: 'first' }}><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/SsN2WJXv/Screenshot-2023-10-09-111219.png"  height={'320rem'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
       
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
    <Col auto={{ order: 'first' }}><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/Hnr1LnmK/Screenshot-2023-10-09-111158.png" height={'320rem'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
      </Row><br></br>
      <Row>
        <Col auto={{ order: 'last' }}><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/1tNLxTKh/Screenshot-2023-10-09-111348.png" height={'320rem'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
        <Col auto><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/vZkhRm2T/Screenshot-2023-10-09-111329.png"  height={'320rem'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
    <Col auto><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/Hnr1LnmK/Screenshot-2023-10-09-111158.png" height={'320rem'}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
    <Col auto={{ order: 'first' }}><Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/Hnr1LnmK/Screenshot-2023-10-09-111158.png" height={'320rem'}  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
       <Button variant="primary" size="lg"  style={{ background: 'linear-gradient(to right, rgba(101, 126, 234, 0.9), rgba(118, 75, 162, 0.9))' }}  className="custom-button">
          Buy Now
        </Button>{' '}
      </Card.Body>
    </Card></Col>
      </Row></center>
    </Container>

</div>

    );
}
