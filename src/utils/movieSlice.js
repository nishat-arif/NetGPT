import { createSlice } from "@reduxjs/toolkit"

const movies = createSlice({
    name: "movies",

    initialState:
        {maintrailerMovie : null,
        nowPlayingMovies :null,
        popularMovies : null,
        topRatedMovies :null,
        upcomingMovies: null
        }
    ,

    reducers:{
        addMainTrailerMovie:(state, action)=>{
            state.maintrailerMovie = action.payload

        },
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload

        },

        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload

        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload

        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload

        }

        }
    }

)

export const {addMainTrailerMovie , addNowPlayingMovies, addPopularMovies, addTopRatedMovies,addUpcomingMovies} = movies.actions
export default movies.reducer