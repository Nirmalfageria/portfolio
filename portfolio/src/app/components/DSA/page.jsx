'use client'
import React from 'react'
import { useState } from 'react'
export default function page() {

const [totalQ ,settotalQ] = useState(400);
const [totalContests ,settotaContests] = useState(10);
const [leetcodeContests ,setleetcodeContests] = useState(2);
const [CFContests ,setCFContests] = useState(2);
const [CCContests ,setCCContests] = useState(2);
const [ATContests ,setATContests] = useState(2);


  return ( 
    <div className='flex flex-col w-full'>
        <div className='flex flex-row w-full justify-evenly items-center'>
          <div className="flex flex-col justify-center items-center w-40 h-40 bg-white text-black rounded-lg shadow-lg ">
          <div className='text-xl  '>Total  Questions</div>  
           <div className='text-5xl font-bold py-1'>{totalQ}</div> 
    </div>
    <div className="flex flex-row justify-between items-center w-80 h-60 bg-white text-black rounded-lg shadow-lg p-4">
  {/* Total Contests Section */}
  <div className="flex flex-col items-center">
    <div className="text-lg">Total Contests</div>
    <div className="text-4xl font-bold py-2">{totalContests}</div>
  </div>

  {/* Platform-Wise Contests Section */}
  <div className="flex flex-col w-full">
    <div className="flex justify-evenly w-full py-1 bg-brown-100">
      <span className="text-sm">LeetCode</span>
      <span className="text-sm font-bold">{ leetcodeContests}</span>
    </div>
    <div className="flex justify-between w-full py-1">
      <span className="text-sm">CodeChef</span>
      <span className="text-sm font-bold">{CCContests}</span>
    </div>
    <div className="flex justify-between w-full py-1">
      <span className="text-sm">CodeForces</span>
      <span className="text-sm font-bold">{CFContests}</span>
    </div>
    <div className="flex justify-between w-full py-1">
      <span className="text-sm">AtCoder</span>
      <span className="text-sm font-bold">{ATContests}</span>
    </div>
  </div>
</div>

    </div>
    </div>
           
   
  )
}
