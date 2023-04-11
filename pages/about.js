import Head from 'next/head';
const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-bold mb-5'>About</h1>
        <p className='p-5'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          quod expedita, quos alias ut aliquid perferendis placeat repudiandae
          molestias voluptatibus doloribus molestiae ad! Itaque veniam error
          repudiandae aliquid qui assumenda!
        </p>
        <p className='p-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ex sed
          eum distinctio vel nam quam tempore esse amet corporis, minima quidem
          numquam dolores quae hic nostrum error sapiente optio!
        </p>
      </div>
    </>
  );
};

export default About;
