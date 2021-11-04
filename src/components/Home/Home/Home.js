import React from 'react';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;