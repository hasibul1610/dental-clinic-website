import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <img className="img-fluid" src="https://thegenius.co/dentistry/live/wp-content/uploads/2016/02/Dental_clinic.jpg" alt="" />
                <br />
                <h2 className="text-center my-4">There are Good Reason to Visit Our Clinic</h2>
                <h5 className="text-center my-4">Dentistry was founded in 2005 by john sinha with the vision of developing high quality and affordable health care infrastructure Chicago,Newyork and California.</h5>
                <p className="text-center my-4">We offer the entire range of dental treatments and procedures at transparent and printed prices standards for all patients. We are a chain of dental clinics.We are offering specialized treatment by experienced doctor who have care about before and after the treatment.</p>
            </Container>
        </div>
    );
};

export default About;