import React, { useState } from "react";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import {BASE_URL, headers} from "../../constants/Constants";
import {useHistory} from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormButton from "./FormButton";
import ErrorParagraph from "../layout/ErrorParagraph";

const schema = yup.object().shape(  {
    name: yup.string().required("Enter your first name."),
    email: yup.string().email("Please enter a valid email").required("Enter your valid email address."),
    message: yup.string().required("Please write your message."),
});

function ContactForm() {

// eslint-disable-next-line
    const { register, handleSubmit, reset, errors } = useForm({
        validationSchema: schema
    });

    const history = useHistory();

    const [sentMessage, setSentMessage] = useState(false);

    async function onSubmit (data, e){
        console.log("contact data", data);
    
        const url = BASE_URL + "contacts";

        const options = {headers, method: "POST", body: JSON.stringify(data)};

        await fetch (url, options);
        e.target.reset();
        setSentMessage(true);

        history.push("/contact/contacts");

    }
 
    return(
       
       <Form onSubmit = {handleSubmit (onSubmit) } className="contactForm">

           <div className="contactForm__heading">
                <h2 className="contactForm__heading--headingMain">Contact Us</h2>
           </div>
            
           {sentMessage ? <p className="successMessage">Your message is sent successfully!</p> : (null)}

           <div className="contactForm__row">
                <Form.Group as={Row}>
                    <Col sm="2">
                        <Form.Label className="contactForm__row__label">Full Name</Form.Label>
                    </Col>

                    <Col sm="10">    
                        <Form.Control name="name" placeholder="Enter your full name.." ref={register} className="placeHolderText"/>
                        {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
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
                    {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
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
                        {errors.message && <ErrorParagraph>{errors.message.message}</ErrorParagraph>}
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