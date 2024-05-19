'use client ';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from './ui/button';
import { useCoverImage } from '@/hooks/use-cover-image';
import { ImageIcon, X } from 'lucide-react';

interface CoverProps {
  url?: string;
  preview?: boolean;
}

const Cover: FC<CoverProps> = ({ url, preview }) => {
  const coverImage = useCoverImage();

  const onRemove = () => {};

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

      {url && !preview && (
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5 flex gap-x-2 items-center">
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={() => coverImage.onReplace(url)}
          >
            <ImageIcon className="size-4 mr-2" />
            Change Cover
          </Button>
          <Button
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
            onClick={onRemove}
          >
            <X className="size-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
