import React from 'react'
import D from './D'

function C({number,setNumber}) {
  return (
    <div>
        <h1>Hi i am C </h1>
        <D number={number} setNumber={setNumber}/>
    </div>
  )
}

export default C