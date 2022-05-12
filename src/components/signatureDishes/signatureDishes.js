import React  from "react";
import './signatureDishes.css';
import { images } from '../../constants';


const SignatureDishes = () => {

    return (
        <div className='SignatureDishes'>
            <div className="Rectangle-5"> </div>
            <img className="pattern5" src={images.pattern5} alt="" />
                <div className="screen-4 container">
                        <div className="Screen-4-Header">
                        <h1>
                        Signature Bowls
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, 
                        adipiscing cursus auctor eget sed phasellus senectus. 
                        Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat 
                        </p>
                        </div>
                <div className="ownBowl">
                    <div className="ownBowl-left">
                        <h2>GESTALTE DEINE EIGENE SCHALE</h2>
                        <p>Stell dir deine eigene  Bowl in nur 6 Schritten zusammen.</p>
                        <span>Los gehts!</span>
                    </div>
                    <img className="BowlImg" src={images.bowl1} alt="" />
                    <div className="triangle-3"></div>
                </div>
                </div>
        </div>
    );
}
export default SignatureDishes;
