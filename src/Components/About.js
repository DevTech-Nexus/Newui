import React from "react";
import Image from 'react-bootstrap/Image';

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea
} from "mdb-react-ui-kit";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function About (){

    return(
<div ><br></br><br></br>

<Image src="https://idealz.lk/wp-content/uploads/2021/01/Why-iDealz.jpg" fluid className="img2"  />
<h1 class="responsive-text">Expert Mobile pvt.ltd</h1>
<p class="responsive-text2">From a small store in Kirulappona, iDealz Lanka started with a big ambition to bring mobile phones to the masses. To provide simple, impartial advice on all the phones and networks available and help customers to find the right phone for them. As we have grown to become a large company with stores. To help our customers get the most out of their technology and guide them through the ever increasing connected world! 
</p>
<br></br>

<Container>
<Row className="justify-content-md-center">
        <Col sm lg="12"><p className="sub1">World Mobile Congress</p><p className="sub2">
        MWC Barcelona is the world’s most influential exhibition for the connectivity industry. In 2019, up to 2,400 exhibitors, 8,000 CEOs and 59% of the industries’ most important decision makers gathered here. It’s the place where you can make remarkable connections with everyone who’s anyone – all under one roof. And we at iDealz were a part of it representing the Mobile trade in Sri Lanka


 </p></Col>
 
</Row></Container>

<Container>
<Row className="justify-content-md-center">
        <Col sm lg="12"><p className="sub1">Facebook Verified Page</p><p className="sub2">
        Yes iDealz Lanka is a verified page by Facebook in Sri Lanka with 261,781 genuine followers and counting!

According to Facebook (https://www.facebook.com/help/196050490547892)

“If you see a verified badge on a Page or profile, it means that Facebook confirmed that this is the authentic Page or profile for this public figure, media company or brand.

Keep in mind that verified badges are for well-known, often searched Pages and profiles. Not all public figures, celebrities and brands on Facebook have a verified badge.”

Note: It’s not possible to purchase a verified badge.

A verified page helps the customer to distinguish the authentic page from the other fake pages which scammers use to fool the innocent. We request our customers to check for the ‘blue tick badge’ on the page to verify if its the authentic page of iDealz Lanka.


 </p></Col>
 
</Row></Container>





</div>

    )
}
