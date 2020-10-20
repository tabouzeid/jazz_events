import React from "react";
import FadeIn from 'react-fade-in';
import JazzOne from "../../assets/jazz_image_one.jpg";
import JazzTwo from "../../assets/jazz_image_two.jpg";
import JazzThree from "../../assets/jazz_image_three.jpg";
import JazzFour from "../../assets/jazz_image_four.jpg";


export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel cycle carousel-fade mx-auto col-7 my-4" data-ride="carousel">
            {/* first Slide */}
            <div className="carousel-inner">
                <div className="carousel-item active pb-0">
                    <img src={JazzTwo} className="d-block w-100 pb-0" alt="Welcome to bones." />
                </div>

                {/* Second Slide */}
                <div className="carousel-item mx-auto">
                    <img src={JazzOne} className="d-block w-100" alt="the source" />
                </div>

                {/* Third Slide */}
                <div className="carousel-item">
                    <img src={JazzThree} className="d-block w-100" alt="for new york city" />
                </div>

                {/* Four Slide */}
                <div className="carousel-item mx-auto">
                    <img src={JazzFour} className="d-block w-100" alt="jazz" />
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>

    )
}



