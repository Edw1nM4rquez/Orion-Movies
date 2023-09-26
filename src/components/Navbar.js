import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './button';
import './Navbar.css';
//import { useNavigate } from 'react-router-dom';


function Navbar() {
    //const navigate = useNavigate();

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);



    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Orion Movies <i className=" fas fa-film" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Trailers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                       
                    </ul>
                    <div className="buttons-interaction">
                    {button && <Button buttonStyle='btn--outline' urlNavigate={'/sign-up'} >Sign Up</Button>}
                    {button && <Button buttonStyle='btn--outline' urlNavigate={'/login'} >Login</Button>}
                    
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;