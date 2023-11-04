import { configureStore } from "@reduxjs/toolkit";
import portfoliosReducer from './store/portfolio'
import menuReducer from './store/menu'
import projectReducer from './store/projects'
const store = configureStore({
    reducer:{
        portfolios:portfoliosReducer,
        menu:menuReducer,
        projects:projectReducer
    }
})

export default store