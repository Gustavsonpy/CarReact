import { useState } from "react";

interface FacebookSvg{
    width: number,
    height: number;
}

const FacebookSvg = ({...props}: FacebookSvg) => {
    
    const [mouseIsOver, setMouseIsOver] = useState(false);
    
    return(
        <svg
            onMouseOver={() => setMouseIsOver(true)} onMouseOut={() => setMouseIsOver(false)}
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
        >
            <g>
                <path d="M0 0h24v24H0z" fill="none"/>
                <path fill={mouseIsOver ? "white" : "#9CA4B2"} d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
            </g>
        
        </svg>
    );
}

export default FacebookSvg;