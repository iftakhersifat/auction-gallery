import React, { useState } from 'react';
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

const Bid = ({bid}) => {
    const {image, currentBidPrice, timeLeft, title}=bid;

    const [heart, setHeart]=useState(false);
    const handelHeart=()=>{
        if(heart){
            setHeart(false)
        }
        else{setHeart(true)}
    }

    return (
        <div className='flex justify-between items-center space-y-4 text-[#0E2954] py-4 border-b border-[#E3EAF3] last:border-b-0'>
            
            <div className="flex space-x-4">
         <img className="w-[64px] h-[64px]" src={image} />
        <p className="text-sm w-[240px] ml-4">{title}</p>
       </div>
            <p className='text-center'>{currentBidPrice}</p>
            <p className='text-center'>{timeLeft}</p>
            import { IoIosHeart } from "react-icons/io";

            <button onClick={handelHeart} className="mr-6">{heart ? (<IoIosHeart size={25} className="text-red-500" />) : (<IoIosHeartEmpty size={25} className="text-black" />)}
            </button>

            
        </div>
      
    );
};

export default Bid;