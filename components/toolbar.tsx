'use client';

import { Doc } from '@/convex/_generated/dataModel';
import React, { FC } from 'react';

interface ToolbarProps {
  initialData: Doc<'documents'>;
  preview?: boolean;
}

const Toolbar: FC<ToolbarProps> = ({ initialData, preview }) => {
  return <div className="pl-[54px] group relative">
    {!!initialData.icon && !preview && (
      <div className='flex gap-x-2 items-center group/icon pt-6'></div>
    )}
  </div>;
};

export default Toolbar;
