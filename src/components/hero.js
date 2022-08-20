import React from 'react';

const Hero = () => {
  return (
    <div className='hidden grid-in-hero md:hero bg-base-200'>
      <div className='hero-content flex-col'>
        <div className='flex flex-col gap-4 items-center md:flex-row md:gap-8'>
          <h1 className='text-5xl font-bold'>Volunteering</h1>
          <button className='btn btn-primary w-48'>Add Opportunity</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
