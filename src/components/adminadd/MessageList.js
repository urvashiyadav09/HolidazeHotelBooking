import React, {useState, useEffect} from 'react';
import { BASE_URL, headers} from "../../constants/Constants";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AllMessages() {
 

    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    const options = { headers };
    const fetchUrl = BASE_URL + "contacts";
    

    useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => setMessages(json))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Spinner animation="border" variant="info" size="xl" role="status" className="loadingSpinner"/>;
    }

    return(  
        <>
            <Container >
                 <Row className="allMessages">
                    <Col lg={12} sm={12}>
                        <div className="allMessages__heading">
                            <h1 className="allMessages__heading--headingMain">Received messages are listed here:</h1>
                       </div>
                    </Col>

                    <Col lg={12}>
                        <div className="allMessages__groupCard">

                            {messages.map((message) => {
                                return ( 
                                
                                    <Card key={message.id} className="allMessages__groupCard__groupCardDisplay">
                                        
                                        <Card.Body>
                                            <Card.Text><span className="allMessages__groupCard__groupCardDisplay--text"><b>Name:&nbsp;&nbsp;</b>{message.name}</span></Card.Text>
                                            <Card.Text><span className="allMessages__groupCard__groupCardDisplay--text"><b>Email:&nbsp;&nbsp;</b>{message.email}</span></Card.Text> 
                                            <Card.Text><span className="allMessages__groupCard__groupCardDisplay--text"><b>Message:&nbsp;&nbsp;</b>{message.message}</span></Card.Text>
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

export default AllMessages    