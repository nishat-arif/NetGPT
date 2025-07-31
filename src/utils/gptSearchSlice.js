import { createSlice } from "@reduxjs/toolkit"

const gptSearch = createSlice({
    name: "gptSearch",

    initialState: {
        lang: "eng",
        showGptSearch : false
    },

    reducers:{
        toggleGptSearchPage : (state, actions)=>{
            state.showGptSearch = !(state.showGptSearch)

        },

        changeLanguage : (state, actions) => {
            state.lang = actions.payload
            
        }
    }
})

export const {toggleGptSearchPage , changeLanguage} = gptSearch.actions
export default gptSearch.reducer