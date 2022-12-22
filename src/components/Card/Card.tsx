import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export const Card = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4'>
      <img
        src={require('./lukas.jpg')}
        alt={'Lukas'}
        className={'shadow rounded-full flex items-center justify-center w-64'}
      />
      <div className='flex flex-row text-5xl'>
        <a href={'https://github.com/lukketotte'} className='hover:text-blue-400'>
          <AiFillGithub />
        </a>
        <a
          href={'https://www.linkedin.com/in/lukas-arnroth-b51430140/'}
          className='hover:text-blue-400'
        >
          <AiFillLinkedin />
        </a>
        <a href={'mailto: lukas.arnroth@gmail.com'} className='hover:text-blue-400'>
          <AiFillMail />
        </a>
      </div>
    </div>
  );
};
