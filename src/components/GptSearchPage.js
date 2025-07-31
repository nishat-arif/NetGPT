import GptSearchBar from "./GptSearchBar"
import GptSearchBasedMovies from "./GptSearchBasedMovies"
import { backgroundImage } from '../utils/constants';

const GptSearchPage= () => {
    return (
        <>
      <div className="fixed -z-10">
        <img className="h-screen object-fill w-screen" src={backgroundImage} alt="background-image"  />
      </div>
      <div className="">
        <GptSearchBar />
        <GptSearchBasedMovies />
      </div>
    </>
    )
}

export default GptSearchPage