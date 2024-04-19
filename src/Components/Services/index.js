import React from "react";
import '../../Assets/CustomStyles/index.css';
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import img5 from '../../images/website-development.svg';
import img6 from '../../images/ecommerce.svg'; 
import img7 from '../../images/web-application.svg';
import img8 from '../../images/branding.svg';
import img9 from '../../images/animation.svg';
import img10 from '../../images/mobile-application.svg';






const Services = ()=>{

 const ServicesList = [
  
  {
    Img:img5,
    title:"Website Development",
    para:" Web presence is necessary, for website allows brands opportunity to meet millions of web servers. In fact, business websites are crucial touch point of lead generation and sale closure.", 

  },
  {
    Img:img6,
    title:" Ecommerce ",
    para:"Our e-commerce website designers believe that vigorous e-commerce application is a bedrock of online retail sales. For this reason, TheDesign vertix experts strive relentlessly to give your online business unfailing e-commerce solutions.", 

  },
  {
    Img:img7,
    title:" Web Applications ",
    para:"Digital marketing is flawed without web applications. In fact, experience tells us that websites are necessary to capture online, or perhaps global, market share.", 

  },
  {
    Img:img8,
    title:"Branding",
    para:"Branding is mandatory for businesses, as it changes how target audience perceive your brand; it increases brand awareness, and ultimately drives sales", 

  }, 
  {
    Img:img9,
    title:"Animations",
    para:"The Design vertix recognizes the worth of video animation. The reason being it evokes customer interest and lead them to buy goods and services", 

  },
  {
    Img:img10,
    title:"Mobile Applications",
    para:"Mobile Apps are crucial in digital marketing world. They aid customer buying journey, customer experience and loyalty", 

  },       

 ];   

return(

<>
<div className="servciessec">
<Container>
  <Row>
   <Col sm={12} xs={12} md={12} lg={12} xl={12}>
    <div className="servicestext1">
     <h3>Services We offer</h3>
     </div>
       <div className="serviceslist section-specialty section-specialty--industries js-wp home-ser is-revealed">
        <ul className="section-specialty__list section-specialty__slider section-specialty__slider--industry">

        {
            ServicesList.map((value,index)=>{
             
             return(
            <li  key={index} className="section-specialty__item section-specialty__slide">
            <a href="web">
            <div className="specialty">
              <div className="specialty__icon">
                <img src={value.Img} className="attachment-thumbnail size-thumbnail" alt="img" height="48" width="48"/> 
              </div>
              <h3 className="specialty__title title">{value.title} </h3>
              <div className="specialty__content">
                <div className="text">
                {value.para}
                </div>
              </div>
            </div>
          </a>
        </li>

             )



            })
        }

       
        </ul>
       </div>
   
   </Col>


  </Row>


</Container>
</div>

</>


)



}


export default Services;