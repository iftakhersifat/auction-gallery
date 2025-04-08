import React, { use } from 'react';
import Bid from '../Bid/Bid';

const Bids = ({bidsFetch}) => {
    const bidsUse =use(bidsFetch);
    console.log(bidsUse)
    return (
        <div className='px-15 bg-[#EBF0F5]'>
            <h1 className='text-[#0E2954] text-3xl mb-2'>Active Auction</h1>
            <p className='mb-8'>Discover and bid on extraordinary items</p>

        <div className='flex'>
            <div className="left w-[70%]">
                <div className=''>
                {
                    bidsUse.map(bid=><Bid key={bid.id} bid={bid}></Bid>)
                }
                </div>
            </div>

            <div className="right w-[30%] text-center">
                <p>Fav</p>
            </div>
        </div>    

        </div>
    );
};

export default Bids;