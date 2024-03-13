import React, { useEffect, useState } from 'react'
import axios from 'axios';

import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import { toast } from 'react-toastify';

function Manage_user() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/user/${id}`);
        toast.success('Delete success');
        fetch();
    }
    return (
        <>
            <div id="wrapper">
                <Aheader />
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Manage User </h2>
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.mobile}</td>
                                                        <td><img src={value.img} width="50px" alt="" /></td>
                                                        <td>
                                                            <button className='btn btn-primary'>Edit</button>
                                                            <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                            <button className='btn btn-success'>{value.status}</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
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
            <Afooter />
        </>
    )
}

export default Manage_user