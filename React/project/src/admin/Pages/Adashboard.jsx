import React from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'

function Adashboard() {
    return (
        <>
        <div id="wrapper">
            <Aheader/>
            {/* /. NAV SIDE  */}
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Admin Dashboard </h2>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <hr />
                    {/* /. ROW  */}
                </div>
                {/* /. PAGE INNER  */}
            </div>
            {/* /. PAGE WRAPPER  */}
        </div>
        <Afooter/>
        </>
    )
}

export default Adashboard