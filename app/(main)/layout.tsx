'use client';

import { Spinner } from '@/components/spinner';
import { useConvexAuth } from 'convex/react';
import { redirect } from 'next/navigation';
import React, { FC } from 'react';
import { Sidebar } from './_components';
import SearchCommand from '@/components/search-command';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-screen grid place-items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect('/');
  }

  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Sidebar />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
