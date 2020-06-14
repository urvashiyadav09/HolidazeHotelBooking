import React from "react";
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
    name: yup.string().required("First name is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    establishmentId: yup.string().required(),
    checkIn: yup.date().required(),
    checkOut: yup.date().required(),
});



function EnquiryModalForm({ id }) {
    const history = useHistory();
    const { handleSubmit, register, errors, control } = useForm({
        validationSchema: schema,
    });

    

    async function onSubmit(data) {
        const url = BASE_URL + "enquiries";
        const dataOptions = { headers, method: "POST", body: JSON.stringify(data) };

        await fetch(url, dataOptions);

        history.push("/hotels/AllHotels");
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="enquiryPopupForm__row1">
            <Form.Control name="establishmentId" defaultValue={id} ref={register} type="hidden" />

            <div className="enquiryPopupForm__row1">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row1__label">Full Name</Form.Label>
                    <Form.Control name="name" placeholder="Enter your full name" ref={register} />
                    {errors.name && <ErrorParagraph>{errors.name.message}</ErrorParagraph>}
                </Form.Group>
            </div>

            <div className="enquiryPopupForm__row1">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row1__label">Email</Form.Label>
                    <Form.Control name="email" placeholder="Enter your email" ref={register} />
                    {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
                </Form.Group>
            </div>

            <div className="enquiryPopupForm__row2">
                <Form.Group>
                    <Form.Label className="enquiryPopupForm__row2__label">CheckIn</Form.Label>
                    <Controller
                        autoComplete="none"
                        as={DatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkIn"
                        className="enquiryPopupForm__row2__pickerCheckin"
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
                    <Form.Label className="enquiryPopupForm__row2__label">CheckOut</Form.Label>
                    <Controller
                        autoComplete="none"
                        as={DatePicker}
                        control={control}
                        valueName="selected"
                        onChange={([selected]) => selected}
                        name="checkOut"
                        className="enquiryPopupForm__row2__pickerCheckin"
                        placeholderText="check-out date"
                        isClearable
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                    />
                    {errors.checkIn && <ErrorParagraph>{errors.checkOut.message}</ErrorParagraph>}
                </Form.Group>
            </div>
            
            <Button type="submit" className="sendenquiry">Send</Button>
            
        </Form>
    );
}

export default EnquiryModalForm;
