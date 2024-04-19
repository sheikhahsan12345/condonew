import React from "react";
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';







const Cta = ()=>{

return(
   <>
    
    <div className="ctasec">
     <Container>
        <Row>
            <Col sm={12} md={12} xl={12} col={12}>
              <div className="letstalktext">
                <h2>Let’s Talk Right Away</h2>
                <p>Collaborate with our digital design, development and marketing professionals to step-up financial performance of your brand.</p>
                <div className="btnlist">
                <button>Let's Talk</button>
                <a href="tel:+(123)567-890">(123)567-890</a>
                </div>
              </div>
            </Col>
        </Row>
     </Container>
    </div>
   
   </>
    )



}


export default Cta;