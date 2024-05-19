'use client';

import React, { FC, useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Doc } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface TitleProps {
  initialData: Doc<'documents'>;
}

const Title = ({ initialData }: TitleProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const update = useMutation(api.documents.update);

  const [title, setTitle] = useState(initialData.title || 'Untitled');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const enableInput = () => {
    setTitle(initialData.title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);

    update({
      id: initialData._id,
      title: e.target.value || 'Untitled',
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      disableInput();
    }
  };

  return (
    <div className="flex gap-x-1 items-center">
      {!!initialData && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={enableInput}
          onBlur={disableInput}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="h-7 px-2 focus-visible:ring-transparent"
        />
      ) : (
        <Button
          className="font-normal h-auto p-1"
          variant="ghost"
          size="sm"
          onClick={enableInput}
        >
          <span className="truncate">{initialData?.title}</span>
        </Button>
      )}
    </div>
  );
};

export default Title;

Title.Skeleton = function TitleSkeleton() {
  return <Skeleton className="w-20 h-8 rounded-md" />;
};
