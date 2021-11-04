import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './Doctors.css';


const Doctors = () => {
    return (
        <div>
            <h1 className="text-center my-5">Highly Qualified Dentists</h1>
            <p className="text-center my-3">We have built our dentistry over the strong pillars of 22 MDS surgeons. Our team has expert professionals who are immensely experienced for several years.</p>
            <br />

            <Container>
                <Row xs={1} md={3}>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/pZ4DVkb/doctor-pic-1.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Richard Seth</h4>
                                <h5>DMD, MSC</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/wKXtQBG/doctor-pic-2.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>John Doe</h4>
                                <h5>MSC</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/vBgD6pp/doctor-pic-3.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Niyen Huk</h4>
                                <h5>Denturist</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/JpD1tfq/doctor-pic-4.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Soim Hicks</h4>
                                <h5>Dental Care Cordinator</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/dP3qQ3n/doctor-pic-5.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Helen Tores</h4>
                                <h5>DMD, MSC</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/X8BW0Dn/doctor-pic-6.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Lee Joo </h4>
                                <h5>Dental Hygienist</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/Lhfhx8K/doctor-pic-7.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Robert Worley</h4>
                                <h5>Dental Hygienist</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/pPVjS03/doctor-pic-8.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>Judy Nadel</h4>
                                <h5>DMD, MSC</h5>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="doctor-card">
                            <div className="doctor-img">
                                <img width="350px" src="https://i.ibb.co/3v3mWF0/doctor-pic-9.jpg" alt="Doctor" />
                            </div>
                            <br />
                            <div className="doctor-details">
                                <h4>RJames Roo </h4>
                                <h5>Denturist</h5>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default Doctors;