import React from 'react';

const Hero = () => {
  return (
    <div class='hidden grid-in-hero md:hero bg-base-200'>
      <div class='hero-content flex-col'>
        <div class='flex flex-col gap-4 items-center md:flex-row md:gap-8'>
          <h1 class='text-5xl font-bold'>Volunteering</h1>
          <button class='btn btn-primary w-48'>Add Opportunity</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
