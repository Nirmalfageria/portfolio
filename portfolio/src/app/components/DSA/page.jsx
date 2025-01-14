'use client'
import React from 'react'
import { useState } from 'react'
export default function page() {

const [totalQ ,settotalQ] = useState(400);

  return (
    <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full justify-evenly items-center'>
          <div className="flex flex-col justify-center items-center w-40 h-40 bg-white text-black rounded-lg shadow-lg ">
          <div className='text-xl  '>Total  Questions</div>  
           <div className='text-5xl font-bold py-1'>{totalQ}</div> 
    </div>
          <div className="flex flex-col justify-center items-center w-40 h-40 bg-white text-black rounded-lg shadow-lg ">
          <div className='text-xl  '>Total  Questions</div>  
           <div className='text-5xl font-bold py-1'>{totalQ}</div> 
    </div>
    </div>
            {/* </br> */}
    </div>
  )
}
