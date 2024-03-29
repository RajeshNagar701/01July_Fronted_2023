import React from 'react'
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'

function Team() {
    return (
        <div>
            <Header2 title="Team"/>
            {/* Team Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                        <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                        <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="website/img/team-1.jpg" alt />
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="website/img/team-2.jpg" alt />
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                            <div className="team-item bg-light rounded overflow-hidden">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="website/img/team-3.jpg" alt />
                                    <div className="team-social">
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                        <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h4 className="text-primary">Full Name</h4>
                                    <p className="text-uppercase m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
  
            <Footer/>
        </div>

    )
}

export default Team