import React, { useState } from "react";

interface InstagramProps {
    width: number,
    height: number;
}

const InstagramSvg: React.FC<InstagramProps> = ({ ...props }) => {
    
    const [mouseOver, setMouseOver] = useState(false)

    return (
        <svg
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            data-name="Layer 1" 
            id="Layer_1" 
            viewBox="0 0 128 128" 
            xmlns="http://www.w3.org/2000/svg"
            height={props.height}
            width={props.width}
        >
            <defs></defs>
            <title></title>
            <path fill={mouseOver ? 'white' : '#9CA4B2'} d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"/>
            <path fill={mouseOver ? 'white' : '#9CA4B2'} d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z"/>
            <path fill={mouseOver ? 'white' : '#9CA4B2'} d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z"/>
        </svg>
    );
};

export default InstagramSvg;