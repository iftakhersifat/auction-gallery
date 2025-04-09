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
            <div className="left w-[70%] bg-[#FFFFFF] rounded-xl p-6 mb-[116px]">

            <div className='flex justify-between items-center space-y-4 border-b border-[#E3EAF3]'>
                <h1>Items</h1>
                <h1 className="ml-[300px]">Current Bid</h1>
                <h1>Time Left</h1>
                <h1>Bid Now</h1>
            </div>

                <div className='gap-2'>
                {
                    bidsUse.map(bid=><Bid key={bid.id} bid={bid} addFavorite={addFavorite} />
                    )
                }
                </div>
            </div>

            {/* favorite items section */}
            <div className={`right w-[30%] bg-[#FFFFFF] py-4 rounded-xl text-center ${favorites.length === 0 ? 'h-[320px]' : 'h-auto'}`}>
                    <h1 className="text-[#0E2954] text-lg font-semibold p-2 border-b border-[#E3EAF3] flex items-center justify-center gap-2">
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
                                    <div key={index} className="flex justify-between items-center space-y-4 text-[#0E2954] p-4 border-b border-[#E3EAF3] last:border-b-0">
                                        <div className="flex space-x-4">
                                            <img className="w-[32px] h-[32px]" src={favorite.image} alt="" />
                                            <p className="text-sm w-[150px]">{favorite.title}</p>
                                        </div>
                                        <div className="text-center">{favorite.currentBidPrice}</div>
                                        <div className="text-center">{favorite.bidsCount} bids</div>
                                        <button onClick={() => removeFavorite(favorite.title)} className="text-red-500 font-bold mb-5 text-2xl">x</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="border-t border-[#E3EAF3] pt-4 font-semibold flex justify-around">
                        <p className="text-lg font-semibold">Total bids Amount</p>
                        <p className="text-2xl mt-1">${totalPrice}</p>
                    </div>
            </div>

        </div>    

        </div>
    );
};

export default Bids;