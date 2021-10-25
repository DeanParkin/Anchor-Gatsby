import React from "react";
import { Nav, Navbar, Container, Offcanvas } from "react-bootstrap";
import AnchorNavLogo from "../images/anchor-nav-logo.png";

export default function NavBarAnchor() {
    return (
        <>
            <Navbar 
                as="nav" 
                bg="dark" 
                variant="dark" 
                fixed="top" 
                expand={false}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={AnchorNavLogo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Yeahhh Buddy!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"/>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title 
                                id="offcanvasNavbarLabel"
                            >Deez nutz!!!</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <Nav.Link href="#action2">Yeahhhh</Nav.Link>
                            <Nav.Link href="#action2">Buddy!</Nav.Link>
                            <Nav.Link href="#action2">Its starting to work!!!!</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}
