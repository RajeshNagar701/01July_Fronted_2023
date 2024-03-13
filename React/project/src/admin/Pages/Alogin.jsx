import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Aheader1 from '../Component/Aheader1';
import Afooter1 from '../Component/Afooter1';


function Alogin() {

  const redirect=useNavigate();
    
  useEffect(()=>{
      if(localStorage.getItem('uid'))
      {
          return redirect('/')
      }
  },[]);
  
  const [formvalue,setFormvalue]=useState({
      name: "",
      email: "",
   });   
   const changeHandel=(e)=>{
      setFormvalue({...formvalue,[e.target.name]:e.target.value});
      console.log(formvalue);
   }
  
  function validation()
  {
      var res=true;
     
      if(formvalue.email=="")
      {
          toast.error("Email Field is required !");
          res=false;
          return false;
      }
      if(formvalue.password=="")
      {
          toast.error("Password Field is required !");
          res=false;
          return false;
      }
      
      return res;
  } 

  const submitHandel=async(e)=>{
    e.preventDefault(); // not reload page
    if(validation())
    {
        const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
        console.log(res);
        if(res.data.length>0)
        {
            if(res.data[0].password==formvalue.password)
            {
                if(res.data[0].status=="Unblock")
                {
                    // session create
                    localStorage.setItem('uid',res.data[0].id);
                    localStorage.setItem('uname',res.data[0].name);
                    
                    redirect('/dashboard');
                    toast.success('Login Success ');
                    return false;     
                }
                else
                {
                    setFormvalue({...formvalue,email:"",password:""});
                    toast.error('Accout Blocked ');
                    return false;
                }  
            }
            else
            {
                setFormvalue({...formvalue,email:"",password:""});
                toast.error('Wrong password');
                return false;
            }
        }
        else
        {
            setFormvalue({...formvalue,email:"",password:""});
            toast.error('Email does not Exist');
            return false;
        }
       
    }
}

    return (
        <>
        <Aheader1/>
            <div id="wrapper">
                
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Admin Login</h2>
                                <form action="" method="post" onSubmit={submitHandel}>
                                    
                                        
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" value={formvalue.email} onChange={changeHandel} name="email"  className="form-control" placeholder="Enter Email"  />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="password" value={formvalue.password} onChange={changeHandel} name="password"  className="form-control" placeholder="Enter password"  />
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
         <Afooter1/>
        </>
    )
}

export default Alogin