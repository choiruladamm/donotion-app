'use client';

import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { ArrowRight } from "lucide-react"

interface HeadingProps {}

const Heading: FC<HeadingProps> = ({}) => {
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
      <Button>Enter Donotion <ArrowRight className='ml-1 size-5' /></Button>
    </div>
  );
};

export default Heading;
