
import { Modal } from "react-bootstrap"
import ContactUs from "../contact/contactus";

export default function ContactModal({setShow, show}){
    
    const handleClose = () => setShow(false);
    
    return(
        <Modal show={show} onHide={handleClose} size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered  >
        <Modal.Header closeButton>
            <Modal.Title>Have A Question?</Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <ContactUs/>
        </Modal.Body>
    </Modal>
    )
}