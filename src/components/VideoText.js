const VideoText = ({id, overview, title, posterPath}) =>{

    return (<div className="w-screen aspect-video pt-[30%] px-20 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>     
        <button className="bg-white hover:bg-slate-400 text-black px-6 py-2 mr-2 text-lg font-bold rounded-md">Play</button>
        <button className="bg-white hover:bg-slate-400 text-black px-6 py-2 text-lg font-bold rounded-md">More Info</button>
    </div>)

}

export default VideoText;