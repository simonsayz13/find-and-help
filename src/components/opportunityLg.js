import React from 'react';

const OpportunityLg = () => {
  return (
    <div>
      <label
        htmlFor='opportunity-modal-lg'
        className='btn btn-primary w-40 modal-button text-xs md:w-48 md:text-base'
      >
        New Opportunity
      </label>
      <input
        type='checkbox'
        id='opportunity-modal-lg'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Space to add new Volunteering Opportunities
          </h3>
          <p className='py-4'>Blah blah blah</p>
          <div className='modal-action'>
            <label htmlFor='opportunity-modal-lg' className='btn'>
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityLg;
