import './Navbar.css';
import logo from '../../img/gumper_logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className="navbarContent">
                <img id='logo' src={logo} alt="Logo" />
                <div className="options">
                    <NavLink className='navOption' to={"/about"}>About us</NavLink>
                    <NavLink className='navOption' to={"/contact"}>Contact</NavLink>
                    <NavLink className='navOption' id='finalOne' to={"/user"}>User</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;