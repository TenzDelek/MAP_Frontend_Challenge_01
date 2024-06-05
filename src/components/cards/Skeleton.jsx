import React from 'react'

const Skeleton = ({props}) => {
 
  return (
    <div className='  h-80 w-52  border-[1px] rounded-md space-y-1 p-2 bg-white shadow-lg transition hover:shadow-none '>
        <div className=' bg-gray-300 h-56 w-48 animate-pulse  rounded-sm '>
        </div>
        
        <div className=' flex justify-between items-center'>
        <p className=' h-4 w-10 animate-pulse rounded-lg bg-gray-300'/>
        <p className=' h-4 w-4 animate-pulse rounded-full bg-gray-300'/>
        </div>
    </div>
  )
}

export default Skeleton