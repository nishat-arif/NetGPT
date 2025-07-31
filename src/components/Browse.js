import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from 'react-redux';

const Browse=()=>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const gptSearchPg = useSelector(store=>store.gptSearch)


    return (<div>
                <Header/>
                {gptSearchPg.showGptSearch ? <GptSearchPage/> :<>
                                                        <MainContainer/>
                                                        <SecondaryContainer/>
                                                        </>}
                
            </div>)
}

export default Browse;