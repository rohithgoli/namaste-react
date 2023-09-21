import {useState} from 'react';
import {Link} from 'react-router-dom';

const NavContainer = () => {

    const [btnName,setBtnName] = useState('Login')

    return (
        <ul className="nav-container">
            <li>
                <Link to="/" className="nav-item"> 
                    Home
                </Link>
            </li>
            <li>
                <Link to="/about" className="nav-item">
                    About
                </Link>
            </li>
            <li>
                <Link to="/contact" className="nav-item">
                    Contact
                </Link>
            </li>
            <li className="nav-item">Cart</li>
            {/* <li className="nav-item">Login</li> */}
            <button 
                className="nav-item"
                onClick={() => {
                    btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
                }}
            >
                {btnName}
            </button>
        </ul>
    )
}

export default NavContainer;