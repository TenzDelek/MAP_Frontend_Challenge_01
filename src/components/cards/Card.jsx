import React from 'react'
import { GiMountaintop } from "react-icons/gi";

const Card = ({props}) => {
 
  return (
    <div className=' h-80 w-52 border-[1px] rounded-md space-y-2 p-2 bg-white shadow-lg transition hover:shadow-none '>
        <div className='  overflow-hidden relative'>
        
        <img src={props.img}  className=' hover:scale-[1.1] transition h-56 w-48 rounded-sm grayscale object-cover' />
       {props.tag && <div className=' absolute top-0 right-0  bg-green-500 text-white px-2 py-1  rounded-full text-[10px]'>
            {props.tag}
        </div>} 
        </div>
        
        <div className=' flex justify-between items-center'>
        <p className=' text-xs font-bold'># {props.title}</p>
        <GiMountaintop /></div>
        <pre className=' text-center'>{props.motto}</pre>
    </div>
  )
}

export default Card