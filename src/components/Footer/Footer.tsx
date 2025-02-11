import './Footer.css';
import { Link } from 'react-router-dom';

//images
import InstagramSvg from '../../icons/svg/InstagramSvg';
import FacebookSvg from '../../icons/svg/FacebookSvg';
import XSvg from '../../icons/svg/XSvg';
import GithubSvg from '../../icons/svg/GithubSvg';
import YoutubeSvg from '../../icons/svg/YoutubeSvg';
// import logo from '../../img/library_logo.png';
import logo from '../../img/gumper_logo.png';

const Footer = () => {
    return(
        <footer>
            <div className="footer_content">
                <div className="left_side">
                    <img id='logo' src={logo} alt="library_logo" />
                    <span className='link_text'>Enables thousands of readers to find their favorite books</span>
                    <div className="social_media">
                        <Link to='/'><FacebookSvg width={26} height={26}/></Link>
                        <Link to='/'><InstagramSvg width={26} height={26} /></Link>
                        <Link to='/'><XSvg width={26} height={26}/></Link>
                        <Link to='/'><GithubSvg height={26} width={26}/></Link>
                        <Link to='/'><YoutubeSvg height={26} width={26} poligo_color='black'/></Link>
                    </div>
                </div>
                <div className="right_side">
                    <div className="solution">
                        <span className='title'>Solution</span>
                        <Link className='link_text' to='/'><span>Buy</span></Link>
                        <Link className='link_text' to='/'><span>Rent</span></Link>
                        <Link className='link_text' to='/'><span>Automation</span></Link>
                    </div>
                    <div className="support">
                        <span className='title'>Support</span>
                        <Link className='link_text' to='/'><span>Guide</span></Link>
                        <Link className='link_text' to='/'><span>Contact</span></Link>
                    </div>
                    <div className="company">
                        <span className='title'>Company</span>
                        <Link className='link_text' to='/'><span>About</span></Link>
                        <Link className='link_text' to='/'><span>Blog</span></Link>
                    </div>
                    <div className="legal">
                        <span className='title'>Legal</span>
                        <Link className='link_text' to='/'><span>Terms of service</span></Link>
                        <Link className='link_text' to='/'><span>Privacy policy</span></Link>
                        <Link className='link_text' to='/'><span>License</span></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;