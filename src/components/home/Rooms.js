import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AllHotels() {
    return(
        <Container fluid={true} >
            <Row className="hotelrooms">

              <Col lg={12}>
                <div className="hotelrooms__heading">
                  <h2 className="hotelrooms__heading--text">Our Rooms</h2>
                </div>
              </Col>


                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                        <img className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/masterroom.jpg')} alt="Holidaze Master Room"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                        <h3 className="hotelrooms__roomsTypePara--text">Master Room</h3>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                        <img className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/minisuit.jpg')} alt="Holidaze Mini Suit"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                    <h3 className="hotelrooms__roomsTypePara--text">Mini Suit</h3>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                        <img  className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/normalroom.jpg')} alt="Holidaze Normal Room"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                        <h3 className="hotelrooms__roomsTypePara--text">Normal Room</h3>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                      <img className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/motel.jpg')} alt="Holidaze Apartment Room"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                        <h3 className="hotelrooms__roomsTypePara--text">Apartment Room</h3>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                        <img className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/seasidecottage.jpg')} alt="Holidaze Sea Side Cottages"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                        <h3 className="hotelrooms__roomsTypePara--text">Sea Side Cottages</h3>
                    </div>
                </Col>

                <Col lg={4} md={6}>
                    <div className="hotelrooms__roomsType">
                        <img className="hotelrooms__roomsType__img img-thumbnail" src={require('../../images/conferenceroom.jpg')} alt="Holidaze Conference Room"/>
                    </div>
                    <div className="hotelrooms__roomsTypePara">
                        <h3 className="hotelrooms__roomsTypePara--text">Conference Room</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AllHotels      