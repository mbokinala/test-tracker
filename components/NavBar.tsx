import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { signIn, signOut, useSession } from "next-auth/client"

export default function NavBar() {
    const [session, loading] = useSession()
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">Testy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/testcases">Test Cases</Nav.Link>
                        <Nav.Link href="/runs">Runs</Nav.Link>
                        <NavDropdown title="Create" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/create/testcase">Create Testcase</NavDropdown.Item>
                            <NavDropdown.Item href="/create/run">Create Run</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}