import React, { useState } from "react";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import { useForm, Controller } from "react-hook-form";
import { BASE_URL, headers } from "../../constants/Constants";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ErrorParagraph from "../layout/ErrorParagraph";
import Button from "react-bootstrap/Button";

const schema = yup.object().shape({
    name: yup.string().required("Enter your first name."),
    email: yup.string().email("Please enter a valid email").required("Enter your valid email address."),
    establishmentId: yup.string().required(),
    checkIn: yup.date().required("Select check-in date."),
    checkOut: yup.date().required("Select check-out date.")
});



function EnquiryModalForm({ id }) {

    // eslint-disable-next-line no-unused-vars
    const history = useHistory();

    const { handleSubmit, register, errors, control } = useForm({
        validationSchema: schema,
    });

    
    const [susseccMessage, setSusseccMessage] = useState(false);

    async function onSubmit(data) {
        const url = BASE_URL + "enquiries";
        const dataOptions = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, dataOptions);
        setSusseccMessage(true);
       
    }

    return (
        <div>
        {susseccMessage ? <p className="successMessage">Your Booking is confirmed!</p> :

        <Form onSubmit={handleSubmit(onSubmit)} className="enquiryPopupForm__row1">
            
             

            <Form.Control name="establishmentId" defaultValue={id} ref={register} type="hidden" />

            <div className="enquiryPopupForm__row1">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row1__label">Full Name</Form.Label>
                    <Form.Control name="name" placeholder="Enter your full name" ref={register} className="placeHolderText"/>
                    {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
                </Form.Group>
            </div>

            <div className="enquiryPopupForm__row1">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row1__label">Email</Form.Label>
                    <Form.Control name="email" placeholder="Enter your email" ref={register} className="placeHolderText"/>
                    {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
                </Form.Group>
            </div>

            <div className="enquiryPopupForm__row2">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row2__label">CheckIn:</Form.Label>
                    <Controller
                        autoComplete="none"
                        as={DatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkIn"
                        className="enquiryPopupForm__row2__pickerCheckin placeHolderText"
                        placeholderText="check-in date" 
                        isClearable
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
                    {errors.checkIn && <ErrorParagraph>{errors.checkIn.message}</ErrorParagraph>}
                </Form.Group>
            </div>

            <div className="enquiryPopupForm__row2">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row2__label">CheckOut:</Form.Label>
                    <Controller
                        autoComplete="none"
                        as={DatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkOut"
                        className="enquiryPopupForm__row2__pickerCheckin placeHolderText"
                        placeholderText="check-out date"
                        isClearable
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
                    {errors.checkIn && <ErrorParagraph>{errors.checkOut.message}</ErrorParagraph>}
                </Form.Group>
            </div>
            
            <Button type="submit" className="sendenquiry">Book Hotel</Button>

            
            
        </Form>
        } 

    </div>
    );
}

export default EnquiryModalForm;
