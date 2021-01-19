import React from 'react';

const BeerCard = (props) => {
    return (
    <li style={{ listStyle: "none", display: "flex"}}>
        <img style={{height: "200px"}} src={props.image_url}></img>
        <div>
            <h3>
                {props.name}
                <span>
                    {props.first_brewed}
                </span>
            </h3>
            <h4>{props.tagline}</h4>
            <p>
                <span>
                    {props.abv}
                </span>
                {props.description}
            </p>
        </div>
        <i className="far fa-heart" style={{color: "red"}}></i>
    </li>
    )
};

export default BeerCard;