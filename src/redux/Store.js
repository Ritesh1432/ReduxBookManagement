import { configureStore } from "@reduxjs/toolkit";

import bookreducer from './BookReducerSlice'

export default configureStore({
    reducer:{
        bookreducer
    }
})