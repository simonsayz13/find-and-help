import React from 'react';

const Opportunity = () => {
  return (
    <div>
      <label for='my-modal' className='btn btn-primary modal-button'>
        New Opportunity
      </label>
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Space to add new Volunteering Opportunities
          </h3>
          <p className='py-4'>Blah blah blah</p>
          <div className='modal-action'>
            <label for='my-modal' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
