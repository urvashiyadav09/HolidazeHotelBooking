import React from 'react';
import Paragraph from "../layout/Paragraph";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
return(
<Container fluid={true}>
     <Row>
        <Col>
          <div className="about">

          <div className="about__heading">
            <h1 className="about__heading--text">Few Words About Holidaze</h1>
          </div>
  
          
          <div className="about__paragraph">
            <Paragraph>
            Holidaze is a good choice for travellers/nature-lovers to find accommodation in Bergen, Norway. Bergen is the gateway of fjords and its centre is famous for freshly cooked sea-food. We provide B&BQ’s food, staying from wooden guest houses on the beach to luxurious hotels. Our listed hotels/guest houses are perfect choice for your next family trip or business trip. Experience first class service, on-site dining options, parking, complementary high-speed internet and state of art conference rooms. Our hotels are best rated hotels. You would not find a better value than Holidaze for you vacation, meeting and social occasions. 
          </Paragraph>
        </div>
      </div>
    </Col>
  </Row>
</Container>
)
}

export default About