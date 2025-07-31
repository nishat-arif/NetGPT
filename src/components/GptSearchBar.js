    import { useSelector } from 'react-redux';
    import { LANG } from '../utils/config';
    import { useRef } from 'react';
    import openai from '../utils/openai';
    import { OPTIONS } from "../utils/config"
    import { useDispatch } from "react-redux";
    import { addGptMovieResult} from "../utils/gptSearchSlice"

    

const GptSearchBar = () => {

    const searchText = useRef();
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.gptSearch.lang)

    const searchMovie = async (movie) => {
            const data = await fetch(
                "https://api.themoviedb.org/3/search/movie?query=" +
                movie + "&page=1",
                OPTIONS
            );
            const json = await data.json();
        
            return json.results;
            };

    const handleGptSearch =async()=>{
        console.log(searchText.current.value)


        const gptQuery =
        "Act as a Movie Recommendation system and suggest  movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
                                        messages: [{ role: "user", content: gptQuery }],
                                        model: "gpt-3.5-turbo",
                                        });

        if (!gptResults.choices) {
        // TODO: Write Error Handling
        }

        console.log(gptResults.choices?.[0]?.message?.content);
        const gptMovieSuggestions= gptResults.choices?.[0]?.message?.content.split(",");

        // For each suggested movie by gpt , call search API
        const promiseArray = gptMovieSuggestions.map((movie) => searchMovie(movie));
        //  will return [Promise, Promise, Promise, Promise, Promise]

        const movieResults = await Promise.all(promiseArray);

        console.log("movieResults",movieResults);

          dispatch(addGptMovieResult({ gptMovieSuggestions: gptMovieSuggestions, movieResults: movieResults }));

    }

    

    return (<div className="py-[8%]">
        <form className=" bg-black py-4 w-[70%] mx-auto flex justify-center rounded-md " onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" placeholder={LANG[langKey].placeholder} className="rounded-md  m-2 p-2 bg-slate-200 w-[50%]">
            </input>
          <button  className="bg-red-800 rounded-md m-2 p-2 font-semibold text-white" onClick={handleGptSearch}>{LANG[langKey].btnText} </button>
         
        </form>
    </div>)
}

export default GptSearchBar;