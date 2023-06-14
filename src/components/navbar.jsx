import { Link } from 'react-router-dom'
import {  Navbar, Nav } from 'react-bootstrap'
import {BsFillChatSquareDotsFill} from 'react-icons/bs'
import { useState } from 'react';


export default function NavbarComponent({setShow}) {
   
    const handleShow = () => setShow(true);
    return (

        <Navbar collapseOnSelect expand="lg p-0" className="sticky-top peach" style={{ textShadow: "none", height: "50px" }} >
            <div className='container-fluid'>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' ms-auto me-3 peach' />
                <Navbar.Collapse id="responsive-navbar-nav border ">
                    <Nav className="ms-auto  me-1 mt-2 black-nav black-text-shadow text-light">
                        <Nav.Link className='' as={Link} to="/" eventKey={1}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/gallery" eventkey={2}>Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/prices" eventkey={3}>Services</Nav.Link>
                        <Nav.Link as={Link} to="/reviews" eventkey={4}>Reviews</Nav.Link>
                        <button className='btn' onClick={handleShow} eventkey={5}><BsFillChatSquareDotsFill className='fs-2 mb-1 hover-shadow' style={{color:"whitesmoke"}} /></button>
                    </Nav>
                </Navbar.Collapse>
            </div>



        </Navbar>


    )
}