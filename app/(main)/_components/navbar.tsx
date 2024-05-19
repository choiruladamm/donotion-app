'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';
import Title from './title';
import Menu from './menu';
import { MenuIcon } from 'lucide-react';
import Banner from './banner';

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar: FC<NavbarProps> = ({ isCollapsed, onResetWidth }) => {
  const params = useParams();

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<'documents'>,
  });

  if (document === undefined) {
    return (
      <nav
        className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full
      flex justify-between gap-x-4"
      >
        <Title.Skeleton />
        <div className="flex gap-x-2 items-center">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (document === null) return null;

  return (
    <>
      <nav
        className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full
      flex gap-x-4 items-center"
      >
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="size-6 text-muted-foreground"
          />
        )}
        <div className="flex justify-between items-center w-full">
          <Title initialData={document} />
          <div className="flex gap-x-2 items-center">
            {/* <Publish initialData={document}/> */}
            <Menu documentId={document._id} />
          </div>
        </div>
      </nav>
      {/* {document.isArchived && <Banner documentId={document._id} />} */}
    </>
  );
};

export default Navbar;
