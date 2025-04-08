import React from 'react';

const Bid = ({bid}) => {
    const {image}=bid;
    return (
        <div>
            <img src={image} alt="" />
        </div>
    );
};

export default Bid;