
// useReducer  == createSlice

import { createSlice } from '@reduxjs/toolkit'

export const Cart_reducer=createSlice({
    name:'cart',
    initialState: {
        name:"Rajesh nagar",
        number: 0,
        isImage:true
      },
    reducers:{
        change:(state)=>{
            return {...state,name:"Akash nagar"};
        },
        plus:(state)=>{
             state.number += 1
        },
        minus:(state)=>{
             state.number -= 1
        },
        hide:(state)=>{
            return {...state,isImage:false};
        },
        show:(state)=>{
            return {...state,isImage:true};
        },
        toggle:(state)=>{
            return {...state,isImage:!state.isImage};
        },
    }  
})

export const { change, plus, minus, hide, show,toggle } = Cart_reducer.actions

export default Cart_reducer.reducer