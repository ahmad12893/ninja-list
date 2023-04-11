import Link from 'next/link';
import React from 'react';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-bold mb-5'>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link
          href={'/ninjas/' + ninja.id}
          key={ninja.id}
          className='p-5 flex flex-col border-none bg-white m-2 w-[700px]
          font-bold transition ease-in-out delay-150 hover:-translate-y-1
          hover:scale-110 hover:bg-blue-300 duration-300'
        >
          <h3>{ninja.name}</h3>
        </Link>
      ))}
    </div>
  );
}
