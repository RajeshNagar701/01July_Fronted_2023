import React, { useEffect,useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify'
import { useDispatch , useSelector} from 'react-redux'

function Home() {
    
   const {name} =useSelector((state)=>state.user);
    

    return (
        <>
            <Header />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 align="center" className='mb-5'>Manage User</h2>
                        <Link to="/add_user" className='btn btn-primary float-end mb-5'>Add Data</Link>
                        <div className="container">
                            {name}
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Image</th>
                                        <th align="center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                               
                                </tbody>
                            </table>
                        </div>


                    </div>

                </div>
            </div>
           

            <Footer />
        </>

    )
}

export default Home