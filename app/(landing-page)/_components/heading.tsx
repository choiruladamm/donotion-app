'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { useConvexAuth } from 'convex/react';
import { Spinner } from '@/components/spinner';
import Link from 'next/link';
import { SignInButton } from '@clerk/clerk-react';

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className='max-w-3xl space-y-4'>
      <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold'>
        Your Ideas, Documents, & Plans. Unified. Welcome to{' '}
        <span className='underline'>Donotion</span>
      </h1>
      <h3 className='text-base sm:text-xl md:text-2xl font-medium'>
        Donotion is the connected workspace where <br />
        better, faster work happens
      </h3>
      {isLoading && (
        <div className='w-full flex justify-center items-center'>
          <Spinner size='lg' />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href='/documents'>
            Enter Donotion
            <ArrowRight className='size-4 ml-2' />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode='modal'>
          <Button>
            Get Donotion Free
            <ArrowRight className='size-4 ml-2' />
          </Button>
        </SignInButton>
      )}
    </div>
  );
};

export default Heading;
