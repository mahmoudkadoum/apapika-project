import React  from "react";
import './DownloadApp.css';
import { images } from '../../constants';


const DownloadApp = () => {

    return (
        <div className='DownloadApp'>
            <div className="Rectangle-4"> </div>
            <div className="triangle-2"></div>
            <img className="pattern4" src={images.pattern4} alt="" />
                <div className="screen-3 container">
                    <div className="left">
                        <div className="Screen-3-Header">
                        <h1>
                            App herunterladen für Aufregende Deals
                        </h1>
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, 
                        adipiscing cursus auctor eget sed phasellus senectus. Ut tellus 
                        donec vestibulum tristique leo bibendum in a, tincidunt.
                        </p>
                        <div className="downloadBtns">
                        <img className="Btn" src={images.googlePlayBtn} alt="" />
                        <img className="Btn" src={images.appleStore} alt="" />
                    </div>
                    </div>
                    <div className="right">
                        <img className="mobileMokup" src={images.mobileMokup} alt="" />
                    </div>
                </div>
        </div>
    );
}
export default DownloadApp;
