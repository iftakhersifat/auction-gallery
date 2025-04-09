import React, { use } from 'react';
import Bid from '../Bid/Bid';

const Bids = ({bidsFetch}) => {
    const bidsUse =use(bidsFetch);
    console.log(bidsUse)
    return (
        <div className='px-15 py-15 bg-[#EBF0F5]'>
            <h1 className='text-[#0E2954] text-3xl mb-2'>Active Auction</h1>
            <p className='mb-8'>Discover and bid on extraordinary items</p>

        <div className='flex space-x-6'>
            <div className="left w-[70%] bg-[#FFFFFF] rounded-xl p-6 mb-[116px]">

            <div className='flex justify-between items-center space-y-4 border-b border-[#E3EAF3]'>
                <h1>Items</h1>
                <h1 className="ml-[300px]">Current Bid</h1>
                <h1>Time Left</h1>
                <h1>Bid Now</h1>
            </div>

                <div className='gap-2'>
                {
                    bidsUse.map(bid=><Bid key={bid.id} bid={bid}></Bid>)
                }
                </div>
            </div>

            {/* favorite items section */}
            <div className="right w-[30%] bg-[#FFFFFF] py-4 rounded-xl h-[320px] text-center ">

            <h1 className="text-[#0E2954] text-lg font-semibold p-2 border-b border-[#E3EAF3]">Favorite Items</h1>
            <div className='py-2 space-y-3'>
            <p className="text-lg font-semibold mt-10">No favorites yet</p>
            <p className="text-lg font-semibold text-gray-500 mb-10">Click the heart icon on any item <br /> to add it to your favorites</p>
            </div>
          <div className="border-t border-[#E3EAF3] pt-4 font-semibold flex justify-around">
            <p className="text-lg font-semibold">Total bids Amount</p>
            <p className="text-2xl mt-1">$0000</p>
          </div>
            </div>
        </div>    

        </div>
    );
};

export default Bids;