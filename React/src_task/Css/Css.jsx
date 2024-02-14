import React from 'react'

// normal css import
import './style1.css';
import './style2.css';

function Css() {

const mystyle={color:"pink",backgroundColor:"red"}

  return (
    <div>
        <h1 style={{color:"red",backgroundColor:"yellow"}}>Inline</h1>
        <h1 style={mystyle}>Internal</h1>
        <h1 className='bigblue'>External</h1>
    </div>
  )
}

export default Css