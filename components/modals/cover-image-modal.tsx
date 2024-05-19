'use client';

import { api } from '@/convex/_generated/api';
import { useCoverImage } from '@/hooks/use-cover-image';
import { useMutation } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { FC, useState } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';

interface CoverImageModalProps {}

const CoverImageModal: FC<CoverImageModalProps> = ({}) => {
  const params = useParams();
  const update = useMutation(api.documents.update);

  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const coverImage = useCoverImage();

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
