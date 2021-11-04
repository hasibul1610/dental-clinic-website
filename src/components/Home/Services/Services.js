import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/dentalServices.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container>
            <h2 className="text-center my-5 py-3">Our Range of Dental Care Services</h2>
            <Row xs={1} md={3}>
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }

            </Row>
            <br />
            <br />

        </Container>

    );
};

export default Services;