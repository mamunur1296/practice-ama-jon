import React from 'react';
import './CardGroup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CardGroup = ({ card }) => {
    const {name,seller, price, ratings, img } = card;
    return (
        <div >
                <div className="col my-5">
                    <div className="card">
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name.slice(0, 15)}</h5>
                        <p className="card-text">price : ${price}</p>
                        <p className="card-text"><small>seller: {seller}</small></p>
                        <p className="card-text"><small>ratings: {ratings}</small></p>
                    </div>
                    <button className='btn btn-color py-3'>
                        Add to card
                        <FontAwesomeIcon className='ms-3' icon={faShoppingCart} ></FontAwesomeIcon>
                    </button>
                    </div>
                </div>
        </div>
    );
};

export default CardGroup;