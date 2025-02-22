interface PlaneProps{
    fill: string,
    widht: number,
    height: number;
}

const PlaneSVG = ({fill, widht, height}: PlaneProps) => {
    return(
        <svg 
            height={height} 
            viewBox="0 0 1792 1792" 
            width={widht} 
            xmlns="http://www.w3.org/2000/svg">
                <path fill={fill} d="M1568 160q44 52 12 148t-108 172l-161 161 160 696q5 19-12 33l-128 96q-7 6-19 6-4 0-7-1-15-3-21-16l-279-508-259 259 53 194q5 17-8 31l-96 96q-9 9-23 9h-2q-15-2-24-13l-189-252-252-189q-11-7-13-23-1-13 9-25l96-97q9-9 23-9 6 0 8 1l194 53 259-259-508-279q-14-8-17-24-2-16 9-27l128-128q14-13 30-8l665 159 160-160q76-76 172-108t148 12z"/>
        </svg>
    );
}

export default PlaneSVG;