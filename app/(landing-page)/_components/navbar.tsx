'use client';

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { Logo } from '.';
import { ModeToggle } from '@/components/mode-toogle';
import { useConvexAuth } from 'convex/react';
import { SignInButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
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
        {isLoading && <Spinner />}

        <ModeToggle />

        {!isAuthenticated && !isLoading && (
          <div className='space-x-2'>
            <SignInButton mode='modal'>
              <Button variant='outline' size='sm'>
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode='modal'>
              <Button size='sm'>Get Donotion free</Button>
            </SignInButton>
          </div>
        )}

        {isAuthenticated && !isLoading && (
          <div className='items-center flex gap-x-2'>
            <Button size='sm' asChild>
              <Link href='/documents'>Enter Donotion</Link>
            </Button>
            <Button
              size='icon'
              className='size-9'
            >
              <UserButton afterSignOutUrl='/' />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
