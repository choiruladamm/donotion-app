'use client';

import { LucideIcon } from 'lucide-react';
import React, { FC } from 'react';

interface ItemProps {
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

const Item: FC<ItemProps> = ({ label, onClick, icon: Icon }) => {
  return (
    <div
      role='button'
      onClick={onClick}
      style={{ paddingLeft: '12px' }}
      className='group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium'
    >
      <Icon className='h-[18px] text-muted-foreground shrink-0 mr-2' />
      <span className='truncate'>{label}</span>
    </div>
  );
};

export default Item;
