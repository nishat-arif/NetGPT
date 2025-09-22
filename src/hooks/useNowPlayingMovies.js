import { useEffect } from "react";
import { OPTIONS } from "../utils/config"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useNowPlayingMovies = () =>{

    const dispatch = useDispatch();

    const getNowPlayingMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', OPTIONS)
        const json_data = await data.json();

        dispatch(addNowPlayingMovies(json_data.results))

    }


    useEffect(()=>{
        getNowPlayingMovies();   
        },[])

}

