import React, { useState } from 'react';

const BeerCard = (props) => {

    const [isActive, setActive] = useState('false');

    const setABVColor = () => {
        let abvColor;
        if (props.abv < 5.1) {
            abvColor = 'green'
        } else if (props.abv < 7.6) {
            abvColor = "orange"
        } else if (props.abv < 12.1) {
            abvColor = "red"
        } else {
            abvColor = "black"
        }
        return abvColor
    }

    const handleLike = () => {
        setActive(!isActive);
    };

    return (
    <li className="beerCard" style={{ listStyle: "none", display: "flex"}}>
        <img src={props.image_url}></img>
        <div className="cardInfo">
            <h3>
                {props.name}
            </h3>
            <h6 style={{ fontSize: "16px" }}>
                First Crafted: {props.first_brewed}
            </h6>
            <h4 style={{ color: setABVColor() }}>
                {props.abv}%
            </h4>
            <h4 style={{ fontSize: '24px' }}>{props.tagline}</h4>
            <p style={{ fontSize: '18px'}}>
                {props.description}
            </p>
            <div>
                <i className={isActive ? "far fa-heart" : "fas fa-heart"} style={{color: "red", cursor: 'pointer'}} onClick={handleLike}></i></div>
        </div>
    </li>
    )
};

export default BeerCard;