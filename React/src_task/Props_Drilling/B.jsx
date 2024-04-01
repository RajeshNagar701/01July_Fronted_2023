import React from 'react'
import C from './C'

function B({number,setNumber}) {
  return (
    <div>
        <h1>Hi i am B </h1>
        <C number={number} setNumber={setNumber}/>
    </div>
  )
}

export default B