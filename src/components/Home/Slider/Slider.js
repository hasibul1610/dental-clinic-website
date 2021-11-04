import { Carousel } from 'react-bootstrap';
import React from 'react';
import './Slider.css';


const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        style={{ "opacity": 0.7 }}
                        className="d-block w-100"
                        src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/slider-11.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption">
                        <h1>Our smiles speak themselves</h1>
                        <p>Donec augue urna, viverra sit amet libero ut, mollis pretium ante. Donec feugiat non dolor eu eleifend.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ "opacity": 0.7 }}
                        className="d-block w-100"
                        src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/slider-22.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h1>Specializing cosmetic dental surgery</h1>
                        <p>A talented team of dentists recognized for the high quality of their dental procedures</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ "opacity": 0.7 }}
                        className="d-block w-100"
                        src="https://thegenius.co/dentistry/live/wp-content/uploads/2015/10/slider-31.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className="carousel-caption">
                        <h1>What is more IMPORTANT to you?</h1>
                        <p>A talented team of dentists recognized for the high quality of their dental procedures.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Slider;