import React, { use } from 'react';
import Bid from '../Bid/Bid';

const Bids = ({bidsFetch}) => {
    const bidsUse =use(bidsFetch);
    console.log(bidsUse)
    return (
        <div className='px-15 mt-[80px] bg-[#EBF0F5]'>
            <h1 className='text-[#0E2954] text-3xl mb-2'>Active Auction</h1>
            <p>Discover and bid on extraordinary items</p>
            <div>
                {
                    bidsUse.map(bid=><Bid bid={bid}></Bid>)
                }
            </div>
        </div>
    );
};

export default Bids;