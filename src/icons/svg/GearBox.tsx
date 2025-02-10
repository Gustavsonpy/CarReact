interface GearBoxProps{
    fill: string
    stroke: string
}

const GearBox = ({fill, stroke}: GearBoxProps) => {
    return(
        <svg className="icon icon-tabler icon-tabler-manual-gearbox" fill={fill} height="24" stroke={stroke} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" stroke="none"/>
            <circle cx="5" cy="6" r="2" fill={fill}/>
            <circle cx="12" cy="6" r="2" fill={fill}/>
            <circle cx="19" cy="6" r="2" fill={fill}/>
            <circle cx="5" cy="18" r="2" fill={fill}/>
            <circle cx="12" cy="18" r="2" fill={fill}/>
            <line x1="5" x2="5" y1="8" y2="16" stroke={stroke}/>
            <line x1="12" x2="12" y1="8" y2="16" stroke={stroke}/>
            <path d="M19 8v2a2 2 0 0 1 -2 2h-12" stroke={stroke}/>
        </svg>

    );
}

export default GearBox;