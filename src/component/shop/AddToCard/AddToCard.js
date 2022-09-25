import React from 'react';

const AddToCard = ({card}) => {
    return (
        <div>
            <h1> Selected Items:{card.length} </h1>
        </div>
    );
};

export default AddToCard;