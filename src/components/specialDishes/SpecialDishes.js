import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SpecialDishes.css';
import { images } from '../../constants';


const SpecialDishes = () => {
    const [meals, setMeals] = useState([
        {
            name:'Hawaiian Salmon Bowl',
            img:images.meal2,
            components:["Lachs", "Avocado", "Edamame"] ,
            id: '1' 
        },
        {
            name:'Lani Chicken Bowl',
            img:images.meal3,
            components:["Babyspinat", "Süßkartoffel", "Souce-Vide Chicken", "Erdnüsse"],
            id: '2'
        },
    ]);

    const dishes = (Dish) => {
        return (
            <div className="dish"  key={Dish.id}>
                <div className="triangle-1"></div>
                <h3>{Dish.name}</h3>
                <div className="allComponents">
                    {Dish.components.length && Dish.components.map((component) => {
                        return (
                            <span className="component" key={component}>{component}</span>
                        );
                    })}
                </div>
                <img src={Dish.img} className="" alt={Dish.name}/>
            </div>
        );
    } 

    return (
        <div className='SpecialDishes'>
            <div className="Rectangle-3"> </div>
            <div className='container'>
                <div className="Screen-2-Header">
                    <h1>
                        Hier siehst du eine auswahl aus unsere Signature Bowls
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
                        adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
                        donec vestibulum tristique leo bibendum in a, tincidunt. 
                    </p>
                </div>
            </div>
            <div className="dishesContainer">
                {meals.length && meals.map(dishes)}
                <div className="seeMoreBtn">
                    <div className="circle-1"></div>
                    <span>Mehr sehen</span>
                </div>
            </div>
            <img className="pattern2" src={images.pattern2} alt="" />
            <img className="pattern3" src={images.pattern3} alt="" />
        </div>
    );
}
export default SpecialDishes;
