import React, { useState } from 'react';
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

const Bid = ({bid, addFavorite}) => {
    const {image, currentBidPrice, timeLeft, title}=bid;

    const [heart, setHeart]=useState(false);
    const handelHeart=()=>{
        if(heart){
            setHeart(false)
        }
        else{setHeart(true)}
        addFavorite(bid);
    }

    return (
        <tr className="text-[#0E2954] border-2 border-black">
        <td className="py-4 px-4">
            <div className="flex items-center space-x-4">
                <img className="w-[64px] h-[64px]" src={image}  />
                <p className="text-sm">{title}</p>
            </div>
        </td>
        <td className="py-4 px-4 text-center">{currentBidPrice}</td>
        <td className="py-4 px-4 text-center">{timeLeft}</td>
        <td className="py-4 px-4 text-center">
            <button onClick={handelHeart} disabled={heart} className={`${heart ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                {heart ? (<IoIosHeart size={25} className="text-red-500" />) : (<IoIosHeartEmpty size={25} className="text-black" />)}
            </button>
        </td>
    </tr>
      
    );
};

export default Bid;