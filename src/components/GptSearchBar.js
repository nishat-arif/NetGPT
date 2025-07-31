    import { useSelector } from 'react-redux';
    import { LANG } from '../utils/config';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.gptSearch.lang)

    return (<div className="py-[8%]">
        <form className=" bg-black py-4 w-[70%] mx-auto flex justify-center rounded-md " onSubmit={(e)=>e.preventDefault()}>
            <input type="text" placeholder={LANG[langKey].placeholder} className="rounded-md  m-2 p-2 bg-slate-200 w-[50%]">
            </input>
          <button  className="bg-red-800 rounded-md m-2 p-2 font-semibold text-white">{LANG[langKey].btnText} </button>
         
        </form>
    </div>)
}

export default GptSearchBar;