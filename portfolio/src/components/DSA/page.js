'use client';

import React, { useState, useEffect, useRef } from 'react';
import Particle from "./../Particle";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LCContestData, CCData, CFData } from './api';
import styles from './dsa.module.css'; // Importing CSS module for styling

export default function Page() {
  const [totalQ, setTotalQ] = useState(400);
  const [totalDays, setTotalDays] = useState(400);
  const [easyQ, setEasyQ] = useState(150);
  const [mediumQ, setMediumQ] = useState(200);
  const [hardQ, setHardQ] = useState(50);
  const [totalContests, setTotalContests] = useState(10);
  const [CFContests, setCFContests] = useState(2);
  const [ATContests, setATContests] = useState(2);
  const [GFGContests, setGFGContests] = useState(2);

  const usernames = {
    leetcode: "john_doe",
    codechef: "chef123", 
    codeforces: "coder456",
    atcoder: "at789",
    geeksforgeeks: "geek101",
    github: "dev202"
  };

  const ccDataRef = useRef(null);
  const lccontestDataRef = useRef(null);
  const CFContestsRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CCData(usernames.codechef);
        const lccdata = await LCContestData(usernames.leetcode);
        const cfdata = await CFData(usernames.codeforces);
        ccDataRef.current = data;
        lccontestDataRef.current = lccdata;
        CFContestsRef.current = cfdata;

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const ccData = ccDataRef.current;
  const lccontestData = lccontestDataRef.current;

  useEffect(() => {
    setTotalContests(
      (ccData?.ratingData?.length || 0) + (lccontestData?.contestAttend || 0) + (CFContestsRef?.contestAttend || 0)
    );
  }, [ccData, lccontestData, CFContestsRef]);

  return (
    <div className={`container-fluid p-4 ${styles.main}`}>
      <div className="row g-4">
        {/* Profile Section */}
        <div className="col-md-2">
          <div className={`card bg-dark text-white ${styles.border}`}>
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Profiles</h4>
              {[
                { name: "LeetCode", url: `https://leetcode.com/u/${usernames.leetcode}` },
                { name: "CodeChef", url: `https://www.codechef.com/users/${usernames.codechef}` },
                { name: "CodeForces", url: `https://codeforces.com/profile/${usernames.codeforces}` },
                { name: "AtCoder", url: `https://atcoder.jp/users/${usernames.atcoder}` },
                { name: "GeeksForGeeks", url: `https://www.geeksforgeeks.org/user/${usernames.geeksforgeeks}/` },
                { name: "GitHub", url: `https://github.com/${usernames.github}` },
              ].map((platform, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                  <span>{platform.name}</span>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">Go</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="col-md-6">
          <div className={`card bg-dark text-white h-100 ${styles.border}`}>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-6">
                  <div className="card bg-secondary">
                    <div className="card-body text-center">
                      <h5>Total Questions</h5>
                      <h2>{totalQ}</h2>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card bg-secondary">
                    <div className="card-body text-center">
                      <h5>Total Active Days</h5>
                      <h2>{totalDays}</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-secondary mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between text-success mb-3">
                    <span>Easy</span>
                    <span>{easyQ}</span>
                  </div>
                  <div className="d-flex justify-content-between text-warning mb-3">
                    <span>Medium</span>
                    <span>{mediumQ}</span>
                  </div>
                  <div className="d-flex justify-content-between text-danger">
                    <span>Hard</span>
                    <span>{hardQ}</span>
                  </div>
                </div>
              </div>

              <div className="card bg-secondary">
                <div className="card-body">
                  <h4 className="text-center mb-4">Contests Summary</h4>
                  <div className="d-flex justify-content-between mb-2 bg-dark p-2 rounded">
                    <span>Total Contests</span>
                    <span>{totalContests}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>LeetCode</span>
                    <span>{lccontestData?.contestAttend ? Math.round(lccontestData.contestAttend) : 'N/A'}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>CodeChef</span>
                    <span>{ccData?.ratingData?.length ? ccData.ratingData.length : 'N/A'}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>CodeForces</span>
                    <span>{CFContests}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>AtCoder</span>
                    <span>{ATContests}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>GeeksForGeeks</span>
                    <span>{GFGContests}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Summary */}
        <div className="col-md-4">
          <div className={`card bg-dark text-white h-100 ${styles.border}`}>
            <div className="card-body">
              <h4 className="text-center mb-4">Rating Summary</h4>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span>LeetCode</span>
                <span>{lccontestData?.contestRating ? Math.round(lccontestData.contestRating) : 'N/A'}</span>
                <span className="text-warning">{lccontestData?.ratingBadge ? Math.round(lccontestData.ratingBadge) : 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span>CodeChef</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
                <span className="text-warning">{ccData?.stars || 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span>CodeForces</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span>AtCoders</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span>GeeksForGeeks</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
                <span>{ccData?.highestRating || 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Particle />
    </div>
  );
}
