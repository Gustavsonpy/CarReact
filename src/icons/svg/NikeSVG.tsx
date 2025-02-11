interface NikeSVGProps{
    fill: string
    width: number
    height: number
}

const NikeSVG = ({fill, width, height}: NikeSVGProps) => {
    return(
        <>
            <svg 
                height={height}
                width={width} 
                version="1.1" 
                viewBox="0 0 512 512" 
                xmlns="http://www.w3.org/2000/svg" 
            >
                <g id="_x32_30-nike">
                    <g>
                        <g id="_x36_3-nike_4_">
                            <g>
                                <g>
                                    <g>
                                        <path fill={fill} d="M255.943,236.305l-79.283,20.813c-28.004,6.947-52.498,16.208-76.101,8.1c-32.084-13.89-31.511-50.039-7.591-88.497        c-42.288,35.001-118.39,146.9-15.466,158.204c13.112,1.727,36.454-2.88,61.81-13.579l116.632-48.002l230.055-94.316        l-201.471,49.759L255.943,236.305z"/>
                                   </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Layer_1"/>
            </svg>
        </>
    );
}

export default NikeSVG;