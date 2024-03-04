import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'

function Manage_product() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
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
                                <h2>Manage Product </h2>
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
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
                                                        <td>{value.prod_name}</td>
                                                        <td>{value.desc}</td>
                                                        <td>{value.price}</td>
                                                        <td>{value.img}</td>
                                                        <td>
                                                            <button className='btn btn-primary'>Edit</button>
                                                            <button className='btn btn-danger'  onClick={()=>deleteHandel(value.id)}>Delete</button>
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

export default Manage_product