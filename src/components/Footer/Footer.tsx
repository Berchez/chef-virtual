import React from 'react';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="h-10 text-gray-950 font-semibold bg-white flex flex-row justify-center items-center md:px-16 px-8 border-t-2 border-solid border-t-gray-300"
      data-testid="footer"
    >
      {t('copyright', { year: currentYear })}
    </footer>
  );
};
