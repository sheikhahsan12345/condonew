import React from "react";
import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row,Col, FormGroup } from "react-bootstrap";
import 'font-awesome/css/font-awesome.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Appnavbar =()=>{

  const [show,setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    setIsScrolled(scroll >= 100);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

return(

<>
 <header className={isScrolled ? 'scroll' : ''}>
 <Container fluid>
 <Row className="align-items-center">
 <Col xs={9}> 
<Navbar expand="lg">
        <Navbar.Brand href="/">Website Boulevard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Portfolio</Nav.Link>
            <Nav.Link href="#">Packages</Nav.Link>
            <Nav.Link href="#">Technolgies</Nav.Link>
            <Nav.Link href="#">Industries</Nav.Link>
            <Nav.Link href="#">Solutions</Nav.Link>
          </Nav>
        </Navbar.Collapse>    
    </Navbar>
    </Col>
    <Col xs={3}>
       <Nav>
       <Nav.Link href="#"><i className="fa fa-phone" aria-hidden="true"></i>(123)567-890</Nav.Link>
       <Button  onClick={handleShow} className="navbtn">Logo In</Button>
       </Nav> 
    </Col>
    </Row>
    </Container>
    </header>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton> 
          <Modal.Title>Logo In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form method="POST">
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
          </FormGroup>
         </Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        
        </Modal.Footer>
      </Modal>
</>

);


};


export default Appnavbar;