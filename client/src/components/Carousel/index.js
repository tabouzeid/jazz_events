import React from "react";
import FadeIn from 'react-fade-in';
import JazzOne from "../../assets/jazz_image_one.jpg";
import JazzTwo from "../../assets/jazz_image_two.jpg";
import JazzThree from "../../assets/jazz_image_three.jpg";
import JazzFour from "../../assets/jazz_image_four.jpg";


export default function Carousel() {

    return (<FadeIn>
        <div className="mx-auto h-25">
            <div id="carouselExampleCaptions" className="carousel cycle carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                {/* first Slide */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={JazzOne} className="d-block w-100" alt="pic" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    {/* Second Slide */}
                    <div className="carousel-item mx-auto">
                        <img src={JazzTwo} className="d-block w-100" alt="pic" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    {/* Third Slide */}
                    <div className="carousel-item">
                        <img src={JazzThree} className="d-block w-100" alt="pic" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    {/* Four Slide */}
                    <div className="carousel-item mx-auto">
                        <img src={JazzFour} className="d-block w-100" alt="pic" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
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
        </div>
    </FadeIn>
    )
}



