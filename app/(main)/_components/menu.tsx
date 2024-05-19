import { Skeleton } from '@/components/ui/skeleton';
import React, { FC } from 'react';

interface MenuProps {}

const Menu = ({}): MenuProps => {
  return <div>Menu</div>;
};

export default Menu;

Menu.Skeleton = function MenuSkeleton() {
  return <Skeleton className="size-10" />;
};
