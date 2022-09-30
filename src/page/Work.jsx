import React from 'react'
import Work1 from '../assets/images/work-1.jpg'
import Work2 from '../assets/images/work-2.jpg'
import Work3 from '../assets/images/work-3.jpg'

function Work() {
    return (
        <div className="ds-work-section">
            <div className="container">
                <h2 className="ds-heading">Latest works</h2>
                <div className="ds-work-list-section">
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">PaySprint</h3>
                                    <p>Safe and Secure
                                        Way to Send and Receive Money from over 100 Countries at no cost.
                                        Money Received Instantly, No hidden fees.</p>
                                    <a href="https://paysprint.ca" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work1} /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">1minutePay</h3>
                                    <p>Making Money in the Digital Space doesn’t have to be slow.
                                        Get your transactions done and receive Payments in as quick as One Minute. </p>
                                    <a href="https://www.1minutepay.com" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work2} /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">Busy Wrench by VIMfile</h3>
                                    <p>Auto Repair Shop Management Software Busy Wrench by VIMfile was designed to connect your shop with vehicle owners looking for qualified, reliable, and professional mechanics nearby.Keep your shop busy with all the tools you need to manage the business profitably. </p>
                                    <a href="https://vimfile.com" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work3} /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">Becued</h3>
                                    <p>Get personalized videos from your favourite celebs. Shout out from your faves
                                        We know how much you’ll love to meet those who inspire you and now we have brought them closer.</p>
                                    <a href="https://www.becued.com/" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work1} /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">RTO Home Web</h3>
                                    <p>Home Ownership Made Easy. You can now Rent-To-Own (RTO) a Property in Canada & US. </p>
                                    <a href="https://www.rtohomeweb.com/" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work2} /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="ds-work-list">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                                <section>
                                    <h3 className="ds-work-tilte">Eurexblaze Fitness</h3>
                                    <p>Fitness organization which deals with the planning, designing and implementation of structured, suitable, fun and effective dance and fitness programmes, meal plans and providing advisory/consultancy services to ensure that individuals achieve optimum health. </p>
                                    <a href="https://eurexblaze.com/" className="ds-button">Details</a>
                                </section>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
                                <figure><img alt='workexperience' src={Work3} /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work