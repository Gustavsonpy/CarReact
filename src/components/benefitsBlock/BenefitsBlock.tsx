import { JSX } from 'react';
import './BenefitsBlock.css';

interface BenefitsProps{
    benefitImg: JSX.Element,
    title: string,
    description: string;
    bg_color: string
}

const BenefitsBlock = ({benefitImg, title, description, bg_color}: BenefitsProps) => {
    return(
        <div style={{backgroundColor: bg_color}} className="container">
            <div className="benefitContent">
                {benefitImg}
                <div className="text">
                    <h5>{title}</h5>
                    <span className='description'>{description}</span>
                </div>
            </div>
        </div>
    );
}

export default BenefitsBlock;