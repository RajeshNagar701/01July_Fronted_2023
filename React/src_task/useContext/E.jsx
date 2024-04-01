import React, { useContext } from 'react'
import { DataContext } from './A'

function E() {

  const {number,setNumber}=useContext(DataContext);
  return (
    <div>
         <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>Hi i am E : {number}</h1>
    </div>
  )
}

export default E