import React from 'react';

const Location = ({ name }) => {
  return (
    <label className='label cursor-pointer justify-start gap-2'>
      <input
        type='checkbox'
        id={name}
        defaultChecked={false}
        className='checkbox checkbox-accent'
      />
      <span className='label-text' htmlFor={name}>
        {name}
      </span>
    </label>
  );
};

export default Location;
