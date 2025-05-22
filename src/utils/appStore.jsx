import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

// Configure and create the Redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,     
    movies: moviesReducer, 
    gpt: gptReducer,   
    config:configReducer,  
  },
});

export default appStore;
