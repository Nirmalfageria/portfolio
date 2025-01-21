import axios from 'axios';

// Function to fetch LeetCode data

 const LCContestData = async (lcusername) => {
  try {
    const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${lcusername}/contest`);
    console.log(response.data)
    return response.data; // Return the data

  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    throw error; // Propagate the error for handling in the component
  }
};

const CCData = async(ccusername) => {
    // console.log(ccusername);
  try {
    const response = await axios.get(`https://codechef-api.vercel.app/handle/${ccusername}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching CodeChef data:', error);
    throw error;
  }
}

const CFData = async(cfusername) => {
    try {
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${cfusername}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching CodeForces data:', error);
        throw error;
    }
}

export { LCContestData, CCData ,CFData}; // Export the functions for use in the component