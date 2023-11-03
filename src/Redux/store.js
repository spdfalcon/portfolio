import { configureStore } from "@reduxjs/toolkit";
import portfoliosReducer from './store/portfolio'

const store = configureStore({
    reducer:{
        portfolios:portfoliosReducer
    }
})

export default store