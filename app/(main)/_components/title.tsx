'use client';

import React, { FC } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface TitleProps {}

const Title = ({}): TitleProps => {
  return <div>Title</div>;
};

export default Title;

Title.Skeleton = function TitleSkeleton() {
  return <Skeleton className="w-20 h-8 rounded-md" />;
};
