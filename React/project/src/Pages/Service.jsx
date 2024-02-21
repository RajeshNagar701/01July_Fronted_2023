import React from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'

function Service() {
    return (
        <div>
            <Header2 title="Service"/>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                        <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-shield-alt text-white" />
                                </div>
                                <h4 className="mb-3">Cyber Security</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-chart-pie text-white" />
                                </div>
                                <h4 className="mb-3">Data Analytics</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-code text-white" />
                                </div>
                                <h4 className="mb-3">Web Development</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fab fa-android text-white" />
                                </div>
                                <h4 className="mb-3">Apps Development</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div className="service-icon">
                                    <i className="fa fa-search text-white" />
                                </div>
                                <h4 className="mb-3">SEO Optimization</h4>
                                <p className="m-0">Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed</p>
                                <a className="btn btn-lg btn-primary rounded" href>
                                    <i className="bi bi-arrow-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 className="text-white mb-3">Call Us For Quote</h3>
                                <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                                <h2 className="text-white mb-0">+012 345 6789</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            {/* Testimonial Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                        <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="website/img/testimonial-1.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="website/img/testimonial-2.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="website/img/testimonial-3.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                        <div className="testimonial-item bg-light my-4">
                            <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                <img className="img-fluid rounded" src="website/img/testimonial-4.jpg" style={{ width: 60, height: 60 }} />
                                <div className="ps-4">
                                    <h4 className="text-primary mb-1">Client Name</h4>
                                    <small className="text-uppercase">Profession</small>
                                </div>
                            </div>
                            <div className="pt-4 pb-5 px-5">
                                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Service