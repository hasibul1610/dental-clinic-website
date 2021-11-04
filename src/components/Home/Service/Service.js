import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { name, subName, image, price, key } = props.service;
    return (
        <Col>
            <div className="service-card">
                <div className="service-img">
                    <img width="375px" height="250px" src={image} alt="Service" />
                </div>
                <br />
                <div className="service-details">
                    <h4>{name}</h4>
                    <p>{subName}</p>
                    <h6 className="text-danger">Charge: ${price}</h6>
                </div>
                <div className="text-center">
                    <Link to={`/details/${key}`} >
                        <button className="common-btn">See Details</button>
                    </Link>
                </div>

            </div>
        </Col >
    );
};

export default Service;