import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import EnquiryModalForm from "./EnquiryModalForm";

const EnquiryModal = ({ id }) => {
    const [modal, setModal] = useState(false);

    const displayModal = () => {
        setModal(true);
    };

    const hideModal = () => {
        setModal(false);
    };

    return (
        <>
            <div className="enquiryPopup">
                <Button className="enquiryPopup__buttonModal" onClick={displayModal}>
                    Book Hotel
                </Button>
                <Modal show={modal} onHide={hideModal} aria-labelledby="contained-modal-title-vcenter" centered className="Modal">
                    <Modal.Header className="enquiryPopup__heading" closeButton>
                        <Modal.Title>Hotel Booking</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        
                        <EnquiryModalForm id={id}/>
                           
                    </Modal.Body>

                    
                </Modal>
            </div>
        </>
    );
};

export default EnquiryModal;
