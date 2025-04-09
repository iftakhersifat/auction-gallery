import React, { use, useState } from 'react';
import Bid from '../Bid/Bid';
import { IoIosHeartEmpty } from "react-icons/io";
import { toast } from 'react-toastify'; // Import toast

const Bids = ({bidsFetch}) => {
    const bidsUse =use(bidsFetch);
    console.log(bidsUse);
    // calculation
    const [totalPrice, setTotalPrice] = useState(0);
    const [favorites, setFavorites] = useState([]);

    
    const addFavorite = (bid) => {
        setFavorites([...favorites, bid]);
        setTotalPrice(totalPrice + bid.currentBidPrice);
        toast.success(`${bid.title} added to favorites!`);
    };
    const removeFavorite = (title, price) => {
        setFavorites(favorites.filter(item => item.title !== title));
        setTotalPrice(prevTotal => prevTotal - price);
        toast.info(`${title} removed from favorites.`);
    };


    return (
        <div className='px-15 py-15 bg-[#EBF0F5]'>
            <h1 className='text-[#0E2954] text-3xl mb-2'>Active Auction</h1>
            <p className='mb-8'>Discover and bid on extraordinary items</p>

        <div className='flex space-x-6'>
            {/* Left section with table layout */}
            <div className="left w-[70%] bg-[#FFFFFF] rounded-xl p-6 mb-[116px]">

<div className=''>
    <table className='w-full border-2 border-black'>
        <thead className='border-2 border-black'>
            <tr className="text-left text-[#0E2954]">
                <th className="py-2 px-4">Items</th>
                <th className="py-2 px-4 text-center">Current Bid</th>
                <th className="py-2 px-4 text-center">Time Left</th>
                <th className="py-2 px-4 text-center">Bid Now</th>
            </tr>
        </thead>
        <tbody>
            {
                bidsUse.map(bid => (
                    <Bid key={bid.id} bid={bid} addFavorite={addFavorite} />
                ))
            }
        </tbody>
    </table>
</div>

</div>

            {/* favorite items section */}
            <div className={`right w-[30%] bg-[#FFFFFF] p-4 rounded-xl text-center ${favorites.length === 0 ? 'h-[320px]' : 'h-auto'}`}>
                    <h1 className="text-[#0E2954] text-2xl font-semibold p-2 border-b-2 border-black flex items-center justify-center gap-2">
                        <IoIosHeartEmpty size={25} />Favorite Items
                    </h1>

                    <div className='py-2 space-y-3'>
                        {favorites.length === 0 ? (
                             <>
                            <p className="text-lg font-semibold mt-10">No favorites yet</p>
                            <p className="text-lg font-semibold text-gray-500 mb-10">Click the heart icon on any item <br /> to add it to your favorites</p>
                            </> ) : (
                            <div className="space-y-3">
                                {favorites.map((favorite, index) => (
                                    <div key={index} className="flex justify-between items-center space-y-4 text-[#0E2954] p-4 rounded-xl border-2 border-black">
                                        <div className="flex space-x-4">
                                            <img className="w-[32px] h-[32px]" src={favorite.image} alt="" />
                                            <p className="text-sm w-[150px]">{favorite.title}</p>
                                        </div>
                                        <div className="text-center">{favorite.currentBidPrice}</div>
                                        <div className="text-center">{favorite.bidsCount} bids</div>
                                        <button onClick={() => removeFavorite(favorite.title, favorite.currentBidPrice)} className="text-red-500 font-bold mb-5 text-2xl">x</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-t-2 border-black pt-4 font-semibold flex justify-around">
  <p className="text-lg font-semibold">Total bids Amount</p>
  <p className="text-2xl mt-1">${totalPrice}</p>
</div>

            </div>

        </div>    

        </div>
    );
};

export default Bids;