import React,{useState} from 'react'
import Img_func_state from './Img_func_state';

function Func_state() {

 const [name,setName]=useState("Rajesh Nagar"); // single 

 // mutltiple property object
 const [data,setData]=useState({ 
    email:"raj@gmail.com",
    age:32,
    number:1,
    isImage:true
 })

  return (
    <div>
        <button onClick={()=>setName('Akash Nagar')}>change</button>
        <h1>{name}</h1>

        <hr />
        <button onClick={()=>{setData({...data,email:"rajeshnagar@gmail.com",age:34})}}>change</button>
        <h1>Hi my email is : {data.email} and my age is : {data.age}</h1>
        <hr />

        <button onClick={()=>setData({...data,number:data.number+1})}>+</button>
        <h1>{data.number}</h1>
        <button onClick={()=>setData({...data,number:data.number-1})}>+</button>

        <hr />

        <button onClick={()=>setData({...data,isImage:false})}>Hide</button>
        <button onClick={()=>setData({...data,isImage:true})}>Show</button>
        <button onClick={()=>setData({...data,isImage:!data.isImage})}>Hide/Show</button>
        {data.isImage? <Img_func_state/> : null}
        
    </div>
  )
}

export default Func_state