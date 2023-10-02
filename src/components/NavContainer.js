import {useState} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const NavContainer = () => {

    const [btnName,setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus();

    return (
        <ul className="nav-container">
            <li>
                Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
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
            <li>
                <Link to="/grocery" className="nav-item">
                    Grocery
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