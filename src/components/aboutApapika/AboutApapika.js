import React  from "react";
import './AboutApapika.css';
import { images } from '../../constants';


const AboutApapika = () => {

return (
    <div className='AboutApapika'>
        <div className="Rectangle-6"> </div>
        <div className="triangle-About"></div>
        <img className="pattern6" src={images.pattern6} alt="" />
            <div className="screen-5 container">
                <div className="Screen-5-text">
                <h1>
                Über Apapika
                </h1>
                <p>
                Apapika bereitet hawaiiarabische Bowls zu, 
                die mit hausgemachten Soßen, Toppings und 
                einem arabischen touch verfeinert werden.
                <br/><br/>
                Wir achten nicht nur auf den leckeren Geschmack, 
                sondern legen auch viel Wert auf gesunde 
                und sättigende Zutaten.
                <br/><br/>
                Du findest bei uns täglich eine Vielfalt an 
                frischen Bowls. Besuche uns an einen unserer 
                Stores im 1.; 2. oder 6. Bezirk in Wien.
                </p>
                </div>
                <img className="aboutImg" src={images.aboutImg} alt="" />
            </div>
    </div>
);
}
export default AboutApapika;
