import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="h-10 text-gray-900 bg-white flex flex-row justify-center items-center px-16 border-t-2 border-solid border-t-gray-300"
      data-testid="footer"
    >
      <a className="no-underline">Copyright © {currentYear} Chef Virtual</a>
    </footer>
  );
};
