'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft } from 'lucide-react';
import React, { ElementRef, FC, useRef, useState } from 'react';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<'aside'>>(null);
  const navbarRef = useRef<ElementRef<'div'>>(null);
  const [isResetting, setIsResetting] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <aside
        className={cn(
          'group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[99999]'
        )}
      >
        <div
          role='button'
          className={cn(
            'w-6 h-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition'
          )}
        >
          <ChevronsLeft className='size-6' />
        </div>
        <div>
          <p>Actions items</p>
        </div>
        <div className='mt-4'>
          <p>Documents</p>
        </div>
        <div className='opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0' />
      </aside>
    </>
  );
};

export default Sidebar;
