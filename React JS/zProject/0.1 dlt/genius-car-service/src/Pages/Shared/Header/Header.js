import { signOut } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const home = useRef(null)

    // const scrollDemo = document.querySelectorAll("section");

    // const [scrollPosition, setScrollPosition] = useState(0);
    // const handleScroll = () => {
    //     const position = window.pageYOffset;
    //     setScrollPosition(position);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);



    // const output = document.querySelector(".output");

    // scrollDemo.addEventListener("scroll", () => {
    //     output.innerHTML = `scrollTop: ${scrollDemo.scrollTop}`;
    // }, { passive: true });

    // console.log(scrollDemo);

    console.log(null);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#experts">Experts</Nav.Link>


                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="/Addservice">Add Something</Nav.Link>
                                    <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                    <Nav.Link as={Link} to="/orders">orders</Nav.Link>

                                </>
                            }
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;