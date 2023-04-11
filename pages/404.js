import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold p-5'>....Oooops</h1>
      <h2 className='p-5 text-3xl'>This page cannot be found</h2>
      <p className='p-5 text-2xl'>
        Go back to the{' '}
        <Link className='border-b border-black' href='/'>
          {' '}
          Homepage
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
