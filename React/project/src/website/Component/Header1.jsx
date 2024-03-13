import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header1() {

    const redirect=useNavigate();
    const userlogout=()=>{
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success ');
        redirect('/');
        return false;    
    }

    return (
        <div>

            <Helmet>
                <link href="website/img/favicon.ico" rel="icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                <link href="website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="website/lib/animate/animate.min.css" rel="stylesheet" />
                <link href="website/css/bootstrap.min.css" rel="stylesheet" />
                <link href="website/css/style.css" rel="stylesheet" />

                <script src="%BASE_URL%/website/lib/easing/easing.min.js"></script>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="%BASE_URL%/website/lib/wow/wow.min.js"></script>

                <script src="%BASE_URL%/website/lib/waypoints/waypoints.min.js"></script>
                <script src="%BASE_URL%/website/lib/counterup/counterup.min.js"></script>
                <script src="%BASE_URL%/website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="%BASE_URL%/website/js/main.js"></script>
            </Helmet>



            {/* Spinner Start 
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner" />
            </div>
            */}
            {/* Spinner End */}
            {/* Topbar Start */}
            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                            {(
                                () => {
                                    if (localStorage.getItem('uid')) {
                                        return (
                                            <small className="text-light"><i className="fa fa-user ms-5 me-2" />Hi.. {localStorage.getItem('uname')}</small>
                                        )
                                    }
                                }
                            )()}

                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Carousel Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <NavLink to="/" className="navbar-brand p-0">
                        <h1 className="m-0"><i className="fa fa-user-tie me-2" />Startup</h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/blog" className="dropdown-item">Blog Grid</NavLink>
                                    <NavLink to="/detail" className="dropdown-item">Blog Detail</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
                                    <NavLink to="/feature" className="dropdown-item">Our features</NavLink>
                                    <NavLink to="/team" className="dropdown-item">Team Members</NavLink>
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                    <NavLink to="/quote" className="dropdown-item">Free Quote</NavLink>
                                </div>
                            </div>
                            <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>
                        {(
                            () => {
                                if (localStorage.getItem('uid')) {
                                    return (
                                        <a href="javascript:void(0)" onClick={userlogout} className="btn btn-primary py-2 px-4 ms-3">Logout</a>
                                    )
                                }
                                else {
                                    return (
                                        <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">Login</Link>
                                    )
                                }
                            }
                        )()}
                        
                    </div>
                </nav>
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="website/img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
                                    <NavLink to="/quote" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</NavLink>
                                    <NavLink to="/contact" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="website/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative &amp; Innovative</h5>
                                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative &amp; Innovative Digital Solution</h1>
                                    <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                                    <a href className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Navbar & Carousel End */}
            {/* Full Screen Search Start */}
            <div className="modal fade" id="searchModal" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: 600 }}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Header1