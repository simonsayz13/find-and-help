import React from 'react';
import FilterModal from './filtermodal';
import Opportunity from './opportunity';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-opacity-95  md:hidden navbar bg-slate-400 '>
      <div className='flex-1'>
        <label className='normal-case text-2xl pl-2 font-bold'>Volunteer</label>
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
