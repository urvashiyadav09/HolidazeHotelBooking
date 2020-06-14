import React, {useState, useEffect} from 'react';
import { BASE_URL, headers} from "../../constants/Constants";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import * as moment from 'moment'

function AllEnquries() {
 

    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = { headers };
    const fetchUrl = BASE_URL + "enquiries";
    

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setEnquiries(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    function dateFormat(date){
         return moment(date).format('DD-MM-YYYY');
    }

    if (loading) {
        return <Spinner animation="border" variant="info" size="xl" role="status" className="loadingSpinner"/>;
    }

    return(  
        <>
            <Container >
                 <Row className="allEnquries">
                    <Col lg={12} sm={12}>
                        <div className="allEnquries__heading">
                            <h1 className="allEnquries__heading--headingMain">Received enquiries are listed here:</h1>
                       </div>
                    </Col>

                    <Col lg={12}>
                        <div className="allEnquries__groupCard">

                            {enquiries.map((message) => {
                                return ( 
                                
                                    <Card key={enquiries.id} className="allEnquries__groupCard__groupCardDisplay">
                                        
                                        <Card.Body>
                                            <Card.Text><span className="allEnquries__groupCard__groupCardDisplay--text"><b>Name:&nbsp;&nbsp;</b>{message.name}</span></Card.Text>
                                            <Card.Text><span className="allEnquries__groupCard__groupCardDisplay--text"><b>Email:&nbsp;&nbsp;</b>{message.email}</span></Card.Text> 
                                            <Card.Text><span className="allEnquries__groupCard__groupCardDisplay--text"><b>CheckIn:&nbsp;&nbsp;</b>{dateFormat(message.checkIn)}</span></Card.Text>
                                            <Card.Text><span className="allEnquries__groupCard__groupCardDisplay--text"><b>CheckOut:&nbsp;&nbsp;</b>{dateFormat(message.checkOut)}</span></Card.Text>
                                        </Card.Body>

                                    </Card> 
                            );})}
                        </div>
                    </Col> 
                </Row>
            </Container> 
        </>
        
    )
}

export default AllEnquries    