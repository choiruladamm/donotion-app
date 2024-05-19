'use client ';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';

interface CoverProps {
  url?: string;
  preview?: boolean;
}

const Cover: FC<CoverProps> = ({ url, preview }) => {
  return (
    <div
      className={cn(
        `relative w-full h-[35vh] group`,
        !url && 'h-[12vh]',
        url && 'bg-muted'
      )}
    >
      {!!url && (
        <Image className="object-cover" src={url} alt="Cover Image" fill />
      )}
    </div>
  );
};

export default Cover;
