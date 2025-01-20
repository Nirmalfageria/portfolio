import axios from 'axios';

// Function to fetch LeetCode data

 const fetchLCData = async (lcusername) => {
  try {
    const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${lcusername}/`);
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
export { fetchLCData, CCData }; // Export the functions for use in the component