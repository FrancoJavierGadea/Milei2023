'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";

import styles from "./Navigation.module.css";

function Navigation() {

    const pathname = usePathname();

    const [title, setTitle] = useState(null);

    useEffect(() => {

        let title = pathname.slice(1).replaceAll('-', ' ');

        title = decodeURI(title);

        setTitle(title);
        
    }, [pathname]);

    return (<Navbar variant="dark" expand="lg" >
        <Container>

            <div className="d-flex align-items-center">
                <Navbar.Brand href="/" as={Link}>
                    <Image src="/white-logo-2.png" width={120} height={70} style={{objectFit: 'scale-down'}} alt="nav logo"/>

                </Navbar.Brand>

                {title && <h2 className={styles.Path_title}>{title}</h2>}
            </div>


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto" activeKey={decodeURI(pathname)}>
                    <Nav.Link href="/" as={Link}>Inicio</Nav.Link>
                    <Nav.Link href="/campaña" as={Link}>Campaña</Nav.Link>
                    <Nav.Link href="/sobre-mi" as={Link}>Sobre mi</Nav.Link>
                </Nav>
            </Navbar.Collapse>   

        </Container>
    </Navbar>);
}

export default Navigation;