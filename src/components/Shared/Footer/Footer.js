import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Container>
                <Row xs={2} md={4}>
                    <Col>
                        <h4 className="text-white my-3">Our Service</h4>
                        <ul>
                            <li>Teeth Whitening</li>
                            <li>Gum Treatment</li>
                            <li>Sleep Apnea</li>
                            <li>Restorations</li>
                            <li>Smile Design</li>
                            <li>Root Canal</li>
                            <li>Implant Dentistry</li>
                            <li>Conscious Sedation</li>
                            <li>Orthodontics</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="text-white my-3">Our Doctors</h4>
                        <ul>
                            <li>Richard Seth</li>
                            <li>John Deot</li>
                            <li>Naina Shah</li>
                            <li>Soim Hicks</li>
                            <li>Helena Torres</li>
                            <li>Martin Lee</li>
                            <li>Robert Worley</li>
                            <li>Judy Nadel</li>
                            <li>James Townsend</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4 className="text-white my-3">About Clinic</h4>
                        <ul>
                            <li>Our Clinic</li>
                            <li>JPhoto Gallery</li>
                            <li>Career</li>
                            <li>Testimonials</li>

                        </ul>
                    </Col>
                    <Col>
                        <h4 className="text-white my-3">Business Hours</h4>
                        <ul>
                            <li>Monday : 8:30 - 9:00</li>
                            <li>Tuesday : 8:00 - 9:00</li>
                            <li>Wednesday : 8:00 - 9:00</li>
                            <li>Thursday : 8:30 - 9:00</li>
                            <li>Friday : 10:00 - 4:00</li>
                            <li>Saturday : Closed</li>
                            <li>Sunday : Closed</li>
                        </ul>
                    </Col>


                </Row>
                <h2>Contact Us</h2>
                <Row xs={2} md={4}>
                    <Col>
                        <ul>
                            <li>28 Jackson BLVD STE 1020 Chicago, IL 60604-2340</li>

                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>+8801765471227</li>

                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>bcse.hasibul@gmail.com</li>


                        </ul>
                    </Col>
                    <Col>
                        <button className='common-btn'>GET EMERGENCY</button>
                    </Col>


                </Row>
                <br />
                <br />
                <hr />
                <p className='text-center my-3 pb-3'>Copyright 2021 || Designed By Md Hasibul Islam Shanto</p>
            </Container>

        </div>
    );
};

export default Footer;