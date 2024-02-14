
/*

What is JSX?

JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

*/

import React from 'react'

import './style.css';


function Jsx_component() {

  const myElement = <h1>I Love JSX!</h1>;

  const myElement1 = <h1>I Love JSX! {5 + 5}</h1>;
  
  const multiElement=(
    <ul>
        <li>Raj</li>
        <li>Raj</li>
        <li>Raj</li>
    </ul>
  );
  
  const internal={color:'red',textTransform:"uppercase"}


  return (
    <div>
        <h1>Jsx_component</h1>
        {"raj nagar"}    
        <hr />

        {myElement}
        <hr />

        {myElement1}
        <hr />

        {multiElement}
        <hr />

        <h1>Style in jsx</h1>


        <h1 style={{color: 'red',backgroundColor:'yellow'}}>Hello i am inline css in jsx</h1>

        <hr />

        <h1 style={internal}>Hello i am internal css in jsx</h1>
        <h1 style={internal}>Hello i am internal css in jsx</h1>
        <h1 style={internal}>Hello i am internal css in jsx</h1>
        
        <hr />


        <h1 className='mydiv'>Hello i am external css in jsx</h1>
        <h1 class='mydiv'>Hello i am external css in jsx</h1>


    </div>
  )
}

export default Jsx_component