import React from 'react';
import FilterModal from './filtermodal';
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
            <FilterModal />
          </li>
          <li>
            <Opportunity />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
