import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'


function Add_product() {


    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_id: "",
        prod_name: "",
        desc: "",
        price: "",
        img: ""
    });


    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        const res = await axios.post(`http://localhost:3000/product`, formvalue);
        //console.log(res);
        setFormvalue({ ...formvalue, id: "", cate_id: "", prod_name: "", desc: "", price: "", img: "" });
        alert('Data insert success');
        return false;

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
                                <h2>Add Product</h2>
                                <form action="" method="post" onSubmit={submitHandel}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Categories Name:</label>
                                        <select onChange={changeHandel} name="cate_id" className="form-control" >
                                            <option value="">-----------  Select Product Categories -------------</option>
                                            {
                                                data && data.map((value, index, arr) => {
                                                    return (
                                                        <option value={value.id}>{value.cate_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Name:</label>
                                        <input type="text" value={formvalue.prod_name} onChange={changeHandel} name="prod_name"  className="form-control" placeholder="Enter Product Name"  />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Description:</label>
                                        <textarea  value={formvalue.desc} onChange={changeHandel} name="desc"  className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Price:</label>
                                        <input type="number" value={formvalue.price} onChange={changeHandel} name="price"  className="form-control" placeholder="Enter Product Price"  />
                                    </div>
                                    
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pwd" className="form-label">Image:</label>
                                        <input type="url" value={formvalue.img} onChange={changeHandel} name="img" className="form-control" placeholder="Enter Img url" />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                </form>

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

export default Add_product