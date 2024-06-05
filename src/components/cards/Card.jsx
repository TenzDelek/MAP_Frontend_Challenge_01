import React from 'react'
import { GiMountaintop } from "react-icons/gi";
const Card = ({props}) => {
  return (
    <div className=' w-40 border-[1px] rounded-md space-y-2 p-2 bg-white shadow-lg transition hover:shadow-none '>
        <div className=' bg-slate-500 relative'>
        
        <img src={props.img} className=' rounded-sm grayscale' />
        <div className=' absolute top-0 right-0 bg-black text-white px-2 py-1  rounded-full text-[10px]'>
            {props.tag}
        </div>
        </div>
        
        <div className=' flex justify-between items-center'>
        <p className=' text-xs font-bold'># {props.title}</p>
        <GiMountaintop /></div>
    </div>
  )
}

export default Card