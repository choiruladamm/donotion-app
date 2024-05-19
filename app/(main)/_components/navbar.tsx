'use client';

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';
import Title from './title';
import Menu from './menu';

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

  return <div>Navbar</div>;
};

export default Navbar;
