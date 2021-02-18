import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ErrorParagraph from "../layout/ErrorParagraph";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("Please enter your valid email address."),
   password: yup
        .string()
        .required("Please enter your valid password.")
});

function AdminLogin() {
    const { register, handleSubmit, errors } = useForm({validationSchema: schema});
    const { registerUser } = useContext(AuthContext);


        const history = useHistory();

        function onSubmit(data) {
            console.log("data", data);
            registerUser(data.email, data.password);
            
            history.push("/adminadd");
            
            
        }
    

    return (

        <Container >
            <Row >
                <Col>
                    <Form onSubmit={handleSubmit(onSubmit)} className="adminLoginForm">

                            <div className="adminLoginForm__heading">
                                <h1 className="adminLoginForm__heading--text">Holidaze Admin&nbsp;!!</h1>
                            </div>
         
                            <div className="adminLoginForm__textBox">
                                <Form.Group as={Row}>
                                    <Col sm="3">
                                        <span className="adminLoginForm__textBox--label"><Form.Label>Email</Form.Label></span>
                                    </Col> 

                                    <Col sm="9">   
                                        <Form.Control name="email" type="text" placeholder="Enter your email" ref={register} className="placeHolderText"/>
                                        {errors.email && <ErrorParagraph>{errors.email.message}</ErrorParagraph>}
                                    </Col>    
                                </Form.Group>
                            </div>

                            <div className="adminLoginForm__textBox">
                                <Form.Group as={Row}>
                                    <Col sm="3">
                                        <span className="adminLoginForm__textBox--label"><Form.Label>Password</Form.Label></span>
                                    </Col> 

                                    <Col sm="9">   
                                        <Form.Control name="password" type="password" placeholder="Enter your password" ref={register} className="placeHolderText"/>
                                        {errors.password && <ErrorParagraph>{errors.password.message}</ErrorParagraph>}
                                    </Col>    
                                </Form.Group>
                            </div>

            
                            <div className="adminLoginForm__Button">
                                <Button type="submit" className="loginBtn">Login</Button>
                            </div>
           
           
                    </Form>

                </Col> 
            </Row>
        </Container> 
    );
}

export default AdminLogin;