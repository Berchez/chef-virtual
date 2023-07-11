import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="h-10 text-gray-900 font-semibold bg-white flex flex-row justify-center items-center md:px-16 px-8 border-t-2 border-solid border-t-gray-300"
      data-testid="footer"
    >
      <a className="no-underline text-gray-950">
        Copyright © {currentYear} Chef Virtual
      </a>
    </footer>
  );
};
