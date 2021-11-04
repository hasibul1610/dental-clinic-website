import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from "../../../images/logo.png";

const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" />

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink
                                to="/home"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3FCE92"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3FCE92"
                                }}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/doctors"
                                style={{
                                    textDecoration: "none",
                                    fontSize: "20px",
                                    marginLeft: "15px",
                                    color: "#234262"
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#3FCE92"
                                }}
                            >
                                Doctors
                            </NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;