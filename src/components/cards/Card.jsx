import React from 'react'
import { GiMountaintop } from "react-icons/gi";
const Card = () => {
  return (
    <div className=' w-40 border-[1px] rounded-md space-y-2 p-2 bg-white shadow-lg transition hover:shadow-none '>
        <div className=' relative'>
        <img src='../public/image/sample_01.jpg' className=' rounded-sm grayscale' />
        <div className=' absolute top-0 right-0 bg-black text-white px-2 py-1  rounded-full text-[10px]'>
            Tenzin
        </div>
        </div>
        
        <div className=' flex justify-between items-center'>
        <p className=' text-xs font-bold'># Mountain trek</p>
        <GiMountaintop /></div>
    </div>
  )
}

export default Card