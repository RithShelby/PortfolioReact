import React from 'react';
import { Modal } from "react-bootstrap";

const CustomModal = ({ title, body, show, onHide,header }) => {
    return (
        <Modal
            className="border-0"
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter "
            centered
        >
            <Modal.Header closeButton hidden>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="rounded-3 border-0 p-0">
                {body}
            </Modal.Body>
        </Modal>
    );
};

export default CustomModal;
