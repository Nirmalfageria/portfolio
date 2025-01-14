import Image from "next/image";
import Navbar from './components/Navbar/page';
import DSA from '../app/components/DSA/page'
export default function Home() {
  return (
   <div  className='flex w-full h-full '>
   <DSA/>
   </div>
  );
}
