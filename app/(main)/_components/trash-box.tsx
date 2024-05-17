'use client';

import { Spinner } from '@/components/spinner';
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import { useParams, useRouter } from 'next/navigation';
import React, { FC } from 'react';

interface TrashBoxProps {}

const TrashBox: FC<TrashBoxProps> = ({}) => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  if (documents === undefined) {
    return (
      <div className="flex h-full items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return <div className='text-sm'>
    
  </div>;
};

export default TrashBox;
