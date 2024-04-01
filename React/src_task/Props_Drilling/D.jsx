import React from 'react'
import E from './E'

function D({number,setNumber}) {
  return (
    <div>
        <h1>Hi i am D </h1>
        <E number={number} setNumber={setNumber}/>
    </div>
  )
}

export default D