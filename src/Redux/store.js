import { configureStore } from "@reduxjs/toolkit";
import portfoliosReducer from './store/portfolio'
import menuReducer from './store/menu'
const store = configureStore({
    reducer:{
        portfolios:portfoliosReducer,
        menu:menuReducer
    }
})

export default store