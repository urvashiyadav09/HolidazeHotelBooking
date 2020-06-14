import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { BASE_URL, headers} from "../../constants/Constants";
import Card from 'react-bootstrap/Card';
import EnquiryModal from "./EnqiryModal";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function HotelDetails() {

    
    
    const [hotelDetail, setHotelDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const url = BASE_URL + "establishments/" + id;
    const options = { headers };

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotelDetail(json);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
      // eslint-disable-next-line      
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

       
    return(
            <Container>
                <Row className="hotelDetails">
                    <Col lg={12}>
                        <div className="hotelDetails__accomodationHeading">
                        <h1 className="hotelDetails__accomodationHeading--headingMain">The Details of the hotel is:</h1>
                        </div> 
                    </Col> 

                    <Col lg={12}>    
                        <div className="hotelDetails__Hotelgroup">
    
                                <Card key={hotelDetail.id} className="hotelDetails__Hotelgroup__groupHotelDisplay">
                                    <Card.Body>

                                        <div className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__img">      
                                            <Card.Img alt="hotelImage" src= {hotelDetail.image} className="img-thumbnail"/>
                                        </div>    
                                            <div className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text">
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Hotel Name:&nbsp;</b>{hotelDetail.name}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotelDetail.email}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Price:&nbsp;</b>{hotelDetail.price}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Max Guests allowed:&nbsp;</b>{hotelDetail.maxGuests}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Latitude:&nbsp;</b>{hotelDetail.lat}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Langitude:&nbsp;</b>{hotelDetail.lat}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotelDetail.description}</span></Card.Text>
                                                <Card.Text><span className="hotelDetails__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotelDetail.address}</span></Card.Text>
                                            </div>
                                                
                                                <EnquiryModal id={hotelDetail.id}/>
                                            
                                    </Card.Body>
                           
                                </Card>
                          </div>
                    </Col>

                     </Row>
        </Container>            
                             
                   
    )
    }    

export default HotelDetails 