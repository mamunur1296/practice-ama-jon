import React, { useEffect, useState } from 'react';
import CardGroup from './cird-group/CardGroup';
import './Shop.css';

const Shop = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    return (
        <div className='shop-container container' >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cards.map(card => <CardGroup
                        key={card.id}
                        card={card}
                    ></CardGroup>)
                }
            </div>
            <div>
                <h1> cird</h1>
            </div>
        </div>
    );
};

export default Shop;