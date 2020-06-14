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
                    Send Enquiry
                </Button>
                <Modal show={modal} onHide={hideModal} aria-labelledby="contained-modal-title-vcenter" centered className="Modal">
                    <Modal.Header className="enquiryPopup__heading">
                        <Modal.Title>Send an enquiry to the Hotel....</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        
                        <EnquiryModalForm id={id} />
                            <Button className="cancelmodal" onClick={hideModal}>Cancel</Button>
                    </Modal.Body>

                    
                </Modal>
            </div>
        </>
    );
};

export default EnquiryModal;
