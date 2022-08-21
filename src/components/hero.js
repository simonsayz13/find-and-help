import React from 'react';
import OpportunityLg from './opportunityLg';

const Hero = () => {
  /**TODO:
   * - [x] extract add opportunity button to component
   * - style responsive version of Add opportunity button
   * - use add VO button in hero and navbar
   * - add background image to full size hero
   * - full size hero in a box with image surround
   * - add sliding filter sidebar component
   * - responsive filter sidebar as folding mobile sidebar or full size
   * - flesh out add opportunity modal
   * - mock opportunities
   * - add opportunity card to content
   * - flesh out opportunity card
   * - add responsive search bar
   */

  return (
    <div className='hidden grid-in-hero md:hero '>
      <div className='hero-content flex-col'>
        <div className='flex flex-col gap-4 items-center md:flex-row md:gap-8'>
          <h1 className='text-5xl font-bold'>Volunteering</h1>
          <OpportunityLg />
        </div>
      </div>
    </div>
  );
};

export default Hero;
