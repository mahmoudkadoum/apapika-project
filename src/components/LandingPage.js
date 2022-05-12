import React from "react";
import { useState, useEffect, useRef } from "react";
import "./landingPage.css";
import Navbar from "./Navbar/Navbar";
import { images } from '../constants';
import SpecialDishes from "./specialDishes/SpecialDishes";
import DownloadApp from "./downloadApp/DownloadApp";
import SignatureDishes from "./signatureDishes/signatureDishes";
import AboutApapika from "./aboutApapika/AboutApapika";
import OffersNotifie from "./OffersNotifie/OffersNotifie";


const LandingPage = () => { 

return (
<div className='LandingPage'>
    <Navbar />
        <div className="Rectangle-1"> </div>
        <div className="Rectangle-2"> </div>
    <div className="sceren1 container">
        <img className="meal1" src={images.meal1} alt="" />
        <img className="pattern1" src={images.pattern1} alt="" />
        <div className="text1">
            <p>
            eine breite Auswahl aus einzigartigen hawaiiarabischen Bowls
            </p>
            <span>
            hawaii-arabischen Bowls
            </span>
        </div>
        </div>
    <SpecialDishes />
    <DownloadApp />
    <SignatureDishes />
    <AboutApapika />
    <OffersNotifie />
</div>
);
};
export default LandingPage;