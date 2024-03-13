import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'

function Aheader1() {
    return (
        <div>
             <Helmet>
                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/custom.css" rel="stylesheet" />
                <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
               
                <script src="%BASE_URL%/admin/assets/js/jquery-1.10.2.js"></script>
                <script src="%BASE_URL%/admin/assets/js/bootstrap.min.js"></script>
                <script src="%BASE_URL%/admin/assets/js/custom.js"></script>


            </Helmet>
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="adjust-nav">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="admin/assets/img/logo.png" />
                        </a>
                    </div>
                </div>
            </div>
            {/* /. NAV TOP  */}
            
           
        </div>
    )
}

export default Aheader1