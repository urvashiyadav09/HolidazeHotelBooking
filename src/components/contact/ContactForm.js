import React from "react";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {BASE_URL, headers} from "../../constants/Constants";
import {useHistory} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormButton from "./FormButton";

const schema = yup.object().shape(  {
    name: yup.string().required("First name is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    message: yup.string().required(),
});

function ContactForm() {

// eslint-disable-next-line
    const { register, handleSubmit, reset, errors } = useForm({
        validationSchema: schema
    });

    const history = useHistory();

    async function onSubmit (data, e){
        console.log("contact data", data);
    
        const url = BASE_URL + "contacts";

        const options = {headers, method: "POST", body: JSON.stringify(data)};

        await fetch (url, options);
        e.target.reset();

        history.push("/contact/contacts");

    }
 
    return(
       
       <Form onSubmit = {handleSubmit (onSubmit) } className="contactForm">

           <div className="contactForm__heading">
                <h2 className="contactForm__heading--headingMain">Contact Us</h2>
           </div>
            
           <div className="contactForm__row">
                <Form.Group as={Row}>
                    <Col sm="2">
                        <Form.Label className="contactForm__row__label">Full Name</Form.Label>
                    </Col>

                    <Col sm="10">    
                        <Form.Control name="name" placeholder="Enter your full name.." ref={register} className="placeHolderText"/>
                        {errors.name && <p>{errors.name.message}</p>}
                    </Col>    
                </Form.Group>
            </div>

            <div className="contactForm__row"> 
                <Form.Group as={Row}>
                <Col sm="2">
                    <Form.Label className="contactForm__row__label">Email</Form.Label>
                </Col>

                <Col sm="10">    
                    <Form.Control name="email" placeholder="Enter your email" ref={register} className="placeHolderText"/>
                    {errors.email && <p>{errors.email.message}</p>}
                </Col>    
                </Form.Group>
            </div>

            <div className="contactForm__row"> 
                <Form.Group as={Row}>
                    <Col sm="2">
                        <Form.Label className="contactForm__row__label">Message</Form.Label>
                    </Col>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="4" name="message" placeholder="Please write your message here.." ref={register} className="placeHolderText"/>
                        {errors.message && <p>{errors.message.message}</p>}
                    </Col>
                </Form.Group>
            </div>

            <div className="contactForm__btn">
                <span className="contactForm__btn--sendFormbtn"><FormButton type="submit" onClick={() => reset()}>Send</FormButton></span>
            </div>    

        </Form>

        


    );

}

export default ContactForm;