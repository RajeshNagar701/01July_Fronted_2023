import React from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'

function Testimonial() {
    return (
        <div>
            <Header2 title="Testimonial"/>
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

export default Testimonial