import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/movieSlice"
import gptSearchReducer from "../utils/gptSearchSlice"

const appStore = configureStore({

    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gptSearch: gptSearchReducer,
    }

}
)

export default appStore