import Image from "next/image";
import Navbar from './components/Navbar/page';
import DSA from '../app/components/DSA/page'
export default function Home() {
  const usernames = {
    leetcode: 'nirmal_fageria',
    codeforces: 'nirmalfageria15',
    codechef: 'fageria15',
    atcoder: 'fageria15',
    geeksforgeeks: 'nirmalfageria15',
    github: 'Nirmalfageria',
  }; // Example object of usernames
  
  return (
   <div  className='flex w-full h-full '>
   <DSA usernames={usernames} />
   </div>
  );
}
