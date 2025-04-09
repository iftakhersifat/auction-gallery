import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";

const Bid = ({bid}) => {
    const {image, currentBidPrice, timeLeft, title}=bid;


    return (
        <div className='flex justify-between items-center space-y-4 text-[#0E2954] py-4 border-b border-[#E3EAF3] last:border-b-0'>
            
            <div className="flex space-x-4">
         <img className="w-[64px] h-[64px]" src={image} />
        <p className="text-sm w-[240px] ml-4">{title}</p>
       </div>
            <p className='text-center'>{currentBidPrice}</p>
            <p className='text-center'>{timeLeft}</p>
            <button className='text-center mr-6'><IoIosHeartEmpty size={25}/></button>
        </div>
      
    );
};

export default Bid;