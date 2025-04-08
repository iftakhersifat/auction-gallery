import React from 'react';

const Bid = ({bid}) => {
    const {image, currentBidPrice, timeLeft}=bid;
    return (
        <div>
            <img className='w-[96px] h-[96px]' src={image} alt="" />
            <p>{currentBidPrice}</p>
            <p>{timeLeft}</p>
        </div>
    );
};

export default Bid;