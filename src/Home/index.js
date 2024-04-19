import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Appnavbar from "../Components/Appnavbar";
import '../Assets/CustomStyles/index.css';
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import img1 from '../images/header-image-01.png';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from '../images/logo/partner1.png';
import logo2 from '../images/logo/partner2.png'; 
import logo3 from '../images/logo/partner3.png'; 
import logo4 from '../images/logo/partner5.png';
import logo5 from '../images/logo/partner6.png';
import logo6 from '../images/logo/SEM-rush-badge.png';
import logo7 from '../images/logo/white-rect.png';
import img2 from '../images/creative-mind.jpg';   
import img3 from '../images/3rd-Image.jpg';
import icon1 from '../images/home-1.png';
import icon2 from '../images/home-2.png';   
import icon3 from '../images/home-3.png';      
import Portfolio from "../Components/Portfolio";
import Services from "../Components/Services";
import Packages from "../Components/Packages";
import Testimonail from "../Components/Testimonail";
import Cta from "../Components/Cta";
import Forms from '../Components/Forms';
import Footer from "../Footer";





const Home = ()=>{

const SliderImages = [logo1 ,logo2 ,logo3 ,logo4,logo5,logo6,logo7];    
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
return(

<>

<Appnavbar/>

<div className="herohome">
 <Container>
   <Row className="align-items-center">
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
      <div className="herotext">
       <h1>BRAND.DESIGN PRODUCT. IN-HOUSE DEVELOPMENT & MORE</h1>
       <p>Responsive Design vertix Company Bringing Impactful Digital Strategies!</p>
        <span className="title--underline">Data-Driven Strategies
        
        </span>
        </div>
    </Col>
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
      <div className="herotext_img">
       <img src={img1}  className="img-fluid" alt="img"/>
      </div>
    </Col>
   </Row>
     <div className="achevmentsec pt-5">
       <Row>
         <Col sm={12} xs={12} md={12} lg={12} xl={12}>
            <div className="achevmenttext">
             <h2>Achievements and Awards</h2>
              {

                <Carousel infinite={true} autoPlay={true} arrows={false}   autoPlaySpeed={2000} responsive={responsive}>
              {
                SliderImages.map((value,index)=>{
                 return(

                  <div key={index} className="logobox">
                    <img src={value} className="img-fluid" alt="img"/>
                  </div>   


                 )


                })
              }

              </Carousel>
              }
            </div>
         </Col>
       </Row>
     </div>
 </Container>
</div>

<div className="websitesec">
<Container>
    <Row className="align-items-center">
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
        <div className="websditeimg">
         <img src={img2} className="img-fluid" alt="img"/>
        </div>
    </Col>
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
        <div className="websitetext">
          <h2>Building Websites For Years</h2>
          <p>Website Boulevard can turn brilliant ideas into working realities for you! Using industry-wide experience, we push our limits to deliver stunning websites aligned with your brand identity. Let us align your business needs with your end-user persona to gain maximum reach today.</p>
          <p>Website Boulevard delivers custom website solutions to expand your business reach! Additionally, our strategists focus on tailor-made way-out to make your brand competitive in every possible manner. More significantly, our digital professionals patiently hear you out, analyze your brand data and research your clientele in order to offer flawless digital services including Web design & development, Digital marketing, website applications, e-commerce development, animations and others.</p>
        </div>
    </Col>
    </Row>
    <Row className="align-items-center pt-5">
    
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
        <div className="websitetext">
         <ul>
            <li>
            <div className="icon">
            <img src={icon1} className="img-fluid" alt="img" />
            </div>
                <h4>DISCOVER YOUR BUSINESS POTENTIAL</h4>
                <p>Leverage digital technologies and strategies to unlock your business potential.</p>
            </li>
            <li>
            <div className="icon">
            <img src={icon2} className="img-fluid" alt="img" />
            </div>
                <h4>ENVISION YOUR LONG-TERM SUCCESS</h4>
                <p>Deliver seamless user experience and navigation using digital innovation</p>
            </li>
            <li>
            <div className="icon">
            <img src={icon3} className="img-fluid" alt="img" /></div>
                <h4>STRONG DIGITAL FOUNDATIONS FOR YOU</h4>
                <p>Connect with a responsive web design agency – unlock your business potential.</p>
            </li>
         </ul>
        </div>
    </Col>
    <Col sm={12} xs={12} md={6} lg={6} xl={6}>
        <div className="websditeimg">
         <img src={img3} className="img-fluid" alt="img"/>
          <p className="supporting-text step-up">We're more than just another <span>Digital Marketing Agency</span> Discover the Website Boulevard difference. 
            </p>
        </div>
    </Col>
    </Row>
</Container>
</div>

<Portfolio></Portfolio>
<Services></Services>
<Packages></Packages>
<Testimonail></Testimonail>
<Cta></Cta>
<Forms></Forms>
<Footer></Footer>



</>


)



};






export default Home;
