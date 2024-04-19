import React from "react";
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import FooterImage from '../images/_dmca_premi_badge_2.png';





const Footer = () =>{

return(

<>

<div className="footer">
<Container>
<Row>
    <Col sm={12} xs={12} md={4} lg={4} xl={4} xxl={4}>
      <div className="footerlogo">
       <h5>WEBSITE BOULEVARD</h5>
       <img src={FooterImage} className="img-fluid" alt="img" />
      </div> 
    </Col>

    <Col sm={12} xs={12} md={2} lg={2} xl={2} xxl={2}>
      <h4>QUICK LINKS</h4>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Our Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </Col>
    <Col sm={12} xs={12} md={2} lg={2} xl={2} xxl={2}>
      <h4>SERVICES</h4>
      <ul>
        <li><a href="#">Website Development</a></li>
        <li><a href="#">Ecommerce Solutions</a></li>
        <li><a href="#">Branding</a></li>
      </ul>
    </Col>
    <Col sm={12} xs={12} md={2} lg={2} xl={2} xxl={2}>
      <h4> &nbsp;</h4>
      <ul>
        <li><a href="#">Web Applications</a></li>
        <li><a href="#">Mobile Applications</a></li>
        <li><a href="#">Video Animations</a></li>
      </ul>
    </Col>
    <Col sm={12} xs={12} md={2} lg={2} xl={2} xxl={2}>
      <h4> ADDRESS</h4>
      <ul>
        <li><a href="#">(123)567-890</a></li>
      </ul>
    </Col>
</Row>


</Container>

</div>


</>


)



}


export default Footer;