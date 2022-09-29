import React from "react";
import ProfileImage from '../assets/images/profile-image.jpeg';

function Banner() {
    return (
        <div className="ds-banner">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                        <figure>
                            <img src={ProfileImage} alt="profile_image" />
                        </figure>
                    </div>
                    <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                        <section>
                            <h1>
                                <span>HI THERE</span>
                                I’m Adebambo Adenuga <br /> FULL-STACK WEB DEVELOPER based in Lagos, Nigeria.
                            </h1>
                            <ul className="ds-numbervalulist">
                                <li>
                                    <strong>{new Date().getFullYear() - 2018}+</strong>
                                    <span>Experience</span>
                                </li>
                                <li>
                                    <strong>15+</strong>
                                    <span>Projects</span>
                                </li>
                                <li>
                                    <strong>10</strong>
                                    <span>Happy Clients</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;