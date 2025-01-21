'use client';

import React, { useState, useEffect, useRef } from 'react';
import Particle from '../particles';
import styles from './dsa.module.css';
import { LCContestData, CCData ,CFData } from './api';

export default function Page(props) {
  const [totalQ, setTotalQ] = useState(400);
  const [totalDays, setTotalDays] = useState(400);
  const [easyQ, setEasyQ] = useState(150);
  const [mediumQ, setMediumQ] = useState(200);
  const [hardQ, setHardQ] = useState(50);
  const [totalContests, setTotalContests] = useState(10);
  const [CFContests, setCFContests] = useState(2);
  const [ATContests, setATContests] = useState(2);
  const [GFGContests, setGFGContests] = useState(2);

  const ccDataRef = useRef(null); // Persistent storage for CodeChef data
  const lccontestDataRef = useRef(null); // Persistent storage for LeetCode data
  const CFContestsRef = useRef(null); // Persistent storage for CodeForces data

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CCData(props.usernames.codechef);
        const lccdata = await LCContestData(props.usernames.leetcode);
       const cfdata = await CFData(props.usernames.codeforces);
        ccDataRef.current = data; // Store fetched data in ref
        lccontestDataRef.current = lccdata; // Store fetched data in ref
       CFContestsRef.current = cfdata; // Store fetched data in ref


        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [props.usernames.codechef, props.usernames.leetcode]);

  // Derive values from refs
  const ccData = ccDataRef.current;
  const lccontestData = lccontestDataRef.current;

  useEffect(() => {
    setTotalContests(
      (ccData?.ratingData?.length || 0) + (lccontestData?.contestAttend || 0) + (CFContestsRef?.contestAttend || 0)
    );
  }, [ccData, lccontestData , CFContestsRef]);

  return (
    <div className={`grid grid-cols-[1.5fr_3fr_2fr] gap-4 p-2 w-full h-full ${styles.main}`}>
      {/* Profile Section */}
      <div className={`text-white rounded-lg flex flex-col justify-around items-center ${styles.profile} ${styles.border}`}>
  <div className="text-2xl font-semibold mb-4">Profiles</div>
  {/* <div className="flex flex-col w-full justify-between px-4"> */}
    {[
      { name: "LeetCode", url: `https://leetcode.com/u/${props.usernames.leetcode}` },
      { name: "CodeChef", url: `https://www.codechef.com/users/${props.usernames.codechef}` },
      { name: "CodeForces", url: `https://codeforces.com/profile/${props.usernames.codeforces}` },
      { name: "AtCoder", url: `https://atcoder.jp/users/${props.usernames.atcoder}` },
      { name: "GeeksForGeeks", url: `https://www.geeksforgeeks.org/user/${props.usernames.geeksforgeeks}/` },
      { name: "GitHub", url: `https://github.com/${props.usernames.github}` },
    ].map((platform, index) => (
      <div key={index} className="flex w-full justify-between items-center mb-2 m-2 p-1 px-2 mx-2 border-b border-gray-700">
        <span className="text-lg">{platform.name}</span>
        <a
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-500 hover:bg-blue-800 text-white px-3 py-1 rounded-md"
        >
          Go
        </a>
      </div>
    ))}
  {/* </div> */}
</div>

      {/* Questions Section */}
      <div className="flex flex-col items-between gap-9 text-white rounded-lg shadow-lg p-4">
        {/* Total Questions and Active Days */}
        <div className="flex flex-row justify-around">
          <div className={`flex flex-col rounded-lg p-4 justify-center items-center ${styles.totalQ} ${styles.border}`}>
            <div className="text-lg mt-2">Total Questions</div>
            <div className="text-5xl font-bold py-2">{totalQ}</div>
          </div>
          <div className={`flex flex-col rounded-lg p-4 justify-center items-center ${styles.totalQ} ${styles.border}`}>
            <div className="text-lg mt-2">Total Active Days</div>
            <div className="text-5xl font-bold py-2">{totalDays}</div>
          </div>
        </div>

        {/* Question Difficulty Summary */}
        <div className={`flex flex-col gap-4 rounded-lg p-4 ${styles.border}`}>
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

        {/* Contests Summary */}
        <div className={`text-white rounded-lg shadow-lg p-4 ${styles.border}`}>
          <div className="text-2xl font-bold mb-4 text-center">Contests Summary</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-red-500 bg-black p-1 rounded-lg">
              <span className="text-lg">Total Contests</span>
              <span className="text-lg font-bold">{totalContests}</span>
            </div>
            <div className="flex justify-between text-yellow-500">
              <span className="text-lg">LeetCode</span>
              <span className="text-lg font-bold">
                {lccontestData?.contestAttend ? Math.round(lccontestData.contestAttend) : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-blue-500">
              <span className="text-lg">CodeChef</span>
              <span className="text-lg font-bold">
                {ccData?.ratingData?.length ? ccData.ratingData.length : 'N/A'}
              </span>
            </div>
            <div className="flex justify-between text-red-800">
              <span className="text-lg">CodeForces</span>
              <span className="text-lg font-bold">{CFContests}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg">AtCoder</span>
              <span className="text-lg font-bold">{ATContests}</span>
            </div>
            <div className="flex justify-between text-green-500">
              <span className="text-lg">GeeksForGeeks</span>
              <span className="text-lg font-bold">{GFGContests}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Summary */}
      <div className={`flex flex-col justify-between p-3 ${styles.border} rounded-lg shadow-lg`}>
        <div className="text-xl font-semibold mb-4 text-center my-3">Rating Summary</div>
        <div className="flex justify-between items-center">
          <span className="text-xl font-medium">LeetCode</span>
          <span className="text-2xl font-bold">{lccontestData?.contestRating ? Math.round(lccontestData.contestRating) : 'N/A'}</span>
          <span className="text-2xl font-bold text-yellow-400">{lccontestData?.ratingBadge ? Math.round(lccontestData.ratingBadge) : 'N/A'}</span>
        </div>
       
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">CodeChef</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
          <span className="text-2xl font-bold text-yellow-400">{ccData?.stars || 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">CodeForces</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
        </div>
       
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">AtCoders</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
        </div>

        <div className="flex justify-between items-center my-3">
          <span className="text-lg font-medium">GeeksForGeeks</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
          <span className="text-xl font-bold text-white">{ccData?.highestRating || 'N/A'}</span>
        </div>
      </div>

      {/* Particle Effect */}
      <Particle />
    </div>
  );
}
