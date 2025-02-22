import { useState } from "react";

interface YoutubeProps{
    width: number,
    height: number,
    poligo_color: string;
}

const YoutubeSvg = ({...props}: YoutubeProps) => {
    
    const [mouseOver, setMouseOver] = useState(false)

    return(
        <svg
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            height={props.height}  
            version="1.1" 
            viewBox="0 0 512 512" 
            width={props.width}  
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="_x33_95-youtube">
                <g>
                    <path fill={mouseOver ? 'white' : '#9CA4B2'} d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z"/>
                    <polygon points="208.954,324.723 208.954,187.93 329.18,256.328   " fill={props.poligo_color}/>
                </g>
            </g>
            <g id="Layer_1"/>
        </svg>
    );
}

export default YoutubeSvg;