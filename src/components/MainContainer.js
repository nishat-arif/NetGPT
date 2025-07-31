import { useSelector } from "react-redux"
import VideoText from "./VideoText"
import VideoTrailer from "./VideoTrailer"

const MainContainer = () =>{

    const moviesList = useSelector(store=>store?.movies?.nowPlayingMovies)

    if (!moviesList) return;

 

    const mainMovie = moviesList[0];

      

    const {id , overview , original_title, poster_path} = mainMovie

    
    return (<div className="pt-[30%] md:pt-0">
        <VideoText id={id} overview={overview} title={original_title} posterPath={poster_path}/>
        <VideoTrailer id={id}  />
    </div>)
}

export default MainContainer