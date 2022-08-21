import React from 'react';
import NewOpportunityForm from './newOpportunityForm';

const Opportunity = () => {
  return (
    <div>
      <label
        htmlFor='opportunity-modal'
        className='btn btn-primary w-40 modal-button text-xs md:w-48 md:text-base'
      >
        New Opportunity
      </label>
      <input type='checkbox' id='opportunity-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>New Volunteering Opportunity</h3>
          <NewOpportunityForm />
          <div className='modal-action'>
            <label htmlFor='opportunity-modal' className='btn btn-ghost'>
              Cancel
            </label>
            <label htmlFor='opportunity-modal' className='btn btn-primary'>
              Submit
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunity;
