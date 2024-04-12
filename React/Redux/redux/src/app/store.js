
/*
Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. 
We'll start by creating an empty Redux store, and exporting it:
*/

import { configureStore } from '@reduxjs/toolkit'
import Cart_reducer  from '../features/Cart/Cart_reducer'


export default configureStore({
  reducer: {
    cart:Cart_reducer
  }
})