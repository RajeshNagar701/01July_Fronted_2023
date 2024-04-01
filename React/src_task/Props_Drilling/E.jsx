import React from 'react'

function E({number,setNumber}) {

  return (
    <div>
         <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>Hi i am E : {number}</h1>
    </div>
  )
}

export default E