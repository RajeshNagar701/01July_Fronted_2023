import React from 'react'
import { useSelector, useDispatch } from 'react-redux'  // use from get any state from store
import { change,plus,minus } from './Cart_reducer'


function Cart() {

  const dispatch=useDispatch();
  const { name, number } = useSelector((state) => state.cart)
  
  return (
    <div className='container mt-5'>

      <button onClick={()=>dispatch(change())}>Change</button>
      <h1>{name}</h1>

      <hr />

      <button onClick={()=>dispatch(plus())}>+</button>
      <h1>{number}</h1>
      <button onClick={()=>dispatch(minus())}>-</button>

      <hr />

    </div>
  )
}

export default Cart

