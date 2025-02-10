import './Products.css';
import GearBox from '../../icons/svg/GearBox';
import SeatSVG from '../../icons/svg/SeatSVG';
import SuitCaseSVG from '../../icons/svg/SuitCaseSVG';
import StarsSVG from '../../icons/svg/StarsSVG';
import { Link } from 'react-router-dom';

interface ProductsProps{
    car_name: string
    image_link: string
}

const Products = ({car_name, image_link}: ProductsProps) => {
    return(
        <div className='productContainer'>
            <div className="image" style={({backgroundImage: `url(${image_link})`})}/>
            <span className='carName'>{car_name}</span>
            <div className="gearbox">
                <GearBox fill='#949494' stroke='#949494'/>
                <span className='text'>Automatic</span>
            </div>
            <div className="infos">
                <div className="seat">
                    <SeatSVG fill='#FF4742' width={20} height={20}/>
                    <span className='text'>3</span>
                </div>
                <div className="suitcase">
                    <SuitCaseSVG fill='#FF4742' width={20} height={20}/>
                    <span className='text'>1</span>
                </div>
                <div className="stars">
                    <StarsSVG fill='#FF4742' width={20} height={20}/>
                    <span className='text'>5.0</span>
                </div>
            </div>
            <div className="price">
                <span className='text'>Start from</span>
                <span className='product_price'>$70 / day</span>
            </div>
            <Link to='/'><button className='rent_btn'>Rent now</button></Link>
        </div>
    );
}

export default Products;