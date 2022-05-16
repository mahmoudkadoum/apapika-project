import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './MobileNavbar.css';
import { images } from '../../constants';




const MobileNavbar = (props) => {
const animateFrom = {opacity: 0, y: -40}
const animateTo = {opacity: 1, y: 0}

return (
    <div className='MobileNavbar'>
        <ul  className='links'>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.05}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link active" to="/">Home</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link" to="/">Über uns</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.20}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link" to="/">Bestellen</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link" to="/">Kontakt</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.40}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link MobileloginBtn" to="/">Anmelden</Link>
            </motion.li>
            <motion.li 
            initial={animateFrom} animate={animateTo} transition= {{delay: 0.50}}
            onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link className="link MobilecartIco" to="/"><img className="cartIco" src={images.cartIco} alt="" /></Link>
            </motion.li>
        </ul>
    </div>
);
}
export default MobileNavbar;
