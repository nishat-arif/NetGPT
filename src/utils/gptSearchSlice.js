import { createSlice } from "@reduxjs/toolkit"

const gptSearch = createSlice({
    name: "gptSearch",

    initialState: {
        lang: "eng",
        showGptSearch : false,
        gptMovieSuggestions : null,
        movieResults : null

    },

    reducers:{
        toggleGptSearchPage : (state, actions)=>{
            state.showGptSearch = !(state.showGptSearch)

        },

        changeLanguage : (state, actions) => {
            state.lang = actions.payload
            
        }, 
        addGptMovieResult:(state,action)=>{
            const { gptMovieSuggestions, movieResults } = action.payload;
            state.gptMovieSuggestions = gptMovieSuggestions
            state.movieResults = movieResults

        }
    }
})

export const {toggleGptSearchPage , changeLanguage ,addGptMovieResult} = gptSearch.actions
export default gptSearch.reducer