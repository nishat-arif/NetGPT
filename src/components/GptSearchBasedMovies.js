import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchBasedMovies = () => {
  const { gptMovieSuggestions, movieResults } = useSelector((store) => store.gptSearch);
  if (!movieResults) return null;

  return (
    <div className=" bg-black bg-cover text-white">
      <div>
        {gptMovieSuggestions?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};
export default GptSearchBasedMovies;