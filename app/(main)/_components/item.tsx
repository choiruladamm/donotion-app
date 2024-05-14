'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react';
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

const Item = ({
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
}: ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight;

  const handleExpand = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    onExpand?.();
  };

  return (
    <div
      role="button"
      onClick={onClick}
      style={{
        paddingLeft: level ? `${level * 12 + 12}px` : '12px',
      }}
      className={cn(
        'group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium',
        active && 'bg-primary/5 text-primary'
      )}
    >
      {!!id && (
        <div
          className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1"
          onClick={handleExpand}
          role="button"
        >
          <ChevronIcon className="w-4 h-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">{documentIcon}</div>
      ) : (
        <Icon className="shrink-0 size[18px] mr-2 text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd
          className="ml-auto pointer-events-none inline-flex gap-1 items-center h-5 select-none rounded border
        bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
          <span className="text-xs">CTRL</span>K
        </kbd>
      )}
    </div>
  );
};

export default Item;

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      className="flex gap-x-2 py-[3px]"
      style={{ paddingLeft: level ? `${level * 12 + 25}px` : '12px' }}
    >
      <Skeleton className="w-4 h-4" />
      <Skeleton className="w-4 h-[30%]" />
    </div>
  );
};
