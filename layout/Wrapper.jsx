import React from 'react';

const Wrapper = ({ children }) => {
  return (
    <div className='px-4 py-16 sm:px-8 lg:px-16 w-full mx-auto'>{children}</div>
  );
};

export default Wrapper;
