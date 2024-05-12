import React, { FC } from 'react';
import { Navbar } from './_components';

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

const LandingPageLayout: FC<LandingPageLayoutProps> = ({ children }) => {
  return (
    <div className='h-full dark:bg-[#1F1F1F]'>
      <Navbar />
      <main className='h-full pt-40'>{children}</main>
    </div>
  );
};

export default LandingPageLayout;
