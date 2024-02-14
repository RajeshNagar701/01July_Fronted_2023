/*

For lifecycle in Function component

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)


Life Cycle in Func Compo


new hooks introduced useEffect() work as three life cycle

Didmount
useEffect(()=>{
    console.log('didmount');
  },[]);

DidUpdate
useEffect(()=>{
    console.log('didmount/Update');
  },[number]);

WillUnmount
useEffect(()=>{
      return()=>{console.log('Component destroy');} // work when component destroy 
  },[]);





*/



import React, { useState,useEffect } from 'react'
import Img_func_life from './Img_func_life';

function Func_life() {


 

  const [name, setName] = useState("Rajesh Nagar"); // single 

  // mutltiple property object
  const [data, setData] = useState({
    email: "raj@gmail.com",
    age: 32,
    number: 1,
    isImage: false
  })

  useEffect(()=>{
    console.log(' component DidMount/Update '); // component load
  },[data.number]);



  return (
    <div>
      <button onClick={() => setName('Akash Nagar')}>change</button>
      <h1>{name}</h1>

      <hr />
      <button onClick={() => { setData({ ...data, email: "rajeshnagar@gmail.com", age: 34 }) }}>change</button>
      <h1>Hi my email is : {data.email} and my age is : {data.age}</h1>
      <hr />

      <button onClick={() => setData({ ...data, number: data.number + 1 })}>+</button>
      <h1>{data.number}</h1>
      <button onClick={() => setData({ ...data, number: data.number - 1 })}>+</button>

      <hr />

      <button onClick={() => setData({ ...data, isImage: false })}>Hide</button>
      <button onClick={() => setData({ ...data, isImage: true })}>Show</button>
      <button onClick={() => setData({ ...data, isImage: !data.isImage })}>Hide/Show</button>
      {data.isImage ? <Img_func_life /> : null}

    </div>
  )
}

export default Func_life