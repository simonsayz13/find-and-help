import React from 'react';
import FilterBar from './filterbar';
import Opportunity from './opportunity';

const Navbar = () => {
  return (
    <div className='md:hidden navbar bg-base-100'>
      <div className='flex-1'>
        <label className='normal-case text-xl'>Volunteer</label>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <FilterBar />
          </li>
          <li>
            <Opportunity />
          </li>
        </ul>
      </div>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
    </div>
  );
};

export default Navbar;
