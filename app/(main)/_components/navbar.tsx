'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation';
import React, { FC } from 'react';

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

const Navbar: FC<NavbarProps> = ({ isCollapsed, onResetWidth }) => {
  const params = useParams();

  // const documents = useQuery()
  
  return <div>Navbar</div>;
};

export default Navbar;
