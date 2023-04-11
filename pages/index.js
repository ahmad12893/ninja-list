import Link from 'next/link';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold mb-5'> Homepage</h1>
        <p className='p-5'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
          excepturi ullam itaque voluptatibus ab id facere minus magnam neque
          libero voluptatum cumque, corporis voluptatem recusandae quaerat autem
          labore quo numquam.
        </p>
        <p className='p-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda hic
          aliquid atque accusamus ut quis tempore beatae temporibus possimus
          eveniet? Eveniet at dolor id molestias! Assumenda nobis voluptas
          debitis sed.
        </p>
        <Link href='/ninjas'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-10'>
            See Ninja Listing
          </button>
        </Link>
      </div>
    </>
  );
}
