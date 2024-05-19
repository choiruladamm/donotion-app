'use client';

import { Popover } from '@/components/ui/popover';
import { Doc } from '@/convex/_generated/dataModel';
import React, { FC } from 'react';

interface PublishProps {
  initialData: Doc<'documents'>;
}

const Publish: FC<PublishProps> = ({ initialData }) => {
  return <Popover></Popover>;
};

export default Publish;
