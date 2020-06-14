import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServicesText from "./ServicesText";
import Card from 'react-bootstrap/Card';

function ActivitesList() {
return(
<Container>
     <Row className="hotelActivites">
        <Col lg={12}>
          <ServicesText />
        </Col>

        <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/sunbath.jpg')} alt="sunbath" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;Enjoy in sun</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">To take a sun bath near the cold and sweet air of beach is fun. Long-chairs are placed near the swimming pool and near the hotel beaches. Drinks and food is also offered there to spend the quality time hassle free. </span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col>

        <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/pool.jpg')} alt="pool" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;Enjoy in pool</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">Pool in hotels are offered free of cost. Generally pool is built on the roof of hotel. Towels and shower cabinet are near the pool and a personal is there to assist. </span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col>

        <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/fitness.jpg')} alt="fitnessgym" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;Fitness</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">Holidaze offers gym to its customers either in the Hotel or at a nearest training centre that is suitable as per customer’s choice of stay.</span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col>    
        
        <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/kidsenjoy.jpg')} alt="kids" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;For Kids</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">Kids loves to play in water. At the kid’s pool arena, all kids’ safety gear are freely available to use. A trainer/personal is there to take care of kids, so there guardians can enjoy their time.</span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col> 

         <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/spa.jpg')} alt="spa" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;Spa</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">Spa facility is also available in some of the hotels. At the spa centre, full body message is provided with trained professionals. </span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col> 

        <Col lg={6}>
            <Card className="hotelActivites__activitiesList">
                <Card.Body>
                    <Card.Img src={require('../../images/lunch.jpg')} alt="lunch" className="img-thumbnail" />

                    <div className="hotelActivites__activitiesList__paragraph">
                        <Card.Title><span className="hotelActivites__activitiesList__paragraph--text"><b>&nbsp;Lunch</b></span></Card.Title>
                        <Card.Text><span className="hotelActivites__activitiesList__paragraph--text">Lunch is optional and customers can choose to eat healthy meal in the hotel. Lunch can also be served in the room.</span></Card.Text>
                    </div>
                </Card.Body>
            </Card>
        
        </Col> 

    </Row>
</Container>

)
}

export default ActivitesList