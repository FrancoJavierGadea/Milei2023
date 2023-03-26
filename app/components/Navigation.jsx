'use client'

import Image from "next/image";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

function Navigation() {

    return (<Navbar variant="dark" expand="lg">
        <Container>

            <Navbar.Brand href="/" as={Link}>
                <Image src="/white-logo-2.png" width={120} height={70} style={{objectFit: 'scale-down'}} alt="nav logo"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/" as={Link}>Inicio</Nav.Link>
                    <Nav.Link href="/campaña" as={Link}>Campaña</Nav.Link>
                    <Nav.Link href="/sobre-mi" as={Link}>Sobre mi</Nav.Link>
                </Nav>
            </Navbar.Collapse>   

        </Container>
    </Navbar>);
}

export default Navigation;