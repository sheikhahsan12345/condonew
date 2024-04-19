import React from "react";
import {Row , Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const Testimonail = () =>{
    const responsive1 = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

 return(

   <>
   <div className="testimonailsec">
    <Container>
        <Row>
            <Col sm={12} md={12} lg={12} xl={12} xxl={12}>
                <div className="testimonailtext">
                    <h2>Client Testimonials</h2>
                </div>

                <Carousel infinite={true} autoPlay={false} arrows={true}   autoPlaySpeed={2000} responsive={responsive1}>
                   <div className="testimonailbox">
                     <p>The vision for my online business was purely dictated by the market competition. It was tough to keep pace with the competition in the e-commerce industry. The Design vertix transformed my vision into a reality while working under tight deadlines around my schedule. During my project's later stages, the team went above and beyond to incorporate my new design ideas. I will recommend anyone in the e-commerce business use their services to generate more revenue quickly.</p>
                     <h6>VGC Group, Arthur A. Dalton</h6>
                   </div>
                   <div className="testimonailbox">
                     <p>The Design vertix helped me design a one-of-kind travel site pricing package that was itinerary specific and transparent! It was a pleasure working with the team. Excellent service, top-quality web design results, great price, and a group of young and talented people. The perfect match! And yes, my clients love the new pricing system!</p>
                     <h6>Sean J. Walker, Project Owner</h6>
                   </div>
                   <div className="testimonailbox">
                     <p>Very satisfied with the finished product. TheDesign vertix delivered as promised. To the point and spot on. Good experience. Definitely recommended.</p>
                     <h6>Samantha King, Project Owner</h6>
                   </div>
                </Carousel>
            </Col>
        </Row>
    </Container>
   </div>
   </>  


 )

}



export default Testimonail;