import loginReducer from './loginSlice';
import shoppingReducer from './shoppingSLice';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        login:loginReducer,
        shopping:shoppingReducer
    }
})

export default store;