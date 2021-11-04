import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404-img.png';

const NotFound = () => {
    return (
        <div className="text-center">
            <img className="my-4" width="300px" src={notFoundImg} alt="" />
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
            <Link to="/home"><button className="common-btn">Back to Home</button></Link>
            <br />
            <br />
        </div>
    );
};

export default NotFound;