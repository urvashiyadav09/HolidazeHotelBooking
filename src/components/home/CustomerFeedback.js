import React from 'react';
import Paragraph from "../layout/Paragraph";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CustomerFeedback() {
    return(
        <Container fluid={true}>
            <Row>
                <Col>
                    <div className="feedback">
                        <div className="feedback__heading">
                            <h2 className="feedback__heading--text">Feedback from one of our happy customer</h2>
                        </div>

                        <div className="feedback__img">
                            <img src={require('../../images/customer.jpg')} alt="Customer with family" className="rounded-circle float-left img-thumbnail" />
                        </div>

                        <div className="feedback__paragraph">
                            <Paragraph>
                               <b>“&nbsp;</b>I will start from the beginning i.e. using holidaze website was easy to book a place to stay. They reply all the queries promptly and properly. All the facilities are really good, what they have promised. Like Staying in wooden house on sand beach and eating B&BQ’s crab was really tasty.<b>&nbsp;”</b>
                            </Paragraph>
                        </div>
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}

export default CustomerFeedback