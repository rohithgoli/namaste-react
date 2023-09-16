import {useState} from 'react';

const NavContainer = () => {

    const [btnName,setBtnName] = useState('Login')

    return (
        <ul className="nav-container">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
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