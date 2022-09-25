import React, { useEffect, useState } from 'react';
import AddToCard from './AddToCard/AddToCard';
import CardGroup from './cird-group/CardGroup';
import './Shop.css';

const Shop = () => {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);
    const HendalAddToCard = (cards) => {
        const newCard = [...card, cards];
        setCard(newCard);
        console.log(newCard);
    };
    return (
        <div className='shop-container container' >
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    cards.map(card => <CardGroup
                        key={card.id}
                        card={card}
                        HendalAddToCard={HendalAddToCard}
                    ></CardGroup>)
                }
            </div>
            <div>
                <h1> cird </h1>
                <AddToCard
                    card={card}
                ></AddToCard>
            </div>
        </div>
    );
};

export default Shop;