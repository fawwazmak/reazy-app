import { useState, useEffect } from "react";

const Preloader = () => {
  const images = ['/rafiki.png', '/cuate.png', '/pana.png'];
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 3) {
      setCounter((prevCounter) => (prevCounter + 1) % images.length);
      setValue(0); 
    }
  }, [value]);

  const incrementValue = () => {
    setValue((prevValue) => (prevValue + 1) % images.length);
    console.log(value)
  };

  return (
    <div className='bg-blue-200 w-full h-full flex flex-col text-center gap-8 py-12 font-[Inter]'>
      <img src={images[value]} alt={`Slide ${counter + 1}`} className='block md:h-[60%] mx-auto aspect-square' />
      
      <div className='flex flex-col'>
        <h1 className='font-extrabold'>Welcome</h1>
        <p>Welcome to our virtual library, access study materials anywhere anytime</p>
      </div>

      <div className='flex md:gap-5 gap-2 items-center justify-center'>
        <div className={`h-4 w-4 rounded-full ${value === 0 ? 'bg-blue-400' : 'bg-white'}`}></div>
        <div className={`h-4 w-4 rounded-full ${value === 1 ? 'bg-blue-400' : 'bg-white'}`}></div>
        <div className={`h-4 w-4 rounded-full ${value === 2 ? 'bg-blue-400' : 'bg-white'}`}></div>
      </div>

      <button className={`bg-blue-500 text-white w-fit py-3 px-8 rounded-md mx-auto ${value < 2? 'block' : 'hidden'}`} onClick={incrementValue}>SKIP</button>

      <button className={`bg-blue-500 text-white w-fit py-3 px-8 rounded-md mx-auto ${value < 2? 'hidden' : 'block'}`}>GET STARTED</button>


    </div>
  );
};

export default Preloader;
