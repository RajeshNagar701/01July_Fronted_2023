import React from 'react'
import { useSelector, useDispatch } from 'react-redux'  // use from get any state from store
import { hide,show,toggle } from './Cart_reducer'
import Image from './Image';


function Toggle() {

    const dispatch=useDispatch();
    const { isImage } = useSelector((state) => state.cart)
    
    return (
        <div className='container mt-5'>
            <button onClick={() => dispatch(hide())}>Hide</button>
            <button onClick={() => dispatch(show())}>Show</button>
            <button onClick={() => dispatch(toggle())}>hide/Show</button>
           
            {isImage ? <Image/> : null }
        </div>
    )
}

export default Toggle