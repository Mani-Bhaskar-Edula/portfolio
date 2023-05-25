import React from 'react';


const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <h1
          className='text-accent text-[26px] lg:text-[30px] font-secondary font-semibold uppercase'
          wrapper='span'>
          MANI BHASKAR</h1>
        </a>

        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
