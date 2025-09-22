import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/config";

const usePopularMovies = ()=>{


    const dispatch = useDispatch()

    const getPopularMovies = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', OPTIONS)

        const json_data = await data.json()
        dispatch(addPopularMovies(json_data.results))

    }

    useEffect(()=>{
        getPopularMovies();
    },[])
}

export default usePopularMovies