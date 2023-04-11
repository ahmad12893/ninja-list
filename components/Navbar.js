import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className='flex flex-col justify-center items-center p-5 font-mono bg-slate-400'>
      <div className='mr-auto font-bold border-b'>
        <Image src='/logo.png' width={128} height={77} />
      </div>
      <div className='flex space-x-32 p-5 ml-auto border-b'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/ninjas'>Ninja Listing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
