import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/config";

const useUpcomingMovies = ()=>{


    const dispatch = useDispatch()

    const getUpcomingMovies = () =>{

        fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPTIONS)
        .then(res => res.json())
        .then(res => dispatch(addUpcomingMovies(res.results)))
        .catch(err => console.error(err));
    

    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;