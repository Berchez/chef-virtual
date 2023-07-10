import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo.png';

export const Menu = () => {
  return (
    <nav className="h-11   text-gray-900 bg-white flex flex-row justify-start items-center px-16 border-b-2 border-solid border-b-gray-300">
      <div className="flex flex-row gap-x-2 items-center font-semibold">
        <Image alt="logo do chef virtual" src={logo} width={32} />
        <p className="m-0">Chef Virtual</p>
      </div>
    </nav>
  );
};
