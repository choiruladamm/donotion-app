'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { Logo } from '.';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
        scrolled && 'border-b shadow-sm'
      )}
    >
      <Logo />
      <div className='flex md:ml-auto md:justify-end justify-between w-full items-center gap-x-2'>
        Login
      </div>
    </div>
  );
};

export default Navbar;
