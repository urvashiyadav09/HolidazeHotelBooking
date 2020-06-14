import React, {useState, useEffect} from 'react';
import { BASE_URL, headers} from "../../constants/Constants";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import HotelSearch from "./HotelSearch";





function AllHotels() {
    const url = BASE_URL + "establishments";
    const options = { headers };

    

    const [hotelsList, setHotelsList] = useState([]);
    const [searchHotels, setSearchHotels] = useState([]);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                setHotelsList(json);
                setSearchHotels(json);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="info" size="xl" role="status" className="loadingSpinner"/>;
    }
    function searchHotel(inp){

        const lowerCaseInp = inp.toString().toLowerCase();
        

        const searchData = hotelsList.filter(function(hotel){

            const hotelLowerCase = hotel.name.toString().toLowerCase();
            
            if(hotelLowerCase.includes(lowerCaseInp)){
                return true;
            }else{
                return false;
            }
            
        });

        setSearchHotels(searchData);
    }

    return(


        <Container>
            <Row className="allHotels">
                    <Col lg={4} sm={12}>
                        <div className="allHotels__accomodationHeading">
                            <h1 className="allHotels__accomodationHeading--headingMain">Our Hotels</h1>
                        </div> 
                    </Col> 

                    <Col lg={8} sm={12}>

                        <HotelSearch findHotel={searchHotel} />
                    
                    </Col> 


                    <Col lg={12}>    
                    <div className="allHotels__Hotelgroup">
                       
                        {searchHotels.map(((hotel) => {
                            
                            return ( 
                                
                                <Card key={hotel.id} className="allHotels__Hotelgroup__groupHotelDisplay">
                                 
                                    <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv">
                                        <Card.Body>

                                            <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__img">
                                                <Card.Img alt="hotelImage" src= {hotel.image} className="img-thumbnail"/>
                                            </div>

                                            <div className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text">
                                                <Card.Title><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>{hotel.name}</b></span></Card.Title>
                                                <Card.Title><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.email}</span></Card.Title>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Price:&nbsp;</b>{hotel.price}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont"><b>Max Guests allowed:&nbsp;</b>{hotel.maxGuests}</span></Card.Text>
                                                <Card.Text><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.description}</span></Card.Text>
                                                <Card.Title><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--textFont">{hotel.address}</span></Card.Title>
                                                
                                                <NavLink to={"/hotel/" + hotel.id}><span className="allHotels__Hotelgroup__groupHotelDisplay__displayDiv__text--detailLink">See Details</span></NavLink>
                                                
                                                
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

export default AllHotels      