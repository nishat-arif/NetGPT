import { OPTIONS } from "../utils/config"
import { useDispatch} from "react-redux";
import { addMainTrailerMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useMainTrailer =async(id)=>{

    const dispatch = useDispatch();


     const getTrailerMovie = async() =>{
          
            const data = await fetch('https://api.themoviedb.org/3/movie/' + id +'/videos?language=en-US', OPTIONS)

            const json_data = await data.json()

            const filterData = json_data.results.filter((video) => video.type === "Trailer");
            const trailer = filterData.length ? filterData[0] : json_data.results[0];
    

            dispatch(addMainTrailerMovie(trailer))
    
        }
    
    
        useEffect(()=>{
            getTrailerMovie();   
            },[])

}

export default useMainTrailer