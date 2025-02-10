import './Homepage.css';
import BenefitsBlock from '../../components/benefitsBlock/BenefitsBlock';
import PlaneSVG from '../../icons/svg/PlaneSVG';
import Products from '../../components/Products/Products';

const Homepage = () => {
    return(
        <div className="home">
            <div className="banner">
                <div className="content">
                    <h3>Affordable <span className='banner-text'>Car</span> Rentals <span className='banner-text'>Anytime</span>, Anywhere</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nihil distinctio amet libero consectetur laborum.</p>
                    <div className="btns">
                        <button className='banner-btn' id='explore-now'>Explore now</button>
                        <button className='banner-btn' id='track-now'>Track now</button>
                    </div>
                </div>
            </div>
            <div className="benefits">
                <BenefitsBlock bg_color='#232323' benefitImg={<PlaneSVG fill='white' widht={80} height={80}/>} title='Aiport Transfers' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae quasi nostrum delectus obcaecati.'/>
                <BenefitsBlock bg_color='#181818' benefitImg={<PlaneSVG fill='white' widht={80} height={80}/>} title='Aiport Transfers' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae quasi nostrum delectus obcaecati.'/>
                <BenefitsBlock bg_color='#232323' benefitImg={<PlaneSVG fill='white' widht={80} height={80}/>} title='Aiport Transfers' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae quasi nostrum delectus obcaecati.'/>
                <BenefitsBlock bg_color='#181818' benefitImg={<PlaneSVG fill='white' widht={80} height={80}/>} title='Aiport Transfers' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil quae quasi nostrum delectus obcaecati.'/>
            </div>
            <div className="products">
                <h3 id='listProductsTitle'>Top picks vehicles this month</h3>
                <p id='listProductsText'>Experience the epitome of amazing journey with our top picks.</p>
                <div className="productsList">
                    <Products car_name='Audi R8' image_link='https://png.pngtree.com/png-vector/20240716/ourmid/pngtree-stylish-vehicle-png-image_13128242.png'/>
                    <Products car_name='Porsche 911' image_link='https://www.pngarts.com/files/4/Blue-Porsche-PNG-Transparent-Image.png'/>
                    <Products car_name='Ferrari Turbo' image_link='https://pngimg.com/uploads/ferrari/ferrari_PNG10657.png'/>
                    <Products car_name='Nissan GTR' image_link='https://www.1stnissan.com/assets/shared/CustomHTMLFiles/Responsive/ColorSelect/Nissan/2023/GT-R/Exterior/Solid-Red/angle1.png'/>
                    <Products car_name='McLaren 38' image_link='https://www.motortrend.com/uploads/izmo/mclaren/gt/2021/gt.png'/>
                </div>
            </div>
        </div>
    );
}

export default Homepage;