'use client';

import { Doc, Id } from '@/convex/_generated/dataModel';
import React, { FC } from 'react';

interface DocumentListProps {
  parentDocumentId?: Id<'documents'>;
  lavel?: number;
  data?: Doc<'documents'>;
}

const DocumentList: FC<DocumentListProps> = ({
  parentDocumentId,
  lavel = 0,
  data,
}) => {
  return (
    <div></div>
  )
};

export default DocumentList;
