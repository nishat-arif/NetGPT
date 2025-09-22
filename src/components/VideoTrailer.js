import { useSelector } from "react-redux";
import useMainTrailer from "../hooks/useMainTrailer";

const VideoTrailer = ({id}) =>{

    const trailer = useSelector(store=> store.movies?.maintrailerMovie)

    useMainTrailer(id);

    return (<div>
        <iframe 
        className="w-screen aspect-video"

        src={"https://www.youtube.com/embed/" + trailer?.key + "?si=UdJ_vxWQaNIB3nJc?&mute=1&autoplay=1" }
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        ></iframe>
            </div>)

}

export default VideoTrailer;

