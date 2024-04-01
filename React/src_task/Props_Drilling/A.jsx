/*
State should be held by the highest parent component in the stack that requires access 
to the state.

To illustrate, we have many nested components. The components at the top and bottom of the 
stack need access to the state.

To do this without Context, we will need to pass the state as "props" through each nested 
component. This is called "prop  drilling" .

Problem : Even though components A to E , b,c,d did not need the state, 
they had to pass the state along so that it could reach component E.


SOLUTION : useContext / createContext

*/

import React, { useState } from 'react'
import B from './B'

function A() {
   const [number,setNumber]=useState(0);
  return (
    <div className='container mt-5'>
        <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>Hi i am A  : {number}</h1>
        <B number={number} setNumber={setNumber}/>
    </div>
  )
}

export default A