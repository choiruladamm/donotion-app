'use client';

import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import { ChevronsDown, ChevronsRight, LucideIcon } from 'lucide-react';
import React, { FC } from 'react';

interface ItemProps {
  id?: Id<'documents'>;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon;
}

const Item: FC<ItemProps> = ({
  id,
  label,
  onClick,
  icon: Icon,
  active,
  documentIcon,
  isSearch,
  level = 0,
  onExpand,
  expanded,
}) => {
  const ChevronIcon = expanded ? ChevronsDown : ChevronsRight;

  return (
    <div
      role='button'
      onClick={onClick}
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : '12px',
      }}
      className={cn(
        'group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium',
        active && 'bg-primary/5 text-primary'
      )}
    >
      {!!id && <div></div>}
      <Icon className='h-[18px] text-muted-foreground shrink-0 mr-2' />
      <span className='truncate'>{label}</span>
    </div>
  );
};

export default Item;
