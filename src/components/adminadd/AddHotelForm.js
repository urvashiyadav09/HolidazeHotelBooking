import React, { useState } from "react";
import AddFormButton from "./AddFormButton";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import ListGroup from 'react-bootstrap/ListGroup'
import { useForm } from "react-hook-form";
import {BASE_URL, headers} from "../../constants/Constants";
import {useHistory} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ErrorParagraph from "../layout/ErrorParagraph";


const schema = yup.object().shape(  {
    name: yup.string().required("Hotel name is required"),
    email: yup.string(),
    image: yup.string(),
    price:yup.number().default(1),
    maxGuests:yup.number().default(1),
    lat:yup.number().default(1),
    lang:yup.number().default(1),
    description:yup.string(),
    address:yup.string(),
    selfCatering:yup.boolean(),
});

function AddHotel() {

    const { register, handleSubmit, reset, errors } = useForm({
        validationSchema: schema
    });
    

    const history = useHistory();

    const [addedHotel, setAddedHotel] = useState(false);
    

    async function onSubmit (data,e){
        console.log("establishments data", data);
    
        const url = BASE_URL + "establishments";

        const options = {headers, method: "POST", body: JSON.stringify(data)};

        await fetch (url, options);
        
        e.target.reset();
        history.push("/adminadd");
        setAddedHotel(true);

    }

    return(
        <Container fluid={true} >
            <Row>
                <Col lg={6} className="addHotel">
                    <Form onSubmit = {handleSubmit (onSubmit)}  className="addHotel__Form">

                    

                    <div className="addHotel__Form__heading">
                        <Heading subtitle="Please Fill the form to add the new hotel into the list." />
                    </div>

                        <div className="addHotel__Form__row1">
                            <Form.Group as={Row}>
                                <Col sm="3">
                                    <Form.Label className="addHotel__Form__row1__label1">Hotel Name</Form.Label>
                                </Col>
                                <Col sm="9">
                                    <Form.Control name="name" placeholder="Enter hotel name" ref={register} className="placeHolderText"/>
                                    {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
                                </Col>
                                
                             </Form.Group>
                        </div>
                            
                        <div className="addHotel__Form__row2">
                            <Form.Group as={Row}>
                                <Col sm="3">
                                    <Form.Label className="addHotel__Form__row2__label2">Email</Form.Label>
                                </Col>
                                <Col sm="9">
                                    <Form.Control name="email" placeholder="Enter hotel email address" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>

                        <div className="addHotel__Form__row3">
                            <Form.Group as={Row}>
                                <Col sm="3">
                                    <Form.Label className="addHotel__Form__row3__label3">Image</Form.Label>
                                </Col>
 
                                <Col sm="9">
                                    <Form.Control name="image" placeholder="Please enter url of image" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>
                            

                        <div className="addHotel__Form__row4">
                            <Form.Group as={Row}>
                                <Col sm="5">
                                    <Form.Label className="addHotel__Form__row4__label4">Price</Form.Label>
                                </Col>
 
                                <Col sm="7">
                                    <Form.Control name="price" placeholder="Price" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>

                        <div className="addHotel__Form__row4">
                            <Form.Group as={Row}>
                                <Col sm="7">
                                    <Form.Label className="addHotel__Form__row4__label4">Max Guests</Form.Label>
                                </Col>
 
                                <Col sm="5">
                                <Form.Control name="maxGuests" placeholder="MaxGuests" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>

                        <div className="addHotel__Form__row5">
                        <Form.Group as={Row}>
                                <Col sm="5">
                                    <Form.Label className="addHotel__Form__row5__label5">Latitude</Form.Label>
                                </Col>
 
                                <Col sm="7">
                                    <Form.Control name="lat" placeholder="Latitude" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                       </div>

                        <div className="addHotel__Form__row5">
                            <Form.Group as={Row}>
                                <Col sm="6">
                                    <Form.Label className="addHotel__Form__row5__label5">Langitude</Form.Label>
                                </Col>
 
                                <Col sm="6">
                                    <Form.Control name="lang" placeholder="Langitude" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                       </div> 

                         <div className="addHotel__Form__row6">
                            <Form.Group as={Row}>
                                <Col sm="3">
                                    <Form.Label className="addHotel__Form__row6__label6">Description</Form.Label>
                                </Col>
 
                                <Col sm="9">
                                    <Form.Control as="textarea" rows="" name="description" placeholder="Please enter description of the hotel" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>

                        <div className="addHotel__Form__row7">
                            <Form.Group as={Row}>
                                <Col sm="3">
                                    <Form.Label className="addHotel__Form__row7__label7">Address</Form.Label>
                                </Col>
 
                                <Col sm="9">
                                    <Form.Control as="textarea" rows="2" name="address"  placeholder="Please enter the address of hotel" ref={register} className="placeHolderText"/>
                                </Col>    
                            </Form.Group>
                        </div>

                        <div className="addHotel__Form__row8">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row7__label7">Self Catering</Form.Label>
                            </Col>

                            <Col sm="3">
                                <Form.Control as="select" ref={register}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </Form.Control>

                            </Col>
                        </Form.Group>
                    </div>                 

                        <div className="addHotel__Form__btn">
                        <span className="addHotel__Form__btn--addFormbtn"><AddFormButton type="submit" onClick={() => reset()}>Add Hotel</AddFormButton></span>
                        </div>  

                        {addedHotel ? <p className="successMessage">Hotel is added successfully!</p> : (null)}  
                        
                        </Form>
                </Col> 


                <Col lg={5} className="displayedInfo">

                <ListGroup className="displayedInfo__listGroup">
                    <NavLink to="/adminadd/HotelList">
                        <ListGroup.Item className="displayedInfo__listGroup--listGroupItem">Added Hotel list</ListGroup.Item>
                    </NavLink>

                    <NavLink to="/adminadd/EnquiryList">
                        <ListGroup.Item className="displayedInfo__listGroup--listGroupItem">Received Enquiry List</ListGroup.Item>
                    </NavLink>

                    <NavLink to="/adminadd/MessageList">
                        <ListGroup.Item className="displayedInfo__listGroup--listGroupItem">Received Messages List</ListGroup.Item>
                    </NavLink>

              </ListGroup>
                    
     </Col>
            </Row>
        </Container>

       
    );

}

export default AddHotel;