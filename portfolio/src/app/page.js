import Image from "next/image";
import Navbar from './components/Navbar/page';
import DSA from '../app/components/DSA/page'
export default function Home() {
  const usernames = {
    leetcode: 'fageria15',
    codeforces: 'fageria15',
    codechef: 'fageria15',
    atcoder: 'fageria15',
    geeksforgeeks: 'fageria15'
  }; // Example object of usernames
  
  return (
   <div  className='flex w-full h-full '>
   <DSA usernames={usernames} />
   </div>
  );
}
