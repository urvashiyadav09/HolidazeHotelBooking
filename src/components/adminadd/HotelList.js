import React, {useState, useEffect} from 'react';
import { BASE_URL, headers} from "../../constants/Constants";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function HotelList() {
    const url = BASE_URL + "establishments";
    const options = { headers };

    

    const [hotelsList, setHotelsList] = useState([]);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotelsList(json);
                
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="info" size="xl" role="status" className="loadingSpinner"/>;
    }

    return(


        <Container>
            <Row className="allHotels">
                    <Col lg={12}>
                        <div className="allHotels__accomodationHeading">
                        <h1 className="allHotels__accomodationHeading--headingMain">All Hotels are listed here:</h1>
                        </div> 
                    </Col> 

                   <Col lg={12}>    
                    <div className="allHotels__Hotelgroup">
                       
                        {hotelsList.map(((hotel) => {
                            
                            return ( 
                                
                                <Card key={hotel.id} className="allHotels__Hotelgroup__groupHotelDisplay">

                                    <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv">
                                        <Card.Body>

                                            <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__img">
                                                <Card.Img alt="hotelImage" src= {hotel.image} className="img-thumbnail"/>
                                            </div>

                                            <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text">
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Hotel Name:&nbsp;</b>{hotel.name}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.address}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.email}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Price:&nbsp;</b>{hotel.price}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Max Guests allowed:&nbsp;</b>{hotel.maxGuests}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Latitude:&nbsp;</b>{hotel.lat}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Langitude:&nbsp;</b>{hotel.lat}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.description}</span></Card.Text>
                                                
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.selfCatering}</span></Card.Text>

                                                <NavLink to={"/adminadd/HotelList/Edit/" + hotel.id}><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--EditHotel">Edit Hotel&nbsp;&#9654;</span></NavLink>
                                            </div>
                                            
                                        </Card.Body>

                                     
                                    </div>

                                   
                                </Card> 
                                
                            );

                            }
                        ))}
                       

                    </div> 
                    </Col>
                         

                </Row>
        </Container>
    )
}

export default HotelList     