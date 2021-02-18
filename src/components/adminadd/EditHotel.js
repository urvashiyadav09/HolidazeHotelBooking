import React from "react";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {useHistory , useParams , Link} from "react-router-dom";
import {BASE_URL, headers, PATCH, DELETE} from "../../constants/Constants";
import Heading from "../layout/Heading";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const schema = yup.object().shape(  {
    name: yup.string().required("First name is required"),
    email: yup.string(),
    image: yup.string(),
    price:yup.number().default(1),
    maxGuests:yup.number().default(1),
    description:yup.string(),
    address:yup.string(),
    selfCatering:yup.boolean()
});


function EditHotel() {

    // eslint-disable-next-line no-unused-vars
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    
    const [hotel, updateHotel] = useState(true);
    const [showUpdateMessage, setShowUpdateMessage] = useState(false);
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    
    let { id } = useParams();
    
    const options = { headers };

    const fetchUrl = BASE_URL + "establishments/" + id;

   useEffect(() => {
        fetch(fetchUrl, options)
            .then((response) => response.json())
            .then((json) => updateHotel(json))
            .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    
    
    function DeleteHotel() {
        confirmAlert({
            message: "Are you sure to delete this hotel from the list ?",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => deleteHotel(),
                },
                {
                    label: "No",
                },
            ],
        });
    }

    async function deleteHotel() {
        const url = BASE_URL + "establishments/" + id;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        setShowDeleteMessage(true);
    }

    async function onSubmit(data) {
        console.log("data", data);
      
        setShowUpdateMessage(true);

        const hotelUpdateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(fetchUrl, hotelUpdateOptions);
        
    };

    return(
        <div>
        {showDeleteMessage ? <p className="successDeleteMessage">Hotel is Deleted Successfully From The List&nbsp;&#33;&#33;</p> : 
        <Container>
        <Row>
            <Col className="addHotel">
                <Form onSubmit = {handleSubmit (onSubmit)}  className="addHotel__Form">
                
                <div className="addHotel__Form__heading">
                    <Heading subtitle="Update form to update the hotel." />
                </div>

                    <div className="addHotel__Form__row1">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row1__label1">Hotel Name</Form.Label>
                            </Col>
                            <Col sm="9">
                                <Form.Control name="name" defaultValue={hotel.name} ref={register} className="placeHolderText"/>
                                {errors.name && <p>{errors.name.message}</p>}
                            </Col>
                            
                         </Form.Group>
                    </div>
                        
                    <div className="addHotel__Form__row2">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row2__label2">Email</Form.Label>
                            </Col>
                            <Col sm="9">
                                <Form.Control name="email" defaultValue={hotel.email} ref={register} className="placeHolderText"/>
                            </Col>    
                        </Form.Group>
                    </div>

                    <div className="addHotel__Form__row3">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row3__label3">Image</Form.Label>
                            </Col>

                            <Col sm="9">
                                <Form.Control name="image" defaultValue={hotel.image} ref={register} className="placeHolderText"/>
                            </Col>    
                        </Form.Group>
                    </div>
                        

                    <div className="addHotel__Form__row4">
                        <Form.Group as={Row}>
                            <Col sm="5">
                                <Form.Label className="addHotel__Form__row4__label4">Price</Form.Label>
                            </Col>

                            <Col sm="7">
                                <Form.Control name="price" defaultValue={hotel.price} ref={register} className="placeHolderText"/>
                            </Col>    
                        </Form.Group>
                    </div>

                    <div className="addHotel__Form__row4">
                        <Form.Group as={Row}>
                            <Col sm="7">
                                <Form.Label className="addHotel__Form__row4__label4">Max Guests</Form.Label>
                            </Col>

                            <Col sm="5">
                            <Form.Control name="maxGuests" defaultValue={hotel.maxGuests} ref={register} className="placeHolderText"/>
                            </Col>    
                        </Form.Group>
                    </div>

                     <div className="addHotel__Form__row6">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row6__label6">Description</Form.Label>
                            </Col>

                            <Col sm="9">
                                <Form.Control as="textarea" rows="" name="description" defaultValue={hotel.description} ref={register} className="placeHolderText"/>
                            </Col>    
                        </Form.Group>
                    </div>

                    <div className="addHotel__Form__row7">
                        <Form.Group as={Row}>
                            <Col sm="3">
                                <Form.Label className="addHotel__Form__row7__label7">Address</Form.Label>
                            </Col>

                            <Col sm="9">
                                <Form.Control as="textarea" rows="2" name="address" defaultValue={hotel.address} ref={register} className="placeHolderText"/>
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
                    <div className="col-sm-12">
                    <Link to="/adminadd/HotelList" className="goBackAdminHotel">&#9664;&#9664;&nbsp;Go Back To Hotel List</Link>
                    <Button type="submit" className="updateHotel" >Update</Button> 
                    <Button className="deleteHotel" onClick={DeleteHotel}>Delete</Button>
                    
                    </div>        
                    

                    {showUpdateMessage ? <p className="successMessage">Hotel is Updated Successfully!</p> : (null) } 
                   
                </Form>

                  
                    
            </Col> 
        </Row>
    </Container>

       }
       </div>
    );

}

export default EditHotel;