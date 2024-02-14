import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function About() {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                            <h1>About Us</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About