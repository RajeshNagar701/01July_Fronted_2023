import React from 'react'
import { Helmet } from 'react-helmet'

function Afooter() {
    return (
        <div>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-12">
                        ©  2014 yourdomain.com | Design by: <a href="http://binarytheme.com" style={{ color: '#fff' }} target="_blank">www.binarytheme.com</a>
                    </div>
                </div>
            </div>
            <Helmet>
                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.min.js"></script>
                <script src="admin/assets/js/custom.js"></script>
            </Helmet>
        </div>
    )
}

export default Afooter