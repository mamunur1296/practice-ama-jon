import React from 'react';
import './AddToCard.css';

const AddToCard = ({ card }) => {
    let price = 0;
    let charge = 0;
    let tax = 0;
    let total = 0;
    let quantity = 0;
    for (const prices of card) {
        quantity = quantity + prices.quantity;
        price = price + prices.price * prices.quantity;
        charge = charge + prices.shipping * prices.quantity;
        tax = price * 0.1;
        total = price + charge + tax;
    }
    let taxNew = tax.toFixed(2);
    return (
        <div className='card-container'>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${charge}</p>
            <p>Tax: ${taxNew}</p>
            <h5>Grand Total: ${total}</h5>
        </div>
    );
};

export default AddToCard;