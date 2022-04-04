import { configureStore } from '@reduxjs/toolkit'; 
import { createWrapper } from "next-redux-wrapper"; 
import logger from 'redux-logger'; 
import rootReducer from 'store/basic/counterReducer'; 
const makeStore = () => 
    configureStore({
     reducer: rootReducer, 
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), 
     //devTools: process.env.NODE_ENV !== 'production', 
}); 
export default createWrapper(makeStore);