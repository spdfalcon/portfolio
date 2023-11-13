import { configureStore } from "@reduxjs/toolkit";
import portfoliosReducer from './store/portfolio'
import menuReducer from './store/menu'
import projectReducer from './store/projects'
import usersReducer from './store/users'
const store = configureStore({
    reducer:{
        portfolios:portfoliosReducer,
        menu:menuReducer,
        projects:projectReducer,
        users:usersReducer
    }
})

export default store