import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { images } from '../../constants';


const Navbar = () => {



    return (
        <div className='Navbar'>
            {/* <!-- Start landing page --> */}
                <div className='container'>
                    <div className='header-area'>
                        <img src={images.logo1} className="image-2 logo" />
                        <ul  className='links'>
                            <li><Link className="link active" to="/">Home</Link></li>
                            <li><Link className="link" to="/">Über uns</Link></li>
                            <li><Link className="link" to="/">Bestellen</Link></li>
                            <li><Link className="link" to="/">Kontakt</Link></li>
                        </ul>
                        <div className="endNav">
                            <img className="cartIco" src={images.cartIco} alt="" />
                            <span className="loginBtn">Anmelden</span>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Navbar;
