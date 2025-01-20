import axios from 'axios';

// Function to fetch LeetCode data
export const fetchLeetCodeData = async (lcusername) => {
  try {
    const response = await axios.get(`https://alfa-leetcode-api.onrender.com/${lcusername}/`);
    return response.data; // Return the data
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    throw error; // Propagate the error for handling in the component
  }
};
