import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        data:[],
        name:"Raj nagar"
    },
    reducers: {
      
    },
  })
  
  export const {  } = userSlice.actions
  
  export default userSlice.reducer