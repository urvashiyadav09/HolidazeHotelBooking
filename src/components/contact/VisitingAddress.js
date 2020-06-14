import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm";
import Iframe from "react-iframe";

function VisitingAddress() {
    return(
        <Container fluid={true}>
            <Row className="holidazeContact">
                <Col lg={6} sm={12}>
                    <div className="holidazeContact__heading">
                        <h1 className="holidazeContact__heading--headingMain">Holidaze Bergen</h1>
                    </div>

                    <div className="holidazeContact__contactInfo">              
                        
                        <p className="holidazeContact__contactInfo--text"><b>Phone:&nbsp;&nbsp;</b>+47123678</p>
                        <p className="holidazeContact__contactInfo--text"><b>Email:&nbsp;&nbsp;</b>holidaze.bergen@gmail.com</p>
                        <p className="holidazeContact__contactInfo--text"><b>Country:&nbsp;&nbsp;</b>Norway</p>
                        <p className="holidazeContact__contactInfo--text"><b>Postal Address:&nbsp;&nbsp;</b>0238160</p>
                        <p className="holidazeContact__contactInfo--text"><b>Location:&nbsp;&nbsp;</b></p>

                        <Iframe  className="holidazeContact__contactInfo__googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252526.55374510563!2d5.149003461530088!3d60.36489109733289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sen!2sno!4v1591829893116!5m2!1sen!2sno" 
                        allowfullscreen="yes" 
                        aria-hidden="false" 
                        tabindex="0" />
                    </div>      
                                         
                </Col>

                <Col lg={6} >
                    <ContactForm />
               </Col>     
            </Row>
        </Container>
    ) 
    
    }
    
    export default VisitingAddress