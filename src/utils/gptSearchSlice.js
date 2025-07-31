import { createSlice } from "@reduxjs/toolkit"

const gptSearch = createSlice({
    name: "gptSearch",

    initialState: {
        showGptSearch : false
    },

    reducers:{
        toggleGptSearchPage : (state, actions)=>{
            state.showGptSearch = !(state.showGptSearch)

        }
    }
})

export const {toggleGptSearchPage} = gptSearch.actions
export default gptSearch.reducer