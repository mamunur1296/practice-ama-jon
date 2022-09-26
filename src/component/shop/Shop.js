import React, { useEffect, useState } from 'react';
import { addToCard ,getToStorage} from '../../utilities/utilities';
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
    useEffect(() => {
        const gatDataDb = getToStorage('shoping-card');
        let newArray = [];
        for (const id in gatDataDb) {
            const addProduckt = cards.find(product => product.id === id);
            if (addProduckt) {
                const quantity = gatDataDb[id];
                addProduckt.quantity = quantity;
                newArray.push(addProduckt);
            }
        }
        setCard(newArray);
    }, [cards]);
    const HendalAddToCard = (cards) => {
        let newCard = [];
        const exjist = card.find(product => product.id === cards.id);
        if (!exjist) {
            cards.quantity = 1;
            newCard = [...card, cards];
        } else {
            const rest = card.filter(product => product.id !== cards.id);
            exjist.quantity = exjist.quantity + 1;
            newCard = [...rest, exjist];
        }
        setCard(newCard);
        addToCard(cards.id);
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
                <AddToCard
                    card={card}
                ></AddToCard>
            </div>
        </div>
    );
};

export default Shop;




//  const handalAddToCird = (selectedProduct) => {
//         console.log(selectedProduct);
//         let newCard = [];
//         const exists = card.find(product => product.id === selectedProduct.id);
//         if (!exists) {
//             selectedProduct.quantity = 1;
//             newCard = [...card, selectedProduct];
//         }
//         else {
//             const rest = card.filter(product => product.id !== selectedProduct.id);
//             exists.quantity = exists.quantity + 1;
//             newCard = [...rest, exists];
//         }

//         console.log(newCard);
//         satCard(newCard);
//         addToDb(selectedProduct.id)
//     };