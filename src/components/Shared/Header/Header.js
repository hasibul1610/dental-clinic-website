import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from "../../../images/logo.png";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Navbar bg="light" expand="lg" fixed="top">
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
                            {
                                user.email ?
                                    <button className="btn btn-outline-primary mx-3" onClick={logOut}>Logout</button>
                                    : <NavLink
                                        to="/login"
                                        style={{
                                            textDecoration: "none",
                                            fontSize: "20px",
                                            marginLeft: "15px",
                                            color: "tomato"
                                        }}
                                        activeStyle={{
                                            fontWeight: "bold",
                                            color: "#3FCE92"
                                        }}
                                    >
                                        Login
                                    </NavLink>
                            }

                            {user.email && <span>Hello {user.displayName}</span>}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;