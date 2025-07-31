const GptSearchBar = () => {
    return (<div className="py-[8%]">
        <form className="w-full bg-black py-4 w-[80%] mx-auto flex justify-center rounded-md ">
            <input type="text" placeholder="Hey, What do you want to watch today?" className="rounded-md  m-2 p-2 bg-slate-200 w-[50%]">
            </input>
            <button  className="bg-red-800 rounded-md m-2 p-2 font-semibold text-white">Search</button>
        </form>
    </div>)
}

export default GptSearchBar;