'use client';

import React, { useState } from 'react';
import Particle from '../particles';
import styles from './dsa.module.css';
import { CCData } from './api';


export default function Page(props) {
  const [totalQ, setTotalQ] = useState(400);
  const [totalDays, setTotalDays] = useState(400);
  const [easyQ, setEasyQ] = useState(150);
  const [mediumQ, setMediumQ] = useState(200);
  const [hardQ, setHardQ] = useState(50);
  const [totalContests, setTotalContests] = useState(10);
  const [leetcodeContests, setLeetcodeContests] = useState(2);
  const [CFContests, setCFContests] = useState(2);
  const [CCContests, setCCContests] = useState(2);
  const [ATContests, setATContests] = useState(2);
  const [GFGContests, setGFGContests] = useState(2);
  // console.log(props.usernames.codechef);
  console.log(CCData(props.usernames.codechef));
  return (
        <div className={`grid grid-cols-[1.5fr_3fr_2fr] gap-4  p-2 w-full h-full ${styles.main}`}>
      {/* First Grid: Profile Section */}
      <div className={`text-white rounded-lg  flex flex-col  justify-center items-center ${styles.profile} ${styles.border}`}>
        <div className="text-xl font-semibold">Profile</div>
        
      </div>

      {/* Second Grid: Questions Section */}
      <div className=" flex flex-col items-between gap-9 text-white rounded-lg shadow-lg p-4">
        {/* first box  */}
        <div className='flex flex-row justify-around'>
      <div className={ `flex flex-col rounded-lg p-4 justify-center items-center ${styles.totalQ} ${styles.border}`}>
      <div className="text-lg mt-2">Total Questions</div>
      <div className="text-5xl font-bold py-2">{totalQ}</div>
      </div>
      <div className={ `flex flex-col rounded-lg p-4 justify-center items-center ${styles.totalQ} ${styles.border}`}>
      <div className="text-lg mt-2">Total Active Days</div>
      <div className="text-5xl font-bold py-2">{totalDays}</div>
      </div>
      </div>

      {/* second box  */}
        <div className={`flex flex-col gap-4  rounded-lg p-4 ${styles.border}`}>
          <div className="flex justify-around">
            <span className="text-lg text-green-500">Easy</span>
            <span className="text-lg text-green-500 font-bold">{easyQ}</span>
          </div>
          <div className="flex justify-around text-yellow-500">
            <span className="text-lg">Medium</span>
            <span className="text-lg font-bold">{mediumQ}</span>
          </div>
          <div className="flex justify-around text-red-500">
            <span className="text-lg">Hard</span>
            <span className="text-lg font-bold">{hardQ}</span>
          </div>
        </div>
       {/* third box */}

        <div className={`text-white rounded-lg shadow-lg p-4 ${styles.border}`}>
        <div className="text-2xl font-bold mb-4 text-center">Contests Summary</div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-red-500 bg-black p-1 rounded-lg ">
            <span className="text-lg ">Total Contests</span>
            <span className="text-lg font-bold">{totalContests}</span>
          </div>
          <div className="flex justify-between text-yellow-500">
            <span className="text-lg">LeetCode</span>
            <span className="text-lg font-bold">{leetcodeContests}</span>
          </div>
          <div className="flex justify-between text-blue-500">
            <span className="text-lg">CodeChef</span>
            <span className="text-lg font-bold">{CCContests}</span>
          </div>
          <div className="flex justify-between text-red-800">
            <span className="text-lg">CodeForces</span>
            <span className="text-lg font-bold">{CFContests}</span>
          </div>
          <div className="flex justify-between ">
            <span className="text-lg">AtCoder</span>
            <span className="text-lg font-bold">{ATContests}</span>
          </div>
          <div className="flex justify-between text-green-500">
            <span className="text-lg">GeeksForGeeks</span>
            <span className="text-lg font-bold">{GFGContests}</span>
          </div>
        </div>
      </div>

      {/* Third Grid: Contests Section */}
      
      </div>
      {/* </div> */}
      <div className={`flex flex-col justify-between p-3 ${styles.border} rounded-lg shadow-lg p-4 `}>
  <div className="text-xl font-semibold mb-4 text-center">Rating Summary</div>
  {/* <div className="flex flex-col gap-4"> */}
    {/* LeetCode */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/icons/leetcode-badge.png" alt="LeetCode Badge" className="w-6 h-6" />
        <span className="text-lg font-medium">LeetCode</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-green-600">2200</span>
        <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded-full">Gold</span>
      </div>
    </div>

    {/* CodeChef */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-xl"></span>
        <span className="text-lg font-medium">CodeChef</span>
      </div>
      {/* <iframe src="https://codechef-api.vercel.app/rating/fageria15"></iframe> */}
      <span className="text-lg font-bold text-purple-600">⭐⭐</span>
    </div>

    {/* CodeForces */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/icons/codeforces-logo.png" alt="CodeForces Logo" className="w-6 h-6" />
        <span className="text-lg font-medium">CodeForces</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-blue-600">2100</span>
        <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded-full">Expert</span>
      </div>
    </div>

    {/* AtCoder */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src="/icons/atcoder-logo.png" alt="AtCoder Logo" className="w-6 h-6" />
        <span className="text-lg font-medium">AtCoder</span>
      </div>
      <span className="text-lg font-bold text-indigo-600">2000</span>
    </div>

    {/* GeeksforGeeks */}
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-green-500 text-xl"></span>
        <span className="text-lg font-medium">GeeksforGeeks</span>
      </div>
      <span className="text-lg font-bold text-green-600">5 Stars ⭐</span>
    {/* </div> */}
  </div>
</div>


      {/* Particle Effect */}
      <Particle />
    </div>
  );
}
