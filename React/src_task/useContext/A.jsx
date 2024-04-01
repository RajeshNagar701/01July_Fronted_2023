/*

Problem : Even though components A to E , b,c,d did not need the state, 
they had to pass the state along so that it could reach component E.
SOLUTION : useContext / createContext

React Context
React Context is a way to manage state globally.

It can be used together with the useState Hook to share state between deeply nested 
components more easily than with useState alone.

*/

import React, { useState,createContext } from 'react'
import B from './B'

export const DataContext=createContext();

function A() {
   const [number,setNumber]=useState(0);
  return (
    <div className='container mt-5'>
      <DataContext.Provider value={{number,setNumber}}>
        <button onClick={()=>setNumber(number+1)}>+</button>
        <h1>Hi i am A  : {number}</h1>
        <B number={number} setNumber={setNumber}/>
      </DataContext.Provider>  
    </div>
  )
}

export default A