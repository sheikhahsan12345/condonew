import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import axios from 'axios'; 

const Forms = () => {
      const [formData, setFormData] = useState('');
      const handleChange = (e) => {
         const { name, value, type } = e.target;
         if (type === 'file') {
           const file = e.target.files[0];
           setFormData((prevData) => ({
             ...prevData,
             [name]: file,
           }));
         } else {
           setFormData((prevData) => ({
             ...prevData,
             [name]: value,
           }));
         }
       };
      const handleSubmit = async (e) => {
         e.preventDefault();
         try {
            
            let data = JSON.stringify({
              "name": formData.Name,
              "email": formData.email,
              "phone": formData.Phonenumber,
              "buisnessName": formData.Buisnessname,
              "websiteURL": formData.websiteURL,
              "description": formData.description,
              "image": formData.images,
         
            });
            
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:3010/package/Forms',
              headers: { 
                'Content-Type': 'application/json',
              },
              data : data
            };
            
            axios.request(config)
            .then((response) => {
              console.log(JSON.stringify(response.data));
            })
         } catch (error) {
           console.error('Error submitting form: ', error.message);
         }
       };
     

return(

<>
<div className="formscta">
 <Container>
    <Row className="justify-content-center">
        <Col sm={12} xs={12} md={9} lg={9} xl={9} xxl={9}>
          <h2>We're ready to listen...</h2>
          <p>Leave your details below or call us on <a href="">(123)567-890</a> and let's chat about your business, your goals, and how we can help you grow. No obligation. No cost.</p>
           <form  method="POST" onSubmit={handleSubmit}>
             <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                   <div className="inputlist">
                    <input type="text"  name="Name" placeholder="Enter Your Name" className="form-control" required 
                     onChange={(e) => setFormData((prevData) => ({ ...prevData, Name: e.target.value }))} />
                   </div> 
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                   <div className="inputlist">
                    <input type="email"  name="email" placeholder="Enter Your Email" className="form-control" required 
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}/>
                   </div> 
                </Col>
             </Row>
             <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                   <div className="inputlist">
                    <input type="tel"  name="Phonenumber" placeholder="Enter Your Name" className="form-control" required 
                     onChange={(e) => setFormData((prevData) => ({ ...prevData, Phonenumber: e.target.value }))} />
                   </div> 
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                   <div className="inputlist">
                    <input type="text"  name="Buisnessname" placeholder="Enter Your Buisness Name" className="form-control" required 
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, Buisnessname: e.target.value }))}/>
                   </div> 
                </Col>
             </Row>
             <Row>
                
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                   <div className="inputlist">
                    <input type="text"  name="websiteURL" placeholder="http://" className="form-control" required 
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, websiteURL: e.target.value }))} />
                   </div> 
                </Col>
    
                 
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                   <div className="inputlist">
                   <textarea name="description" className="form-control" placeholder="Enter Message" 
                      onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}></textarea>
                   </div> 
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                   <div className="inputlist">
                    <input type="file" name="image"  onChange={handleChange}/>
                   </div> 
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                   <div className="inputlist">
                   <button type="submit">Submit</button>
                   </div> 
                </Col>

             </Row>                                
           </form>
        </Col>
    </Row>
 </Container>
</div>

</>

)


}



export default Forms;