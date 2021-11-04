import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { id } = useParams();


    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState({});

    useEffect(() => {
        fetch('/dentalServices.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    useEffect(() => {
        if (details.length > 0) {
            const matchedData = details.find(detail => detail.key == id)
            setSpecificDetails(matchedData);
        }
    }, [details])

    return (
        <div className="mt-5 pt-3">

            <Container>
                <h2 className="text-center my-5">Details Of <span className="text-danger">{specificDetails.name}</span></h2>
                <div className="row">
                    <div className="col-lg-8">

                        <div className="details-img-container">
                            <img className="img-fluid details-img" src={specificDetails.image2} alt="" />
                        </div>
                        <h3 className="my-3">Treatment Name: {specificDetails.name}</h3>
                        <h4 className="my-3 text-danger">Cost of the Treatment : ${specificDetails.price}</h4>
                        <p className="my-5">{specificDetails.description}</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="details-right mb-4">
                            <h2 className="text-danger">Contact Us</h2>
                            <h3 className="text-primary">+8801765471227</h3>
                        </div>
                        <div className="details-right mb-4">
                            <h2 className="text-danger">Have a Question?</h2>
                            <p>We get lot s of mail and always want to answer your inquirieis go to FAQ'S</p>
                        </div>
                        <div className="details-right mb-4">
                            <h2 className="text-danger">Are You New Patient?</h2>
                            <p>We encourage our new patients to arrive 15 minutes earlier than their scheduled appointment time.</p>
                        </div>
                        <div className="details-right mb-4">
                            <h2 className="text-danger">Make An Appointment</h2>
                            <p>Find a Doctor and book appointments online instantly or Make Call</p>
                        </div>

                    </div>
                </div>


            </Container>

        </div>
    );
};

export default Details;