import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="gallery-container">
            <Container>
                <Row>
                    <Col className=" d-flex align-items-center justify-content-center" sm={6}>
                        <img className="img-fluid w-50" src="https://thegenius.co/dentistry/live2/wp-content/uploads/2016/07/before-after-box.jpg" alt="" />
                    </Col>
                    <Col sm={6}>
                        <h2 className=" my-3">Our Patient Before after Gallery</h2>
                        <p className=" my-3">We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients.Pibs short ribs filet mignon doner pork loin. Shankle porchetta drumstick landjaeger t-bone picanha boudin kielbasa ball tip ground round</p>
                        <button className="common-btn my-3">View Gallery</button>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Gallery;