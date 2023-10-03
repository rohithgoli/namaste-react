import {useState} from 'react';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const NavContainer = () => {

    const [btnName,setBtnName] = useState('Login')

    const onlineStatus = useOnlineStatus();

    return (
        <ul className="flex">
            <li className="px-4">
                Online Status: {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="px-4">
                <Link to="/" className="nav-item"> 
                    Home
                </Link>
            </li>
            <li className="px-4">
                <Link to="/about" className="nav-item">
                    About
                </Link>
            </li>
            <li className="px-4">
                <Link to="/contact" className="nav-item">
                    Contact
                </Link>
            </li>
            <li className="px-4">
                <Link to="/grocery" className="nav-item">
                    Grocery
                </Link>
            </li>
            <li className="px-4 nav-item">Cart</li>
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