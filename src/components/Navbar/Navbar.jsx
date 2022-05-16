import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import MobileNavbar from './MobileNavbar'
import { images } from '../../constants';
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'


const Navbar = () => {

const [open, setOpen] = useState(false);

const HamburgerBtn = <CgMenuRound className="Hamburger" 
                    size='40px' color='black' onClick={() => setOpen(!open)}/>;

const closeBtn = <CgCloseO className="Hamburger" 
                    size='40px' color='black' onClick={() => setOpen(!open)}/>;

const closeMobileMenu = () => setOpen(false);

    return (
        <div className='Navbar'>
            {/* <!-- Start landing page --> */}
                <div className='container'>
                    <div className='header-area'>
                        <img src={images.logo1} className="logo" />
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
                        {open ? closeBtn : HamburgerBtn}
                    </div>
                    {open && <MobileNavbar isMobile={true} closeMobileMenu={closeMobileMenu}/>}
                </div>
        </div>
    );
}
export default Navbar;
