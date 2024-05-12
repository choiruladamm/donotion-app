'use client';

import React, { FC } from 'react';

import Image from 'next/image';
import { useUser } from '@clerk/clerk-react';
import { PlusCircle } from 'lucide-react';
import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';

interface DocumentsPageProps {}

const DocumentsPage: FC<DocumentsPageProps> = ({}) => {
  const { user } = useUser();

  return (
    <div className='flex flex-col justify-center items-center h-full space-y-4'>
      <Image
        className='dark:hidden'
        src='/empty.png'
        alt='Empty'
        width='300'
        height='300'
      />
      <Image
        className='hidden dark:block'
        src='/empty-dark.png'
        alt='Empty'
        width='300'
        height='300'
      />
      <h2 className='text-lg font-medium'>
        Welcome to {user?.firstName}&apos;s Donotion
      </h2>
      <Button>
        <PlusCircle className='size-4 mr-2' />
        Create note
      </Button>
    </div>
  );
};

export default DocumentsPage;
