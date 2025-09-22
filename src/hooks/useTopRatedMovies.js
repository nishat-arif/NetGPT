import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/config";

const useTopRatedMovies = ()=>{


    const dispatch = useDispatch()

    const getTopRatedMovies = async() =>{

        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPTIONS)

        const json_data = await data.json()
        dispatch(addTopRatedMovies(json_data.results))

    }

    useEffect(()=>{
        getTopRatedMovies();
    },[])


}


export default useTopRatedMovies